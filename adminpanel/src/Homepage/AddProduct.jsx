import { useState } from "react";
import axios from "axios";
import './AddProduct.css'
import { toast } from "react-toastify";
import CropImage from "./CropImage"

function AddProduct() {
    const [Pname, SetPname] = useState("");
    const [PDescription, SetPDescription] = useState("");
    const [Pimage, SetPimage] = useState(null);
    const [showCropper, setShowCropper] = useState(false);
    const [tempFile, setTempFile] = useState(null);


    const handelSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("name", Pname);
            formData.append("description", PDescription);
            formData.append("image", Pimage);

            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_API}/admin/Add/Product`,
                formData,
                {
                    headers: {

                        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
                    },
                    withCredentials: true
                }
            );
            if (response.status === 200) {
                SetPname("");
                SetPDescription("");
                SetPimage(null);
                toast.success("Product added successfully");
            } else {
                toast.error("Failed to add product");
            }

            console.log("Uploaded:", response.data);

        } catch (error) {

            console.error("Error submitting form:", error);
            toast.error("Internal Error 500");
        }
    };

    // const handelImageuplaod = (e) => {
    //     const file = e.target.files[0];

    //     if (!file) return;

    //     if (!file.type.startsWith("image/")) {
    //         alert("Only image files allowed!");
    //         return;
    //     }

    //     SetPimage(file);
    // };

    const handelImageuplaod = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setTempFile(file);   // store raw file
        setShowCropper(true); // open cropper popup
    };



    return (
        <div className="AddProduct-section">

            {
                showCropper && (
                    <CropImage
                        file={tempFile}

                        onCropDone={(croppedFile) => {
                            SetPimage(croppedFile);
                            setShowCropper(false);
                        }}
                    />
                )
            }

            <form onSubmit={handelSubmit}>

                <label htmlFor="name">Product Name</label>
                <input
                    id="name"
                    value={Pname}
                    placeholder="Enter Product Name"
                    onChange={(e) => SetPname(e.target.value)}
                />

                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
                    value={PDescription}
                    placeholder="Enter Description"
                    onChange={(e) => SetPDescription(e.target.value)}
                    required
                />

                <label htmlFor="image">Upload Image</label>
                <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handelImageuplaod}
                />

                <button type="submit">Entry</button>

            </form>

        </div>
    );



}

export default AddProduct;
