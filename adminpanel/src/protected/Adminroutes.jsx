import { Navigate, Outlet } from "react-router-dom";

function Adminroutes() {
    const token = sessionStorage.getItem("accessToken");
    const role = sessionStorage.getItem("role");

    if (!token) return <Navigate to="/" replace />;
    if (role !== "admin") return <Navigate to="/unauthorized/acess" replace />;

    return <Outlet />;
}

export default Adminroutes;
