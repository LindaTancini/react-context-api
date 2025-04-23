//IMPORTAZIONI
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import PostsPage from "./pages/PostsPage";
import DefaultLayout from "./layouts/DefaultLayout";
import PostsDetail from "./pages/PostsDetail";
import { PostsProvider } from "./contexts/PostsContext";

function App() {
  return (
    <>
      <PostsProvider>
        <BrowserRouter>
          <Routes>
            {/* CONFIGURO LE ROTTE */}
            <Route Component={DefaultLayout}>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/posts/:id" element={<PostsDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </>
  );
}

export default App;
