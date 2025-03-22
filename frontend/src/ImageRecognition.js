import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #0a0a0a, #001a33);
`;

const Container = styled.div`
  width: 90%;
  max-width: 500px;
  padding: 30px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #fff;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(255, 204, 0, 0.3);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #ffcc00;
  text-shadow: 2px 2px 5px rgba(255, 204, 0, 0.7);
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  display: block;
  width: 100%;
  padding: 12px;
  background: #ff6600;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-bottom: 10px;
  &:hover {
    background: #ff3300;
  }
`;

const ImagePreview = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #0084ff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-top: 15px;
  &:hover {
    background: #006cd1;
  }
`;

const ResultBox = styled.div`
  margin-top: 20px;
  background: #222;
  padding: 15px;
  border-radius: 10px;
  color: #fff;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
`;

const ImageRecognition = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResult(response.data);  // Expecting full nutrition details from backend
    } catch (error) {
      console.error("Error recognizing image:", error);
      setResult({ error: "Error processing image" });
    }
  };

  return (
    <PageContainer>
      <Container>
        <Title>🍎 Food Image Recognition</Title>
        <UploadLabel htmlFor="fileUpload">Upload Image</UploadLabel>
        <UploadInput type="file" id="fileUpload" accept="image/*" onChange={handleFileChange} />
        {preview && <ImagePreview src={preview} alt="Uploaded" />}
        <Button onClick={handleUpload}>Recognize Food</Button>
        {result && (
          <ResultBox>
            <h3>Detected Food: {result.food}</h3>
            {result.nutrition ? (
              <ul>
                <li>Calories: {result.nutrition.calories} kcal</li>
                <li>Protein: {result.nutrition.protein} g</li>
                <li>Carbohydrates: {result.nutrition.carbohydrates} g</li>
                <li>Fats: {result.nutrition.fats} g</li>
                <li>Fiber: {result.nutrition.fiber} g</li>
              </ul>
            ) : (
              <p>No nutrition data available</p>
            )}
          </ResultBox>
        )}
      </Container>
    </PageContainer>
  );
};

export default ImageRecognition;
