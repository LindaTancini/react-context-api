//IMPORTAZIONI
import PostCard from "./PostsCard";
import { usePosts } from "../contexts/PostsContext";

// USO L'HOOK PERSONALIZZATO PER PRENDERE I DATI DEI POST
function PostsList() {
  const { posts } = usePosts();

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
