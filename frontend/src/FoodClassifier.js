// // import React, { useState, useEffect, useRef } from "react";
// // import axios from "axios";
// // import styled, { keyframes } from "styled-components";
// // import * as THREE from "three";
// // import WAVES from "vanta/dist/vanta.waves.min"; // Food-related effect

// // // Food floating animation
// // const floatAnimation = keyframes`
// //   0% { transform: translateY(0px) rotate(0deg); }
// //   50% { transform: translateY(-20px) rotate(5deg); }
// //   100% { transform: translateY(0px) rotate(0deg); }
// // `;

// // // Background container with food images
// // const Background = styled.div`
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   height: 100%;
// //   z-index: -1;
// //   background: linear-gradient(135deg, #0a0a0a, #001a33); /* Dark Black & Blue Mix */
// //   overflow: hidden;
// // `;

// // // Food images styling
// // const FoodImage = styled.img`
// //   position: absolute;
// //   width: 50px;
// //   height: auto;
// //   animation: ${floatAnimation} 4s ease-in-out infinite alternate;
// //   opacity: 0.8;
// // `;

// // // Random food images
// // const foodItems = [
// //   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", top: "10%", left: "20%" }, // 🍕 Pizza
// //   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png", top: "30%", left: "80%" }, // 🍔 Burger
// //   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046793.png", top: "50%", left: "50%" }, // 🍎 Apple
// //   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046796.png", top: "70%", left: "10%" }, // 🍞 Bread
// //   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046785.png", top: "85%", left: "75%" }, // 🥗 Salad
// // ];

// // const Container = styled.div`
// //   max-width: 800px;
// //   margin: auto;
// //   padding: 20px;
// //   text-align: center;
// //   font-family: "Poppins", sans-serif;
// //   color: #fff;
// //   min-height: 100vh;
// //   position: relative;
// //   z-index: 1;
// // `;

// // const Title = styled.h2`
// //   font-size: 28px;
// //   font-weight: 600;
// //   color: #ffcc00;
// //   text-shadow: 2px 2px 5px rgba(255, 204, 0, 0.7);
// // `;

// // const TextArea = styled.textarea`
// //   width: 100%;
// //   padding: 12px;
// //   font-size: 16px;
// //   border-radius: 10px;
// //   border: 2px solid white; /* White border */
// //   background: #2a2a2a;
// //   color: #fff;
// //   resize: none;
// //   &:focus {
// //     outline: none;
// //     border-color: #ff6600;
// //   }
// // `;

// // const Button = styled.button`
// //   padding: 12px 20px;
// //   font-size: 18px;
// //   font-weight: 500;
// //   border-radius: 8px;
// //   border: none;
// //   cursor: pointer;
// //   background: #ff6600;
// //   color: white;
// //   transition: 0.3s ease-in-out;
// //   &:hover {
// //     background: #ff3300;
// //     transform: scale(1.05);
// //   }
// // `;

// // const Card = styled.div`
// //   background: rgba(41, 41, 41, 0.9);
// //   padding: 15px;
// //   border-radius: 10px;
// //   border: 2px solid white; /* White border */
// //   margin: 10px 0;
// //   box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
// // `;

// // const RecipeCard = styled.div`
// //   display: flex;
// //   flex-direction: row;
// //   padding: 10px;
// //   border: 1px solid #ccc;
// //   margin-bottom: 15px;
// // `;

// // const RecipeDetails = styled.div`
// //   flex: 1;
// //   text-align: left;
// // `;

// // const RecipeVideo = styled.div`
// //   flex: 1;
// //   padding: 10px;
// // `;

// // const FoodClassifier = () => {
// //   const [foodInput, setFoodInput] = useState("");
// //   const [results, setResults] = useState([]);
// //   const [recipes, setRecipes] = useState([]);
// //   const vantaRef = useRef(null);

// //   useEffect(() => {
// //     vantaRef.current = WAVES({
// //       el: "#vanta-bg",
// //       THREE,
// //       color: 0x001a33, // Dark Blue Waves
// //       waveHeight: 25,
// //       waveSpeed: 0.7,
// //       shininess: 80,
// //       zoom: 1.5,
// //     });

// //     return () => {
// //       if (vantaRef.current) vantaRef.current.destroy();
// //     };
// //   }, []);

// //   const handleClassify = async () => {
// //     const foodItems = foodInput.split("\n").filter(line => line.trim() !== "");
// //     try {
// //       const response = await axios.post("http://127.0.0.1:5000/classify", { food_items: foodItems });
// //       setResults(response.data.classified_items);
// //       setRecipes(response.data.recipes);
// //     } catch (error) {
// //       console.error("Error:", error);
// //     }
// //   };

