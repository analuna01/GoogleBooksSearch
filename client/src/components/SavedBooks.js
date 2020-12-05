import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';



function SavedBooks() {
    // const [saveTitle, setSaveTitle] = useState("");
    //     const [saveAuthors, setSaveAuthors] = useState("");
    //     const [saveDescription, setSaveDescription] = useState("");
    //     const [saveImage, setSaveImage] = useState("");
    //     const [saveLink, setSaveLink] = useState("");
    
    //     const save = () => {
    //         // Register new user
    //         axios({
    //             method: "POST",
    //             data: {
    //                 title: saveTitle,
    //                 authors: saveAuthors,
    //                 description: saveDescription,
    //                 image: saveImage,
    //                 link: saveLink,
    //             },
    //             withCredentiasl: true,
    //             url: "http://localhost:3001/save",
    //         }).then((res) => console.log(res));
    //     };
    return (
        <div className="container">
            <h1>Saved Books</h1>
        </div>
        // <Button variant="info" size="sm" onClick={save}> Save Book </Button>
        
    );
}

export default SavedBooks;