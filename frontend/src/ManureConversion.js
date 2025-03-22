import React, { useState } from "react";
import styled, { keyframes } from "styled-components"; // Import keyframes
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import { useEffect, useRef } from "react";

// Define keyframes animation
const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #e0f7ff; /* Light blue background */
  overflow: hidden;
`;

const FoodImage = styled.img`
  position: absolute;
  width: 50px;
  height: auto;
  animation: ${floatAnimation} 4s ease-in-out infinite alternate;
  opacity: 0.8;
`;

const foodItems = [
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", top: "10%", left: "20%" },
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png", top: "30%", left: "80%" },
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046793.png", top: "50%", left: "50%" },
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046796.png", top: "70%", left: "10%" },
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046785.png", top: "85%", left: "75%" },
];

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px;
  font-family: "Poppins", sans-serif;
  color: #333; /* Dark text for contrast */
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #ffcc00;
  text-shadow: 2px 2px 5px rgba(255, 204, 0, 0.7);
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #555; /* Darker text for contrast */
  margin-bottom: 40px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: #ffcc00;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  width: 100%;
  max-width: 200px;
  margin: 0 auto;

  &:hover {
    background: #e6b800;
  }
`;

const ResponseContainer = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const ResponseText = styled.p`
  font-size: 18px;
  color: #333;
  line-height: 1.6;
`;

const ManureConversion = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const vantaRef = useRef(null);

  useEffect(() => {
    vantaRef.current = WAVES({
      el: "#vanta-bg",
      THREE,
      color: 0x001a33,
      waveHeight: 25,
      waveSpeed: 0.7,
      shininess: 80,
      zoom: 1.5,
    });

    return () => {
      if (vantaRef.current) vantaRef.current.destroy();
    };
  }, []);

  const handleSubmit = () => {
    let responseText = "";
  
    // List of animal-based products
    const animalProducts = ["meat", "chicken", "mutton", "eggs", "fish", "prawns", "pork", "beef"];
  
    // Check if the input is an animal-based product
    if (animalProducts.includes(question.toLowerCase())) {
      responseText = `Manure conversion is not applicable for ${question} as it is an animal-based product. However, you can compost animal waste (e.g., manure from livestock) to create nutrient-rich fertilizer for plants. Here’s how:
      
  1. Collect animal waste (e.g., cow, chicken, or pig manure).
  2. Mix the waste with carbon-rich materials like straw, leaves, or sawdust.
  3. Allow the mixture to compost for 6-12 months, turning it regularly to aerate.
  4. Use the compost to enrich soil for growing fruits, vegetables, or other plants.`;
    } else if (question.toLowerCase() === "tomatoes") {
      responseText = `To convert manure into tomatoes, follow these steps:
      
  1. Collect fresh manure and compost it properly for 3-4 months.
  2. Mix the compost with soil in a 1:3 ratio to enrich it with nutrients.
  3. Plant tomato seeds or seedlings in the enriched soil.
  4. Water the plants regularly and ensure they receive adequate sunlight.
  5. Use organic fertilizers to boost growth.
  6. Harvest ripe tomatoes and use them in your recipes.`;
    } else if (question.toLowerCase() === "potatoes") {
      responseText = `To convert manure into potatoes, follow these steps:
      
  1. Compost fresh manure for at least 6 months to ensure it's fully decomposed.
  2. Mix the compost with soil in a 1:4 ratio to prepare the planting bed.
  3. Plant potato seed pieces in the soil, ensuring proper spacing.
  4. Water the plants consistently and mulch to retain moisture.
  5. Hill the soil around the plants as they grow to protect the tubers.
  6. Harvest potatoes when the plants begin to yellow and die back.`;
    } else if (question.toLowerCase() === "carrots") {
      responseText = `To convert manure into carrots, follow these steps:
      
  1. Compost manure thoroughly to avoid burning the delicate carrot roots.
  2. Mix the compost with sandy soil to improve drainage.
  3. Sow carrot seeds directly into the prepared soil.
  4. Thin the seedlings to prevent overcrowding.
  5. Water regularly to keep the soil moist but not waterlogged.
  6. Harvest carrots when they reach the desired size, usually 2-3 months after planting.`;
    } else if (question.toLowerCase() === "spinach") {
      responseText = `To convert manure into spinach, follow these steps:
      
  1. Compost manure for 2-3 months to ensure it's safe for leafy greens.
  2. Mix the compost with soil in a 1:2 ratio to prepare the planting bed.
  3. Sow spinach seeds directly into the soil or transplant seedlings.
  4. Water the plants regularly to keep the soil moist.
  5. Harvest spinach leaves when they are young and tender for the best flavor.`;
    } else {
      // Default response for unknown ingredients
      responseText = `To convert manure into ${question}, follow these general steps:
      
  1. Collect fresh manure and compost it properly for 3-6 months.
  2. Mix the compost with soil to enrich it with nutrients.
  3. Plant seeds or seedlings of ${question} in the enriched soil.
  4. Water the plants regularly and ensure they receive adequate sunlight.
  5. Use organic fertilizers to boost growth if necessary.
  6. Harvest ${question} when it reaches maturity and use it in your recipes.`;
    }
  
    setResponse(responseText);
  };

  return (
    <>
      <Background id="vanta-bg">
        {foodItems.map((item, index) => (
          <FoodImage key={index} src={item.src} style={{ top: item.top, left: item.left }} />
        ))}
      </Background>
      <Container>
        <Title>🌱 Manure Conversion</Title>
        <Description>
          Ask how to convert manure into a specific food ingredient and get step-by-step instructions.
        </Description>

        <InputContainer>
          <Input
            type="text"
            placeholder="Enter a food ingredient (e.g., tomatoes, potatoes)"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </InputContainer>

        {response && (
          <ResponseContainer>
            <ResponseText>{response}</ResponseText>
          </ResponseContainer>
        )}
      </Container>
    </>
  );
};

export default ManureConversion;