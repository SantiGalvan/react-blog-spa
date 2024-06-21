import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./pages/layout/DefaultLayout"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import PostShow from "./pages/PostShow"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="posts" >
            <Route index element={<Posts />} />
            <Route path=":slug">
              <Route index element={<PostShow />} />
            </Route>
          </Route>
        </Route >
      </Routes>
    </BrowserRouter>
  )
}

export default App
