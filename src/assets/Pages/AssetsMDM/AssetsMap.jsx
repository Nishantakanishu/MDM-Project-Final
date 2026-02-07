import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const AssetsMap = () => {
    // Center roughly around Meghalaya region based on the project context
    const position = [25.4670, 91.3662]; 

    const markers = [
        { id: 1, pos: [25.5788, 91.8933], title: "Shillong Substation", type: "Substation", color: "#0891b2" }, // Cyan-600
        { id: 2, pos: [25.50, 90.20], title: "Tura Feeder", type: "Feeder", color: "#0d9488" }, // Teal-600
        { id: 3, pos: [25.90, 91.80], title: "Nongpoh DT", type: "DT", color: "#059669" }, // Emerald-600
    ];

  return (
    <div className="w-full h-96 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative z-0">
        <div className="absolute top-4 left-4 z-[400] bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Live Asset Tracking
            </h3>
        </div>
        
      <MapContainer 
        center={position} 
        zoom={8} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
            <CircleMarker 
                key={marker.id} 
                center={marker.pos}
                radius={8}
                pathOptions={{ color: marker.color, fillColor: marker.color, fillOpacity: 0.7 }}
            >
                <Popup>
                    <div className="p-1">
                        <strong className="block text-gray-800">{marker.title}</strong>
                        <span className="text-xs text-gray-500">{marker.type}</span>
                    </div>
                </Popup>
            </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default AssetsMap;
