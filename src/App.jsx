import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./pages/layout/DefaultLayout"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
        </Route >
      </Routes>
    </BrowserRouter>
  )
}

export default App
