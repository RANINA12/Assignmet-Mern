import { Link, useNavigate } from "react-router-dom";
import "./Main.css"
function Main() {
    const navigate = useNavigate();
    return (
        <div className="AdminHome-container">

            <h2 className="AdminHome-title">This is Admin</h2>

            <div className="AdminHome-buttons">

                <button onClick={() => navigate("/admin/addproduct")}>
                    Add Product
                </button>

                <button onClick={() => navigate("/admin/addclient")}>
                    Add Client
                </button>

                <button onClick={() => navigate("/admin/seerequest")}>
                    See Requests
                </button>

                <button onClick={() => navigate("/admin/subscriberlist")}>
                    Subscriber List
                </button>

            </div>

        </div>
    );

}
export default Main;