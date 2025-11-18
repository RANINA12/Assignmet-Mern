import { useState, useEffect } from "react";
import Rcard from "./Card/Rcard"
import './ReviewSection.css'
import axios from "axios";
import { toast } from "react-toastify";
function ReviewSection() {

    const [client, Setclient] = useState([]);

    useEffect(() => {
        const FetchReview = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/getclientreview`);
                Setclient(response.data.msg);

            } catch (error) {

                toast.error("Error fetching reviews");
                console.error("Error fetching reviews:", error);
            }
        };
        FetchReview();
    }, []);

    if (client.length === 0) {
        return <div className="ReviewEmpty">No Review to Display</div>;
    }

    return (
        <div className="ReviewSection">
            <h1 className="ProductsTitle">Happy Clients</h1>

            <div className="Review-component" id="Testimonials-section">
                {client.map((item, index) => (
                    <Rcard
                        key={index}
                        Rimagepath={item.CImagepath}
                        Rname={item.CName}
                        Rdescription={item.CDescription}
                        Rdesignation={item.CDesignation}
                    />
                ))}
            </div>
        </div>

    );


}

export default ReviewSection;