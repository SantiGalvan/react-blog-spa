import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./pages/layout/DefaultLayout"
import Home from "./pages/Home"
import Posts from "./pages/Posts"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
        </Route >
      </Routes>
    </BrowserRouter>
  )
}

export default App
