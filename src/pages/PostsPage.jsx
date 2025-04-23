//IMPORTAZIONI
import PostsList from "./PostsList";

//CREO FUNZIONE POSTSPAGE
function PostsPage() {
  return (
    <div className="post-list">
      <h3>Lista dei miei post:</h3>
      <PostsList />
    </div>
  );
}

//ESPORTO
export default PostsPage;
