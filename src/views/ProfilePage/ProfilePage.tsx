import { ImageRenderer } from "components/reusables";
import React, { useEffect } from "react";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUser, selectUser } from "store/user";
import { formatNumberString } from "utils/helpers";
import "./ProfilePage.css";

const ProfilePage = () => {
  const params = useParams();
  const {
    data: { user },
    loading,
  } = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(params.username!));
  }, []);

  if (loading || !user) {
    return <h1>Loading...</h1>;
  }

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
              {formatNumberString(user.total_likes)}
            </p>

            <p className="pp12StatContainer">
              <p className="pp12Stat">Photos:</p>{" "}
              {formatNumberString(user.total_photos)}
            </p>
            <p className="pp12StatContainer">
              {" "}
              <p className="pp12Stat">Downloads:</p>{" "}
              {formatNumberString(user.downloads)}
            </p>

            <p className="pp12StatContainer">
              <p className="pp12Stat">Followers:</p>{" "}
              {formatNumberString(user.followers_count)}
            </p>
            <p className="pp12StatContainer">
              {" "}
              <p className="pp12Stat">Following:</p>{" "}
              {formatNumberString(user.following_count)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
