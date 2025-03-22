
// import React from "react";
// import { Link } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import WAVES from "vanta/dist/vanta.waves.min";
// import * as THREE from "three";
// import { useEffect, useRef } from "react";

// const floatAnimation = keyframes`
//   0% { transform: translateY(0px) rotate(0deg); }
//   50% { transform: translateY(-15px) rotate(5deg); }
//   100% { transform: translateY(0px) rotate(0deg); }
// `;

// const Background = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   background: #e0f7ff; /* Light blue background */
//   overflow: hidden;
// `;

// const FoodImage = styled.img`
//   position: absolute;
//   width: 50px;
//   height: auto;
//   animation: ${floatAnimation} 4s ease-in-out infinite alternate;
//   opacity: 0.8;
// `;

// const foodItems = [
//   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", top: "10%", left: "20%" },
//   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png", top: "30%", left: "80%" },
//   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046793.png", top: "50%", left: "50%" },
//   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046796.png", top: "70%", left: "10%" },
//   { src: "https://cdn-icons-png.flaticon.com/512/1046/1046785.png", top: "85%", left: "75%" },
// ];

// const Container = styled.div`
//   max-width: 1200px;
//   margin: auto;
//   padding: 40px;
//   font-family: "Poppins", sans-serif;
//   color: #333; /* Dark text for contrast */
//   min-height: 100vh;
//   position: relative;
//   z-index: 1;
// `;

// const HeaderSection = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 40px;
// `;

// const Title = styled.h1`
//   font-size: 90px;
//   font-weight: 800;
//   color: #ffcc00;
//   text-shadow: 2px 2px 5px rgba(255, 204, 0, 0.7);
//   margin: 0;
// `;

// const Description = styled.p`
//   font-size: 18px;
//   font-weight: 400;
//   color: #555; /* Darker text for contrast */
//   margin: 0;
// `;

// const AppIcon = styled.img`
//   width: 100px;
//   height: auto;
// `;

// const ComponentContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 20px;
//   margin-bottom: 40px;
// `;

// const ComponentBox = styled(Link)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
//   background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
//   border-radius: 12px;
//   text-decoration: none;
//   color: #333; /* Dark text for contrast */
//   transition: 0.3s ease-in-out;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   width: 30%; /* Equal width for all components */
//   &:hover {
//     transform: scale(1.05); /* Pop-up effect */
//     box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
//   }
// `;

// const ComponentIcon = styled.img`
//   width: 60px;
//   height: auto;
//   margin-bottom: 20px;
// `;

// const ComponentText = styled.span`
//   font-size: 22px;
//   font-weight: 600;
//   text-align: center;
// `;

// const Dashboard = () => {
//   const vantaRef = useRef(null);

//   useEffect(() => {
//     vantaRef.current = WAVES({
//       el: "#vanta-bg",
//       THREE,
//       color: 0x001a33,
//       waveHeight: 25,
//       waveSpeed: 0.7,
//       shininess: 80,
//       zoom: 1.5,
//     });

//     return () => {
//       if (vantaRef.current) vantaRef.current.destroy();
//     };
//   }, []);

//   return (
//     <>
//       <Background id="vanta-bg">
//         {foodItems.map((item, index) => (
//           <FoodImage key={index} src={item.src} style={{ top: item.top, left: item.left }} />
//         ))}
//       </Background>
//       <Container>
//         <HeaderSection>
//           <div>
//             <Title>🍽️ ECOFEAST</Title>
//             <Description>AI-Based Food Waste Reduction Assistant</Description>
//           </div>
//           <AppIcon src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="App Icon" />
//         </HeaderSection>
//         <ComponentContainer>
//           <ComponentBox to="/foodclassifier">
//             <ComponentIcon src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" alt="Food Classifier" />
//             <ComponentText>🥑 Food Classifier</ComponentText>
//           </ComponentBox>
//           <ComponentBox to="/google-map"> {/* Updated to point to GoogleMapComponent */}
//             <ComponentIcon src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Nearby Places" /> {/* Map icon */}
//             <ComponentText>🗺️ Nearby Places</ComponentText>
//           </ComponentBox>
//           <ComponentBox to="/image-recognition">
//             <ComponentIcon src="https://cdn-icons-png.flaticon.com/512/1046/1046793.png" alt="Image Recognition" />
//             <ComponentText>📷 Image Recognition</ComponentText>
//           </ComponentBox>
//         </ComponentContainer>
//       </Container>
//     </>
//   );
// };

