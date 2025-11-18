import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";

function CropImage({ file, onCropDone }) {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const onCropComplete = useCallback((_, croppedPixels) => {
        setCroppedAreaPixels(croppedPixels);
    }, []);

    const generateCroppedImage = async () => {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        await new Promise((resolve) => (image.onload = resolve));
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        ctx.drawImage(
            image,
            croppedAreaPixels.x,
            croppedAreaPixels.y,
            croppedAreaPixels.width,
            croppedAreaPixels.height,
            0,
            0,
            croppedAreaPixels.width,
            croppedAreaPixels.height
        );

        canvas.toBlob((blob) => {
            const croppedFile = new File([blob], file.name, { type: file.type });
            onCropDone(croppedFile);
        }, file.type);
    };

    return (
        <div
            style={{
                width: "100%",
                maxWidth: "450px",
                margin: "auto",
                background: "#fff",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
        >
            {/* Cropper Area */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "300px",
                    background: "#333",
                }}
            >
                <Cropper
                    image={URL.createObjectURL(file)}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                />
            </div>
            <div
                style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <button
                    onClick={generateCroppedImage}
                    style={{ padding: "10px 20px", background: "green", color: "#fff" }}
                >
                    Done
                </button>
            </div>
        </div>
    );
}

export default CropImage;