// //   return (
// //     <>
// //       <Background id="vanta-bg">
// //         {foodItems.map((item, index) => (
// //           <FoodImage key={index} src={item.src} style={{ top: item.top, left: item.left }} />
// //         ))}
// //       </Background>
// //       <Container>
// //         <Title>🥑 EcoFeast 🍽</Title>
// //         <TextArea
// //           rows="6"
// //           placeholder="Enter food items with purchase date (e.g., Milk 2025-03-10)"
// //           value={foodInput}
// //           onChange={(e) => setFoodInput(e.target.value)}
// //         />
// //         <Button onClick={handleClassify}>Classify</Button>

// //         {results.length > 0 && (
// //           <div>
// //             <h3>🔍 Results</h3>
// //             {results.map((item, index) => (
// //               <Card key={index}>
// //                 <p><strong>🍏 Food:</strong> {item.food}</p>
// //                 <p><strong>🛑 Status:</strong> {item.status}</p>
// //               </Card>
// //             ))}
// //           </div>
// //         )}

// //         {recipes.length > 0 && (
// //           <div>
// //             <h3>🍳 Suggested Recipes</h3>
// //             {recipes.map((recipe, idx) => (
// //               <RecipeCard key={idx}>
// //                 <RecipeDetails>
// //                   <h4>
// //                     <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
// //                       {recipe.title}
// //                     </a>
// //                   </h4>
// //                   <h5>Steps:</h5>
// //                   <ol>
// //                     {recipe.steps.map((step, stepIdx) => (
// //                       <li key={stepIdx}>{step}</li>
// //                     ))}
// //                   </ol>
// //                 </RecipeDetails>
// //                 {recipe.youtube_link && (
// //                   <RecipeVideo>
// //                     <h5>Watch Video:</h5>
// //                     <iframe
// //                       width="100%"
// //                       height="200"
// //                       src={recipe.youtube_link}
// //                       title="Recipe Video"
// //                       frameBorder="0"
// //                       allowFullScreen
// //                     ></iframe>
// //                   </RecipeVideo>
// //                 )}
// //               </RecipeCard>
// //             ))}
// //           </div>
// //         )}
// //       </Container>
// //     </>
// //   );
// // };

// // export default FoodClassifier;
// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import styled, { keyframes } from "styled-components";
// import * as THREE from "three";
// import WAVES from "vanta/dist/vanta.waves.min"; // Food-related effect
// import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

// // Food floating animation
// const floatAnimation = keyframes`
//   0% { transform: translateY(0px) rotate(0deg); }
//   50% { transform: translateY(-20px) rotate(5deg); }
//   100% { transform: translateY(0px) rotate(0deg); }
// `;

// // Background container with food images
// const Background = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   background: linear-gradient(135deg, #0a0a0a, #001a33); /* Dark Black & Blue Mix */
//   overflow: hidden;
// `;

// // Food images styling
// const FoodImage = styled.img`
//   position: absolute;
//   width: 50px;
//   height: auto;
//   animation: ${floatAnimation} 4s ease-in-out infinite alternate;
//   opacity: 0.8;
// `;

// // Random food images
// const foodItems = [
//   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", top: "10%", left: "20%" }, // 🍕 Pizza
//   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png", top: "30%", left: "80%" }, // 🍔 Burger
//   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046793.png", top: "50%", left: "50%" }, // 🍎 Apple
//   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046796.png", top: "70%", left: "10%" }, // 🍞 Bread
//   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046785.png", top: "85%", left: "75%" }, // 🥗 Salad
// ];

// const Container = styled.div`
//   max-width: 800px;
//   margin: auto;
//   padding: 20px;
//   text-align: center;
//   font-family: "Poppins", sans-serif;
//   color: #fff;
//   min-height: 100vh;
//   position: relative;
//   z-index: 1;
// `;

// const Title = styled.h2`
//   font-size: 28px;
//   font-weight: 600;
//   color: #ffcc00;
//   text-shadow: 2px 2px 5px rgba(255, 204, 0, 0.7);
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 12px;
//   font-size: 16px;
//   border-radius: 10px;
//   border: 2px solid white; /* White border */
//   background: #2a2a2a;
//   color: #fff;
//   resize: none;
//   &:focus {
//     outline: none;
//     border-color: #ff6600;
//   }
// `;

// const Button = styled.button`
//   padding: 12px 20px;
//   font-size: 18px;
//   font-weight: 500;
//   border-radius: 8px;
//   border: none;
//   cursor: pointer;
//   background: #ff6600;
//   color: white;
//   transition: 0.3s ease-in-out;
//   &:hover {
//     background: #ff3300;
//     transform: scale(1.05);
//   }
// `;

