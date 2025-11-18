import axios from "axios";
import { set } from "mongoose";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function ViewSubscribeEmail() {
    const [details, setDetails] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            setloading(true);
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_API}/admin/view-subscriber-email`,
                    {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
                        },
                        withCredentials: true
                    }
                );

                console.log("RESPONSE:", response.data);

                setDetails(response.data.data);
                setloading(false);

            } catch (error) {
                toast.error("Internal Error 500");
                console.log("Error fetching details:", error);
            }
        };

        fetchDetails();
    }, []);

    return (
        <div className="SubscribeList-container">
            <h2 className="SubscribeList-title">Subscribe Email List</h2>

            {/* Debug viewer (remove later) */}
            {/* <pre>{JSON.stringify(details, null, 2)}</pre> */}

            {loading ? (
                <p className="SubscribeList-empty">Loading...</p>
            ) : details.length === 0 ? (
                <p className="SubscribeList-empty">No data found</p>
            ) : (
                details.map((item, index) => (
                    <div className="SubscribeList-item" key={index}>
                        <p><strong>Email:</strong> {item.Email}</p>
                    </div>
                ))
            )}

        </div>
    );
}

export default ViewSubscribeEmail;
