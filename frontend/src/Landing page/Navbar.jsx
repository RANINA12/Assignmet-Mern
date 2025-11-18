import './Navbar.css'
function Navbar() {

    return (
        <div className="Navbar-Component">

            <div className="Navbar-components">
                <li id="Home">
                    Home
                </li>
                <li id="Project"
                    onClick={() => {
                        document
                            .getElementById("Project")
                            .scrollIntoView({ behavior: "smooth" });
                    }}>
                    project
                </li>
                <li id="Testimonials"
                    onClick={() => {
                        document
                            .getElementById("Testimonials-section")
                            .scrollIntoView({ behavior: "smooth" });
                    }}>
                    Testimonials
                </li>
                <li id="Subscribe"
                    onClick={() => {
                        document
                            .getElementById("Subscribe-form-scroll")
                            .scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Subscribe
                </li>
                <li
                    id="Contact"
                    onClick={() => {
                        document
                            .getElementById("contact-section")
                            .scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Contact
                </li>
            </div>

        </div>
    )
}

export default Navbar;