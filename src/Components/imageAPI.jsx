import React from "react";
import ReactLoading from 'react-loading';
import { useState } from "react";
import "../CSS/ImageApi.css";

function ImageAPI() {
  const API_TOKEN = "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";
  const [comment, setComment] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [imagePresent, setImagePresent] = useState(false)
  const [gender, setGender] = useState("Gender Neutral")
  const getComment = (event) => {
    setComment(event.target.value);
  };

  async function getImage() {
    setIsLoading(true)
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
      {
        headers: { Authorization: `Bearer ${API_TOKEN}` },
        method: "POST",
        body: JSON.stringify(
          `${comment} ,${gender} outfit ,good outfit, no human deformities, high quality ,proper human, no blood, no nudity, proper face with good facial structures, good looking face, proper body with normal hands and legs, proper facial structure`
        ),
      }
    );
    setImagePresent(true)
    setIsLoading(false)
    const result = await response.blob();
    setImage(URL.createObjectURL(result));
    return result;
  }

  return (
    <div className="image-generator">
      {(imagePresent && !isLoading) ?<img src={image} alt="" className="generated-img" />:<></>}
      {isLoading ?  <ReactLoading className="loader" type={"spinningBubbles"} color={"#2974F1"} height={512} width={200} />: <></>}
      <div className="gender-options">
        <div onClick={() => setGender("Male")} className={gender === "Male" ? "selected-gender" : ""}>Male</div>
        <div onClick={() => setGender("Female")}  className={gender === "Female" ? "selected-gender" : ""}>Female</div>
        <div onClick={() => setGender("Gender Neutral")}  className={gender === "Gender Neutral" ? "selected-gender" : ""}>Gender Neutral</div>
      </div>
      <div className="inputs">
        <input type="text" name="prompt" placeholder="Enter your prompt" onChange={getComment} value={comment} />
        <button onClick={getImage}>➤</button>
      </div>
    </div>
  );
}

export default ImageAPI;
