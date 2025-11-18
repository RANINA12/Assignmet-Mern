import axios from "axios";
import { useEffect, useState } from "react";
import "./ViewDetails.css"
import { toast } from "react-toastify";
function ViewDetails() {

    const [details, setDetails] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchDetails = async () => {
            setloading(true);
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_API}/admin/view-all-request`,
                    {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
                        },
                        withCredentials: true
                    }
                );

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
        <div className="ConsultList-container">
            <h2 className="ConsultList-title">Consultation Requests</h2>

            {loading ? (
                <p className="SubscribeList-empty">Loading...</p>
            ) : details.length === 0 ? (
                <p className="SubscribeList-empty">No data found</p>
            ) : (
                details.map((item, index) => (
                    <div className="ConsultList-item" key={index}>
                        <p><strong>Name:</strong> {item.Name}</p>
                        <p><strong>Email:</strong> {item.Email}</p>
                        <p><strong>Mobile:</strong> {item.Mobile}</p>
                        <p><strong>City:</strong> {item.City}</p>
                    </div>
                ))
            )
            }
        </div>
    );


}

export default ViewDetails;
