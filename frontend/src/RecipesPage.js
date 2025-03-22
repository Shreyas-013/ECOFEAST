import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import { useNavigate } from "react-router-dom";

// Floating animation for background food icons
const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

// Styled components
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #0a0a0a, #001a33);
  overflow: hidden;
`;

const FoodImage = styled.img`
  position: absolute;
  width: 50px;
  height: auto;
  animation: ${floatAnimation} 4s ease-in-out infinite alternate;
  opacity: 0.8;
`;

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 20px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #fff;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #ffcc00;
  text-shadow: 2px 2px 5px rgba(255, 204, 0, 0.7);
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const RecipeCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background: rgba(41, 41, 41, 0.9);
  padding: 20px;
  border-radius: 10px;
  border: 2px solid white;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
  gap: 20px;
`;

const RecipeInfo = styled.div`
  flex: 1;
  text-align: left;
`;

const RecipeVideo = styled.div`
  flex: 1;
  max-width: 300px; /* Ensures video doesn’t get too large */
  iframe {
    width: 100%;
    height: 200px;
    border-radius: 10px;
  }
`;

const foodItems = [
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", top: "10%", left: "20%" }, // 🍕 Pizza
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png", top: "30%", left: "80%" }, // 🍔 Burger
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046793.png", top: "50%", left: "50%" }, // 🍎 Apple
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046796.png", top: "70%", left: "10%" }, // 🍞 Bread
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046785.png", top: "85%", left: "75%" }, // 🥗 Salad
];

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const vantaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes") || "[]");
    setRecipes(storedRecipes || []);

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

  return (
    <>
      <Background id="vanta-bg">
        {foodItems.map((item, index) => (
          <FoodImage key={index} src={item.src} style={{ top: item.top, left: item.left }} />
        ))}
      </Background>
      <Container>
        <Title>🍳 Suggested Recipes</Title>
        {recipes.length > 0 ? (
          <RecipeContainer>
            {recipes.map((recipe, idx) => (
              <RecipeCard key={idx}>
                <RecipeInfo>
                  <h4>
                    <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
                      {recipe.title}
                    </a>
                  </h4>
                  <p><strong>🔹 Steps:</strong></p>
                  <ol>
                    {recipe.steps.map((step, stepIdx) => (
                      <li key={stepIdx}>{step}</li>
                    ))}
                  </ol>
                </RecipeInfo>
                {recipe.youtube_link ? (
                  <RecipeVideo>
                    <iframe
                      src={recipe.youtube_link}
                      title={`Recipe Video - ${recipe.title}`}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </RecipeVideo>
                ) : (
                  <RecipeVideo>
                    <p>No video available</p>
                  </RecipeVideo>
                )}
              </RecipeCard>
            ))}
          </RecipeContainer>
        ) : (
          <p>No recipes found. Try adding some food items in the classifier.</p>
        )}
      </Container>
    </>
  );
};

export default RecipesPage;