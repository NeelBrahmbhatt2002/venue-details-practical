import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./../App.css";

const MapSection: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      // Initialize the map
      const map = L.map(mapRef.current).setView([23.0225, 72.5714], 13); // San Francisco

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      // Add a marker
      L.marker([23.0225, 72.5714]).addTo(map).bindPopup("Ahmedabad");

      // Clean up on unmount
      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <div className="mainMapWrapper  border-b border-border">
      <h3 className="text-xl ">Where you'll be</h3>
      <div
        ref={mapRef}
        style={{ width: "100%", height: "400px", borderRadius: "8px" }}
      />
      <Button variant="outline" className=" mapBtn">
        Show More
      </Button>
    </div>
  );
};

export default MapSection;
