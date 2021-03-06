import React, { useEffect, useState } from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsGrid3X3 } from "react-icons/bs";
import { RiListUnordered } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { getUser, getUserFeeds, selectUser } from "store/user";
import { Error, ImageRenderer, Skeleton, Tabs } from "common/reusables";
import { formatNumberString } from "utils/helpers";
import { FeedList, GridView, GridViewSkeleton } from "components";
import "./profilePage.css";

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

const stats = [
  { key: "followers_count", value: "Followers" },
  { key: "following_count", value: "Following" },
];

const ProfilePage = () => {
  const params = useParams();
  const {
    data: { user, photos },
    loading,
    complete,
    errors,
  } = useSelector(selectUser);
  const dispatch = useDispatch();

  const [tab, setTab] = useState<{ tabNum: number; scrollIdx: number | null }>({
    tabNum: 0,
    scrollIdx: null,
  });

  useEffect(() => {
    (async () => {
      if (!user || user.username !== params.username) {
        await dispatch(getUser(params.username!));
        await dispatch(getUserFeeds(params.username!));
      }
    })();
  }, []);

  const handleTabChange = (idx: number) => {
    if (tab.tabNum !== idx) setTab({ tabNum: idx, scrollIdx: null });
  };

  const handleTabChangeWithScroll = (scrollIdx: number) => {
    setTab({ tabNum: 1, scrollIdx });
  };

  const scrollAction = () => {
    dispatch(getUserFeeds(params.username!));
  };

  if (errors && (errors as any).status === 404) {
    return (
      <Error message="No such user exists" style={{ marginTop: "30px" }} />
    );
  }

  return (
    <div className="pp12Body">
      <div className="pp12Content">
        <div className="pp12ImageWrapper">
          <div className="pp12ImageContainer">
            {user ? (
              <ImageRenderer
                url={user.profile_image.large}
                thumb={user.profile_image.small}
              />
            ) : (
              <Skeleton style={{ height: "100%", width: "100%" }} />
            )}
          </div>
        </div>
        <div className="pp12Details">
          <div className="pp12Row1">
            <div className="pp12Name">
              {user ? (
                <>
                  <h1>{user.name}</h1>
                  <p>{user.username}</p>
                </>
              ) : (
                <>
                  <Skeleton style={{ height: "30px", width: "250px" }} />
                  <Skeleton
                    style={{
                      height: "20px",
                      width: "80px",
                      marginLeft: "10px",
                    }}
                  />
                </>
              )}
            </div>
            <div className="pp12Socials">
              {user ? (
                <>
                  {user.social.instagram_username && (
                    <a
                      href={`https://instagram.com/${user.social.instagram_username}`}
                    >
                      <AiFillInstagram size={26} className="pp12Icon" />
                    </a>
                  )}
                  {user.social.twitter_username && (
                    <a
                      href={`https://twitter.com/${user.social.twitter_username}`}
                    >
                      <AiFillTwitterCircle size={26} className="pp12Icon" />
                    </a>
                  )}
                </>
              ) : (
                <>
                  <Skeleton
                    type="circle"
                    style={{ height: "30px", width: "30px" }}
                  />
                  <Skeleton
                    type="circle"
                    style={{ height: "30px", width: "30px", marginLeft: "5px" }}
                  />
                </>
              )}
            </div>
          </div>
          {user ? (
            user.bio && <p className="pp12bio">{user.bio}</p>
          ) : (
            <Skeleton
              style={{ height: "50px", width: "100%", margin: "20px 0" }}
            />
          )}
          <div className="pp12Stats">
            {stats.map((stat, i) => (
              <div
                className="pp12StatContainer"
                style={i === 0 ? { marginLeft: "0px" } : {}}
                key={stat.key}
              >
                {user ? (
                  <>
                    <p className="pp12Stat">{stat.value}:</p>{" "}
                    {formatNumberString((user as any)[stat.key], 2)}
                  </>
                ) : (
                  <Skeleton style={{ height: "30px", width: "80px" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {user ? (
        <>
          <Tabs
            selectedTab={tab.tabNum}
            list={TabList}
            onTabChange={handleTabChange}
            disabled={!user}
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
        </>
      ) : (
        <GridViewSkeleton />
      )}
    </div>
  );
};

export default ProfilePage;
