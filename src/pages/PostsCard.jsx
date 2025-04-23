//IMPORTAZIONI
import React from "react";
import { Link } from "react-router-dom";

//CREO FUNZIONE POSTCARD
//RICEVO LE PROPS DA POSTLIST
const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}`}>Visualizza questo post</Link>
    </div>
  );
};

//ESPORTO
export default PostCard;
