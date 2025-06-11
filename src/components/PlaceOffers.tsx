import React from 'react';
import { Wifi, Car, Flower2, Snowflake, AlarmSmoke, AlarmCheck } from 'lucide-react';
import "./../App.css";

const amenities = [
  { icon: Flower2, label: 'Garden view', available: true },
  { icon: Wifi, label: 'Wifi', available: true },
  { icon: Car, label: 'Free parking on premises', available: true },
  { icon: Snowflake, label: 'AC – split-type ductless system', available: true },
  { icon: AlarmCheck, label: 'Carbon monoxide alarm', available: true },
  { icon: AlarmSmoke, label: 'Smoke alarm', available: true },
];

const PlaceOffers: React.FC = () => {
  return (
    <div className="py-8 border-b border-gray-200">
      <h2 className=" placeofferHeading">What this place offers</h2>
      <div className="grid grid-cols-2 gap-5">
        {amenities.map((amenity, index) => {
          const IconComponent = amenity.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <IconComponent className="w-5 h-5" />
              <span className="text-sm iconLabel">{amenity.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlaceOffers;
