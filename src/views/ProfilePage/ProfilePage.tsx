import React, { useEffect, useState } from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsGrid3X3 } from "react-icons/bs";
import { RiListUnordered } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getUser, getUserFeeds, selectUser } from "store/user";
import { ImageRenderer, Tabs } from "components/reusables";
import { formatNumberString } from "utils/helpers";
import "./ProfilePage.css";
import { FeedList, GridView } from "components";

const TabList = [
  {
    Icon: BsGrid3X3,
    name: "Grid",
  },
  {
    Icon: RiListUnordered,
    name: "List",
  },
];

const ProfilePage = () => {
  const params = useParams();
  const {
    data: { user, photos },
    loading,
    complete,
  } = useSelector(selectUser);
  const dispatch = useDispatch();

  const [tab, setTab] = useState<{ tabNum: number; scrollIdx: number | null }>({
    tabNum: 0,
    scrollIdx: null,
  });

  useEffect(() => {
    (async () => {
      await dispatch(getUser(params.username!));
      await dispatch(getUserFeeds(params.username!));
    })();
  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  const handleTabChange = (idx: number) => {
    if (tab.tabNum !== idx) setTab({ tabNum: idx, scrollIdx: null });
  };

  const handleTabChangeWithScroll = (scrollIdx: number) => {
    setTab({ tabNum: 1, scrollIdx });
  };

  const scrollAction = () => {
    console.log("Reached API call");
    dispatch(getUserFeeds(params.username!));
  };

  const { name, username, profile_image, social, bio } = user!;

  return (
    <div className="pp12Body">
      <div className="pp12Content">
        <div>
          <div className="pp12ImageContainer">
            <ImageRenderer
              url={profile_image.large}
              thumb={profile_image.small}
            />
          </div>
        </div>
        <div className="pp12Details">
          <div className="pp12Row1">
            <div className="pp12Name">
              <h1>{name}</h1>
              <p>{username}</p>
            </div>
            <div className="pp12Socials">
              <a href={`https://instagram.com/${social.instagram_username}`}>
                <AiFillInstagram size={26} className="pp12Icon" />
              </a>
              <a href={`https://twitter.com/${social.twitter_username}`}>
                <AiFillTwitterCircle size={26} className="pp12Icon" />
              </a>
            </div>
          </div>
          {bio && <p className="pp12bio">{bio}</p>}
          <div className="pp12Stats">
            <p className="pp12StatContainer">
              {" "}
              <p className="pp12Stat">Likes:</p>{" "}
              {formatNumberString(user.total_likes, 2)}
            </p>

            <p className="pp12StatContainer">
              <p className="pp12Stat">Photos:</p>{" "}
              {formatNumberString(user.total_photos, 2)}
            </p>
            <p className="pp12StatContainer">
              {" "}
              <p className="pp12Stat">Downloads:</p>{" "}
              {formatNumberString(user.downloads, 2)}
            </p>

            <p className="pp12StatContainer">
              <p className="pp12Stat">Followers:</p>{" "}
              {formatNumberString(user.followers_count, 2)}
            </p>
            <p className="pp12StatContainer">
              {" "}
              <p className="pp12Stat">Following:</p>{" "}
              {formatNumberString(user.following_count, 2)}
            </p>
          </div>
        </div>
      </div>
      <hr className="pp12Line" />
      <Tabs
        selectedTab={tab.tabNum}
        list={TabList}
        onTabChange={handleTabChange}
      />
      {tab.tabNum === 0 ? (
        <GridView handleClick={handleTabChangeWithScroll} />
      ) : (
        <div className="pp12ListContainer">
          <FeedList
            complete={complete || false}
            data={photos}
            loading={loading}
            scrollAction={scrollAction}
            scrollIdx={tab.scrollIdx}
          />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
