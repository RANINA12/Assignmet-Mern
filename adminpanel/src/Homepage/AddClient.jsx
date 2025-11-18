import { useState } from "react";
import axios from "axios";
import './AddClient.css'
import { toast } from "react-toastify";
import CropImage from "./CropImage"
function AddClient() {

    const [Cname, SetCname] = useState("");
    const [CDescription, CSetDescription] = useState("");
    const [CDesignation, CSetDesignation] = useState("");
    const [showCropper, setShowCropper] = useState(false);
    const [tempFile, setTempFile] = useState(null);

    const [Cimage, SetCimage] = useState(null);

    const handelSubmit = async (e) => {
        e.preventDefault();


        try {
            const formData = new FormData();
            formData.append("name", Cname);
            formData.append("description", CDescription);
            formData.append("image", Cimage);
            formData.append("Designation", CDesignation);
            console.log(Cimage);
            console.log(typeof Cimage);

            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_API}/admin/Add/Client`,
                formData,
                {
                    headers: {

                        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
                    },
                    withCredentials: true
                }
            );


            if (response.status === 200) {
                toast.success("Client added successfully");
                SetCname("");
                CSetDescription("");
                CSetDesignation("");
                SetCimage(null);
            } else {
                toast.error("Failed to add client");
            }

        } catch (error) {
            toast.error("Internal Error 500");
            console.error("Error submitting form:", error);
        }
    };

    const handelImageuplaod = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setTempFile(file);   // store raw file
        setShowCropper(true); // open cropper popup
    };

    return (
        <div className="Addclient-component">
            {
                showCropper && (
                    <CropImage
                        file={tempFile}

                        onCropDone={(croppedFile) => {
                            SetCimage(croppedFile);
                            setShowCropper(false);
                        }}
                    />
                )
            }

            <form onSubmit={handelSubmit}>

                <label htmlFor="name">Name of Client</label>
                <input
                    id="name"
                    value={Cname}
                    placeholder="Enter Client Name"
                    onChange={(e) => SetCname(e.target.value)}
                />

                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="text"
                    value={CDescription}
                    placeholder="Enter Description"
                    onChange={(e) => CSetDescription(e.target.value)}
                    required
                />

                <label htmlFor="designation">Designation</label>
                <input
                    id="designation"
                    type="text"
                    value={CDesignation}
                    placeholder="Enter Designation"
                    onChange={(e) => CSetDesignation(e.target.value)}
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
export default AddClient;