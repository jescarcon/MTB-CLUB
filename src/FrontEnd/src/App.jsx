import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Auth/Login/Login"
import Register from "./components/Auth/Register/Register"
import Home from "./components/Home/Home"
import NotFound from "./components/Common/Error/NotFound"
import ProtectedRoute from "./components/Common/ProtectedRoute"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
