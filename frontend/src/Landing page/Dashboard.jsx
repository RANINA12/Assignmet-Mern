import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import Products from "./Products";
import ReviewSection from "./ReviewSection";
function Dashboard() {
    return (
        <div>
            <Navbar />
            <Products />
            <ReviewSection />
            <ContactForm />
        </div>
    )
}

export default Dashboard;