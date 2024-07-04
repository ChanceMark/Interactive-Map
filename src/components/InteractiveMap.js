// src/components/InteractiveMap.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const locations = [
  { id: 1, position: [35.6895, -114.6917], image: './image1.jpg', description: 'Las Vegas' },
  { id: 2, position: [34.0522, -118.2437], image: './image2.jpg', description: 'Los Angeles' },
  // Add more locations as needed
];

const customIcon = new L.Icon({
  iconUrl: './logo192.png',
  iconSize: [32, 32], // size of the icon
});

const InteractiveMap = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleMarkerClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <MapContainer center={[35.6895, -109.6917]} zoom={5} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker 
            key={location.id} 
            position={location.position} 
            icon={customIcon} 
            eventHandlers={{
              click: () => handleMarkerClick(location.image),
            }}>
            <Popup>{location.description}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {selectedImage && (
        <div style={{ marginTop: '20px' }}>
          <h2>Selected Image</h2>
          <img src={selectedImage} alt="Selected location" style={{ width: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
