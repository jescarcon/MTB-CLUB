import Footer from "../../Footer/Footer"
import Navbar from "../../Navbar/Navbar"
import Form from "../Form/Form"

function Login() {
    return (
    <>
    <Navbar/>
    <Form route="/api/token/" method="login" />
    <p style={{ width: "fit-content", margin: "0 auto" }}>
        Don't have an account?
        <a href="/register"> Register now!</a>
    </p>
    <Footer/>
    </>)
}

export default Login
