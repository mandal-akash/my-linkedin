import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import Post from "./Post";
import "../style/feed.css";
import { db } from "../backend/Firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../feature/UserReducer";
const Feed = () => {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts").orderBy('timeStamp' , 'desc').onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [db]);

  const addPosts = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: "India/Haryana/Faridabad",
      message: input,
      photoURL: "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed-inputBox">
        <div className="feedPost">
            <Avatar  className="feedPost-avatar" src="" >{user.email[0]}</Avatar>
          <form>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addPosts} className="addPost" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="feedInput-media">
          <span className="media-icon photo">
            <i className="fa-regular fa-image fa-xl"></i>
            <p>Media</p>
          </span>
          <span className="media-icon event">
            <i className="fa-solid fa-calendar-days fa-xl"></i>
            <p>Event</p>
          </span>
          <span className="media-icon article">
            <i className="fa-solid fa-newspaper fa-xl"></i>
            <p>Write article</p>
          </span>
        </div>
      </div>
       {
        posts.map(({id , data:{name , description , message , photoURL}})=>(
          <Post key={id}
                name={name}
                description={description}
                message={message}
                photoURL={photoURL}
           />
        ))
       }
      
    </div>
  );
};

export default Feed;
