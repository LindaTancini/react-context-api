//IMPORTAZIONI
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import PostsPage from "./pages/PostsPage";
import DefaultLayout from "./layouts/DefaultLayout";
import PostsDetail from "./pages/PostsDetail";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
