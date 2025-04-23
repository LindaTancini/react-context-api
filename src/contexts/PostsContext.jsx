//IMPORTAZIONI
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

//CREIAMO IL CONTESTO
const PostsContext = createContext();
//CREO UN PROVIDER CHE FORNIRA' I DATI DEI POST
function PostsProvider({ children }) {
  //AGGIUNGO LE VARIABILI DI STATO
  const [posts, setPosts] = useState([]);
  //FACCIO LA CHIAMATA AXIOS
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Errore:", err));
  }, []);
  return (
    //FORNIAMO I DATI AI POST A TUTTI I COMPONENTI FIGLI
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}

//CREO UN HOOK PERSONALIZZATO PER CONSUMARE IL CONTESTO
function usePosts() {
  const context = useContext(PostsContext);
  return context;
}

//ESPORTIAMO IL PROVIDER E L'HOOK
export { PostsContext, usePosts };
