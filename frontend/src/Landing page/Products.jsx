import { useState, useEffect } from "react";
import axios from "axios";
import Pcard from "./Card/Pcard";
import { toast } from "react-toastify";
import './Products.css'

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const FetchProduct = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/api/getproduct`);
                setProducts(response.data.msg);

            } catch (error) {
                toast.error("Error fetching products");
                console.error("Error fetching products:", error);
            }
        };

        FetchProduct();
    }, []);

    if (products.length === 0) {
        return (
            <div className="NilProduct">No product to display</div>
        );
    }

    return (
        <div className="ProductsPage" id="Product">

            <h1 className="ProductsTitle">Our Products</h1>

            <div className="Pcards-wrapper">
                {products.map((item, index) => (
                    <Pcard
                        key={index}
                        Pimagepath={item.PImagepath}
                        Pname={item.PName}
                        Pdescription={item.PDescription}
                    />
                ))}
            </div>

        </div>
    );

}

export default Products;
