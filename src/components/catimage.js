import React, { useState, useEffect } from "react";

function CatImage() {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch("https://cataas.com/cat")
            .then((response) => response.blob())
            .then((blob) => URL.createObjectURL(blob))
            .then((url) => setImageUrl(url));
    }, []);

    return (
        <img
            className="max-h-24 w-28 rounded-xl"
            src={imageUrl}
            alt=""
        />
    );
}

export { CatImage };

