import React, { useEffect, useState } from "react";
import "./Profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import axios from "axios";

export default function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  //クエリでusernameを取得してくる。Post.jsから持ってきた。
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      // const res = await axios.get(`users/${post.userId}`);
      //クエリの取得ができてない。
      // const res = await axios.get("/users?username=shincode");
      const res = await axios.get("/users?username=shincode");

      setUser(res.data);
      // console.log(res.data);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={PUBLIC_FOLDER + "/post/3.jpeg"}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={PUBLIC_FOLDER + "/person/1.jpeg"}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
              {/* <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span> */}
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="shincode" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
