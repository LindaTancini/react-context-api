//IMPORTAZIONI
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import PostCard from "./PostsCard";

//CREO FUNZIONE POSTLIST
function PostsList() {
  //CREO STATO PER METTERE I POST IN PAGINA
  const [posts, setPosts] = useState([]);
  //CREO CHIAMATA AXIOS CON USE EFFECT
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Errore:", err));
  }, []);

  return (
    <div className="post-list">
      {posts.map((post) => (
        //PASSIAMO LE PROPS A POSTCARD
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

//ESPORTO
export default PostsList;
