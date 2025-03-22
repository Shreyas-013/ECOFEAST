import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow, DirectionsRenderer } from "@react-google-maps/api";
import axios from "axios";
import styled from "styled-components"; // Import styled-components for styling

// Styled components for the heading and container
const Heading = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const MapContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// 🔑 Replace with your API key (Leave empty if you don't have one yet)
const API_KEY = "AIzaSyDei88uHA5E1c_XS3d6tXYG5JDHT_my_Rc"; // Example: "AIzaSyXXXXX"

const containerStyle = {
  width: "100%",
  height: "500px",
};

// Default center (Example: Hyderabad)
const center = { lat: 17.344392995614750, lng: 78.72293095839350 };

// 📍 Manually defined orphanages (used if API is not available)
const manualOrphanages = [
  { id: 1, name: "Friends Foundation", lat: 17.39673950939594, lng: 78.6839290725844 },
  { id: 2, name: "PP Reddy Retirement Homes", lat: 17.292317350460966, lng: 78.49746670733659 },
  { id: 3, name: "Bhargavi Daily Food Parcel", lat: 17.39141362085724, lng: 78.60105138885774 },
  { id: 5, name: "Shreyas Girls Hostel", lat: 17.35171514715848, lng: 78.51196053272817 },
  { id: 6, name: "Vignan Institute Of Technology", lat: 17.344392995614747, lng: 78.72293095839333 },
];

const GoogleMapComponent = () => {
  const [userLocation, setUserLocation] = useState(center);
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [directions, setDirections] = useState(null);

  // Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });

        // If API key is available, fetch real orphanages
        if (API_KEY) {
          fetchNearbyPlaces(position.coords.latitude, position.coords.longitude);
        } else {
          setPlaces(manualOrphanages); // Use manual locations if API key is not available
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        setPlaces(manualOrphanages); // Fallback to manual orphanages
      }
    );
  }, []);

  // Fetch nearby orphanages using Google Places API
  const fetchNearbyPlaces = async (lat, lng) => {
    if (!API_KEY) return; // Skip API call if API key is empty

    // Use backticks for template literals
    const endpoint = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&type=hospital&keyword=orphanage|oldage home|food bank&key=${API_KEY}`;

    try {
      const response = await axios.get(endpoint);
      setPlaces(response.data.results);
    } catch (error) {
      console.error("Error fetching places:", error);
      setPlaces(manualOrphanages); // Fallback to manual orphanages
    }
  };

  // Fetch directions from user location to selected place
  const fetchDirections = (destination) => {
    if (!API_KEY) return alert("Directions require a valid Google Maps API key!");

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: userLocation,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Error fetching directions:", status);
        }
      }
    );
  };

  return (
    <MapContainer>
      {/* Heading */}
      <Heading>Nearby Orphanages, Old Age Homes & Food Banks</Heading>

      {/* Google Map */}
      <LoadScript googleMapsApiKey={API_KEY || "AIzaSyDUMMY_KEY"}>
        <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={13}>
          {/* User's location */}
          <Marker position={userLocation} label={{ text: "You", color: "white", fontWeight: "bold" }} />

          {/* 📍 Display manually added orphanages OR fetched places */}
          {places.map((place, index) => {
            const position = place.geometry?.location || { lat: place.lat, lng: place.lng };
            return (
              <Marker 
                key={index} 
                position={position} 
                label={{
                  text: place.name,  // 🏷 Show orphanage name on map
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "white",  // 🤍 White label text for better visibility
                }}
                onClick={() => setSelectedPlace(place)} 
              />
            );
          })}

          {/* Show Info Window when a place is selected */}
          {selectedPlace && (
            <InfoWindow
              position={selectedPlace.geometry?.location || { lat: selectedPlace.lat, lng: selectedPlace.lng }}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div>
                <h3>{selectedPlace.name}</h3>
                <p>{selectedPlace.vicinity || "Address not available"}</p>
                {API_KEY ? (
                  <button onClick={() => fetchDirections(selectedPlace.geometry?.location || { lat: selectedPlace.lat, lng: selectedPlace.lng })}>
                    Get Directions
                  </button>
                ) : (
                  <p style={{ color: "red" }}>Directions require an API key</p>
                )}
              </div>
            </InfoWindow>
          )}

          {/* Show Directions if available */}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </MapContainer>
  );
};

export default GoogleMapComponent;