// const Card = styled.div`
//   background: rgba(41, 41, 41, 0.9);
//   padding: 15px;
//   border-radius: 10px;
//   border: 2px solid white; /* White border */
//   margin: 10px 0;
//   box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
// `;

// const FoodClassifier = () => {
//   const [foodInput, setFoodInput] = useState("");
//   const [results, setResults] = useState([]);
//   const [recipes, setRecipes] = useState([]);
//   const vantaRef = useRef(null);
//   const navigate = useNavigate(); // Initialize the navigate function

//   useEffect(() => {
//     vantaRef.current = WAVES({
//       el: "#vanta-bg",
//       THREE,
//       color: 0x001a33, // Dark Blue Waves
//       waveHeight: 25,
//       waveSpeed: 0.7,
//       shininess: 80,
//       zoom: 1.5,
//     });

//     return () => {
//       if (vantaRef.current) vantaRef.current.destroy();
//     };
//   }, []);

//   const handleClassify = async () => {
//     const foodItems = foodInput.split("\n").filter(line => line.trim() !== "");
//     try {
//       const response = await axios.post("http://127.0.0.1:5000/classify", { food_items: foodItems });
//       setResults(response.data.classified_items);
//       setRecipes(response.data.recipes);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const handleSuggestRecipes = () => {
//     // Store the results and recipes, then navigate to the recipes page
//     localStorage.setItem("classifiedItems", JSON.stringify(results));
//     localStorage.setItem("recipes", JSON.stringify(recipes));
//     navigate("/recipes");
//   };

//   return (
//     <>
//       <Background id="vanta-bg">
//         {foodItems.map((item, index) => (
//           <FoodImage key={index} src={item.src} style={{ top: item.top, left: item.left }} />
//         ))}
//       </Background>
//       <Container>
//         <Title>🥑 EcoFeast 🍽</Title>
//         <TextArea
//           rows="6"
//           placeholder="Enter food items with purchase date (e.g., Milk 2025-03-10)"
//           value={foodInput}
//           onChange={(e) => setFoodInput(e.target.value)}
//         />
//         <Button onClick={handleClassify}>Classify</Button>

//         {results.length > 0 && (
//           <div>
//             <h3>🔍 Results</h3>
//             {results.map((item, index) => (
//               <Card key={index}>
//                 <p><strong>🍏 Food:</strong> {item.food}</p>
//                 <p><strong>🛑 Status:</strong> {item.status}</p>
//               </Card>
//             ))}
//             <Button onClick={handleSuggestRecipes}>Suggest Recipes</Button>
//           </div>
//         )}
//       </Container>
//     </>
//   );
// };

// export default FoodClassifier;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

// Food floating animation
const floatAnimation = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