// export default Dashboard;
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styled, { keyframes } from "styled-components";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import { useEffect, useRef } from "react";

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
  { src: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", top: "10%", left: "60%" },
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

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 90px;
  font-weight: 800;
  color: #ffcc00;
  text-shadow: 2px 2px 5px rgba(255, 204, 0, 0.7);
  margin: 0;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #555; /* Darker text for contrast */
  margin: 0;
`;

const AppIcon = styled.img`
  width: 100px;
  height: auto;
`;

const ComponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
`;

const ComponentBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  border-radius: 12px;
  text-decoration: none;
  color: #333; /* Dark text for contrast */
  transition: 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 30%; /* Equal width for all components */
  &:hover {
    transform: scale(1.05); /* Pop-up effect */
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ComponentIcon = styled.img`
  width: 60px;
  height: auto;
  margin-bottom: 20px;
`;

const ComponentText = styled.span`
  font-size: 22px;
  font-weight: 600;
  text-align: center;
`;

const Divider = styled.hr`
  border: 0;
  height: 2px;
  background: rgba(241, 237, 237, 0.72);
  margin: 40px 0;
`;

const ContentSection = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
`;

const VerticalDivider = styled.div`
  width: 3px;
  background: rgba(248, 246, 246, 0.94);
  height: 150px; /* Adjusted height to match content */
`;

const ContentText = styled.div`
  flex: 1;
  font-size: 22px;
  color: rgba(248, 246, 246, 0.94); /* Darker text for contrast */
`;

const ContentIcon = styled.img`
  width: 150px; /* Adjusted size for icons */
  height: auto;
  opacity: 0.9;
`;

const Dashboard = () => {
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

  return (
    <>
      <Background id="vanta-bg">
        {foodItems.map((item, index) => (
          <FoodImage key={index} src={item.src} style={{ top: item.top, left: item.left }} />
        ))}
      </Background>
      <Container>
        <HeaderSection>
          <div>
            <Title>🍽️ ECOFEAST</Title>
            <Description>AI-Based Food Waste Reduction Assistant</Description>
          </div>
          <AppIcon src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="App Icon" />
        </HeaderSection>
        <ComponentContainer>
          <ComponentBox to="/foodclassifier">
            <ComponentIcon src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" alt="Food Classifier" />
            <ComponentText>🥑 Food Classifier</ComponentText>
          </ComponentBox>
          <ComponentBox to="/google-map">
            <ComponentIcon src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Nearby Places" />
            <ComponentText>🗺️ Nearby Donation</ComponentText>
          </ComponentBox>
          <ComponentBox to="/manure-conversion"> {/* Link to Manure Conversion page */}
            <ComponentIcon src="https://cdn-icons-png.flaticon.com/512/3658/3658772.png" alt="Manure Conversion" />
            <ComponentText>🌱 Manure Conversion</ComponentText>
          </ComponentBox>
        </ComponentContainer>

        <Divider />
        <ContentSection>
          <ContentText>
            <h2>Food Classifier</h2>
            <p>Our AI-powered food classifier helps you identify food items and suggests recipes to reduce waste.</p>
          </ContentText>
          <VerticalDivider />
          <ContentIcon
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            alt="Food Classifier Icon"
          />
        </ContentSection>
        <ContentSection>
          <ContentIcon
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Nearby Donation Icon"
          />
          <VerticalDivider />
          <ContentText>
            <h2>Nearby Donation Centers</h2>
            <p>Find nearby donation centers, orphanages, and food banks to donate excess food and reduce waste.</p>
          </ContentText>
        </ContentSection>
        <ContentSection>
          <ContentText>
            <h2>Manure Conversion</h2>
            <p>Convert food waste into organic manure to promote sustainable farming and reduce environmental impact.</p>
          </ContentText>
          <VerticalDivider />
          <ContentIcon
            src="https://cdn-icons-png.flaticon.com/512/3658/3658772.png"
            alt="Manure Conversion Icon"
          />
        </ContentSection>
      </Container>
    </>
  );
};

export default Dashboard;