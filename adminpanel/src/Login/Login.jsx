import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Login.css'
function Login() {

    const [userId, setUserId] = useState("test@gmail.com");
    const [password, setPassword] = useState("123456");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();


        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_API}/admin/login`,
                { userId, password },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            const accessToken = res.data.accessToken;
            const user = res.data.user;

            if (user.role !== "admin") {
                alert("Your Role is Not Of Admin")
                return;
            }
            sessionStorage.setItem("accessToken", accessToken);
            sessionStorage.setItem("role", user.role);
            navigate("/admin/main");

        } catch (err) {
            console.error("Login error:", err);
            alert("Invalid credentials. Try again.");
        }
    };

    return (
        <div className="AdminLogin-Wrapper">
            <div className="AdminLogin-Box">

                <h2>Admin Login</h2>

                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Admin User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <p className="AdminLogin-Error">{error}</p>}

                    <button type="submit">Login</button>
                </form>

            </div>
        </div>
    );

}

export default Login;
