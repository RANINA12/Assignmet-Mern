import { useState } from "react";
import './ContactForm.css'
import axios from "axios";
import { toast } from "react-toastify";
function ContactForm() {
    const [name, SetName] = useState('');
    const [mobile, SetMobile] = useState('');
    const [city, SetCity] = useState('');
    const [Semail, SetSEmail] = useState('');
    const [Cemail, SetCEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("mobile", mobile);
            formData.append("city", city);
            formData.append("email", Cemail);

            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_API}/api/ConsultRequest`,
                {
                    name,
                    mobile,
                    city,
                    email: Cemail
                },
                {
                    headers: { "Content-Type": "application/json" }
                }
            );


            if (response.status === 200) {
                toast.success("Form submitted successfully");
            } else {
                toast.error("Try again after a few minutes");
            }
            SetName('');
            SetCEmail('');
            SetMobile('');
            SetCity('');

        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error in form submitting");
        }
    };

    const handelSubscribe = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_API}/api/SubscribeRequest`,
                { email: Semail },
                {
                    headers: { "Content-Type": "application/json" }
                }
            );


            toast.success("Successfully subscribed");
            SetSEmail('');

        } catch (error) {

            if (error.response && error.response.status === 409) {
                toast.error("Already Subscribed");
                SetSEmail('');
            } else {
                toast.error("Subscription failed");
                console.log(error);
            }
        }
    };

    return (
        <div className="Consult-Image-Wrapper" >
            <div className="Consult-Image"></div>
            <div className="Right-Popup">


                <form className="Contact-Form" onSubmit={handleSubmit} id="contact-section">
                    <h2>Get a Free Consultation</h2>

                    <div className="inner-section">
                        <div className="form-group">
                            <input id="name" placeholder=" " value={name} onChange={(e) => SetName(e.target.value)} required />
                            <label htmlFor="name">Enter FullName</label>
                        </div>

                        <div className="form-group">
                            <input id="email" type="email" placeholder=" " value={Cemail} onChange={(e) => SetCEmail(e.target.value)} required />
                            <label htmlFor="email">Enter Email</label>
                        </div>

                        <div className="form-group">
                            <input id="mobile" type="tel" placeholder=" " value={mobile} onChange={(e) => SetMobile(e.target.value)} required />
                            <label htmlFor="mobile">Enter Mobile</label>
                        </div>

                        <div className="form-group">
                            <input id="city" placeholder=" " value={city} onChange={(e) => SetCity(e.target.value)} required />
                            <label htmlFor="city">Enter City</label>
                        </div>

                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </form>


                <div className="Subscribe-Section" id="Subscribe-form-scroll">
                    <form className="Subscribe-Form" onSubmit={handelSubscribe}>
                        <h4 className="textSubscribe">Subscribe</h4>

                        <div className="inner-subscribe">
                            <input id="Semail" placeholder="Enter Email" value={Semail} onChange={(e) => SetSEmail(e.target.value)} required />
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );


}

export default ContactForm;