// Background container with food images
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(135deg, #0a0a0a, #001a33); /* Dark Black & Blue Mix */
  overflow: hidden;
`;

// Food images styling
const FoodImage = styled.img`
  position: absolute;
  width: 50px;
  height: auto;
  animation: ${floatAnimation} 4s ease-in-out infinite alternate;
  opacity: 0.8;
`;

// Random food images
const foodItems = [
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", top: "10%", left: "20%" }, // 🍕 Pizza
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png", top: "30%", left: "80%" }, // 🍔 Burger
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046793.png", top: "50%", left: "50%" }, // 🍎 Apple
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046796.png", top: "70%", left: "10%" }, // 🍞 Bread
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046785.png", top: "85%", left: "75%" }, // 🥗 Salad
];

const Container = styled.div`
  max-width: 800px;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 10px;
  border: 2px solid white; /* White border */
  background: #2a2a2a;
  color: #fff;
  resize: none;
  &:focus {
    outline: none;
    border-color: #ff6600;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #ff6600;
  color: white;
  transition: 0.3s ease-in-out;
  &:hover {
    background: #ff3300;
    transform: scale(1.05);
  }
`;

const Card = styled.div`
  background: rgba(41, 41, 41, 0.9);
  padding: 15px;
  border-radius: 10px;
  border: 2px solid white; /* White border */
  margin: 10px 0;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
`;

const FoodClassifier = () => {
  const [foodInput, setFoodInput] = useState("");
  const [results, setResults] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const vantaRef = useRef(null);
  const navigate = useNavigate();

  // Speech recognition
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    vantaRef.current = WAVES({
      el: "#vanta-bg",
      THREE,
      color: 0x001a33, // Dark Blue Waves
      waveHeight: 25,
      waveSpeed: 0.7,
      shininess: 80,
      zoom: 1.5,
    });

    return () => {
      if (vantaRef.current) vantaRef.current.destroy();
    };
  }, []);

  // Handle voice input
  useEffect(() => {
    if (transcript) {
      const formattedInput = formatVoiceInput(transcript);
      setFoodInput((prevInput) => (prevInput ? `${prevInput}\n${formattedInput}` : formattedInput));
      resetTranscript(); // Reset the transcript after processing
    }
  }, [transcript]);

  // Format voice input (e.g., "Milk 25th March 2025" -> "Milk 2025-03-25")
  const formatVoiceInput = (input) => {
    const parts = input.split(" ");
    if (parts.length < 2) {
      alert("Invalid input format. Please include the food item and date (e.g., Milk 25th March 2025).");
      return input; // Return the raw input if the format is invalid
    }

    const foodItem = parts.slice(0, -3).join(" "); // Extract food item
    const dateString = parts.slice(-3).join(" "); // Extract date (e.g., "25th March 2025")

    // Parse the date string into a valid Date object
    const date = parseDateString(dateString);
    if (!date) {
      alert("Invalid date format. Please try again.");
      return foodItem; // Return only the food item if the date is invalid
    }

    const formattedDate = date.toISOString().split("T")[0]; // Convert to "YYYY-MM-DD"
    return `${foodItem} ${formattedDate}`;
  };

  // Helper function to parse date strings like "25th March 2025"
  const parseDateString = (dateString) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Remove ordinal suffixes (e.g., "th", "st", "nd", "rd")
    const cleanedDateString = dateString.replace(/(\d+)(st|nd|rd|th)/, "$1");

    // Split into parts
    const parts = cleanedDateString.split(" ");

    // Handle different date formats
    if (parts.length === 1) {
      // Only day provided (e.g., "10")
      const day = parseInt(parts[0], 10);
      if (isNaN(day)) {
        return null; // Invalid day
      }
      const currentDate = new Date();
      return new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    } else if (parts.length === 2) {
      // Day and month provided (e.g., "10 March")
      const day = parseInt(parts[0], 10);
      const monthName = parts[1];
      const monthIndex = months.findIndex((m) => m.toLowerCase() === monthName.toLowerCase());
      if (isNaN(day) || monthIndex === -1) {
        return null; // Invalid day or month
      }
      const currentDate = new Date();
      return new Date(currentDate.getFullYear(), monthIndex, day);
    } else if (parts.length === 3) {
      // Day, month, and year provided (e.g., "10 March 2025")
      const day = parseInt(parts[0], 10);
      const monthName = parts[1];
      const year = parseInt(parts[2], 10);
      const monthIndex = months.findIndex((m) => m.toLowerCase() === monthName.toLowerCase());
      if (isNaN(day) || monthIndex === -1 || isNaN(year)) {
        return null; // Invalid day, month, or year
      }
      return new Date(year, monthIndex, day);
    } else {
      return null; // Invalid format
    }
  };

  const handleClassify = async () => {
    const foodItems = foodInput.split("\n").filter(line => line.trim() !== "");
    try {
      const response = await axios.post("http://127.0.0.1:5000/classify", { food_items: foodItems });
      setResults(response.data.classified_items);
      setRecipes(response.data.recipes);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSuggestRecipes = () => {
    localStorage.setItem("classifiedItems", JSON.stringify(results));
    localStorage.setItem("recipes", JSON.stringify(recipes));
    navigate("/recipes");
  };

  return (
    <>
      <Background id="vanta-bg">
        {foodItems.map((item, index) => (
          <FoodImage key={index} src={item.src} style={{ top: item.top, left: item.left }} />
        ))}
      </Background>
      <Container>
        <Title>🥑 EcoFeast 🍽</Title>
        <TextArea
          rows="6"
          placeholder="Enter food items with purchase date (e.g., Milk 2025-03-10)"
          value={foodInput}
          onChange={(e) => setFoodInput(e.target.value)}
        />
        <Button onClick={handleClassify}>Classify</Button>

        {/* Voice Input Section */}
        <div style={{ marginTop: "20px" }}>
          <Button
            onClick={SpeechRecognition.startListening}
            disabled={listening}
            style={{ marginRight: "10px", backgroundColor: listening ? "#ff3300" : "#ff6600" }}
          >
            {listening ? "Listening..." : "Start Voice Input"}
          </Button>
          <Button onClick={SpeechRecognition.stopListening} disabled={!listening}>
            Stop Voice Input
          </Button>
        </div>

        {results.length > 0 && (
          <div>
            <h3>🔍 Results</h3>
            {results.map((item, index) => (
              <Card key={index}>
                <p><strong>🍏 Food:</strong> {item.food}</p>
                <p><strong>🛑 Status:</strong> {item.status}</p>
              </Card>
            ))}
            <Button onClick={handleSuggestRecipes}>Suggest Recipes</Button>
          </div>
        )}
      </Container>
    </>
  );
};

export default FoodClassifier;