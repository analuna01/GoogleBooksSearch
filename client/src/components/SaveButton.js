import React, { useState }  from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveButton() {
  const [saveTitle, setSaveTitle] = useState("");
        const [saveAuthors, setSaveAuthors] = useState("");
        const [saveDescription, setSaveDescription] = useState("");
        const [saveImage, setSaveImage] = useState("");
        const [saveLink, setSaveLink] = useState("");
    
        const save = () => {
            // Register new user
            axios({
                method: "POST",
                data: {
                    title: saveTitle,
                    authors: saveAuthors,
                    description: saveDescription,
                    image: saveImage,
                    link: saveLink,
                },
                withCredentiasl: true,
                url: "http://localhost:3001/save",
            }).then((res) => console.log(res));
        };
  return (
    <Button variant="info" size="sm" onClick={save}> Save Book </Button>
  );
}

export default SaveButton;
