import React from "react";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./Rightbar.css";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/star.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>フォロワー限定</b>イベント開催中！
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.jpeg" alt="" />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          {/* <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                className="rightbarProfileImg"
                src="assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Shin Code</span>
          </li> */}
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion1.jpeg"
          alt=""
        />
        <p className="promotionName">ショッピング</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion2.jpeg"
          alt=""
        />
        <p className="promotionName">カーショップ</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion3.jpeg"
          alt=""
        />
        <p className="promotionName">ShinCode株式会社</p>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Infomation</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">出身:</span>
            <span className="rightbarInfoKey">福岡</span>
          </div>
          <h4 className="rightbarTitle">User friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">田中</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/2.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">鈴木</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/3.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">佐藤</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/4.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">斎藤</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/5.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">菊川</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/6.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">松窪</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
