import React, { useState, useEffect, useRef } from "react";
import "./Feed.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArticleIcon from "@mui/icons-material/Article";
import Post from "./Post";
import { db } from "./Firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { userSelect } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(userSelect);
  const [posts, setPosts] = useState([]);
  const inputRef = useRef(null);
  const postsRef = collection(db, "posts");

  const sendPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(postsRef, {
        message: inputRef.current.value,
        profileImg: user.photoURL || "",
        name: user.displayName,
        description: user.email,
        time: serverTimestamp(),
      });
      inputRef.current.value = "";
    } catch (err) {
      console.log("error is ", err);
    }
  };

  useEffect(() => {
    const queryPosts = query(postsRef, orderBy("time", "desc"));
    const unsubscribe = onSnapshot(queryPosts, (snapshot) => {
      const tempArr = [];
      snapshot.forEach((doc) => tempArr.push({ ...doc.data(), id: doc.id }));
      setPosts(tempArr);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Avatar src={user?.photoURL} />
          <form>
            <input ref={inputRef} type="text" placeholder="Start a post" />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} color="#378fe9" title="Photo" />
          <InputOption Icon={SmartDisplayIcon} color="#5f9b41" title="Video" />
          <InputOption Icon={BusinessCenterIcon} color="#a872e8" title="Job" />
          <InputOption
            Icon={ArticleIcon}
            color="#e16745"
            title="Write article"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ description, profileImg, name, message, id }) => (
          <Post
            key={id}
            name={name}
            photourl={profileImg}
            description={description}
            message={message}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
