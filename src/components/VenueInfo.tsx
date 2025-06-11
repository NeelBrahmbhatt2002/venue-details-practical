
import React from 'react';
import { Star } from 'lucide-react';
import "./../App.css";


interface VenueInfoProps {
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  description: string;
}

const VenueInfo: React.FC<VenueInfoProps> = ({
  title,
  location,
  rating,
  reviewCount,
  description,
}) => {
  return (
    <div className="space-y-4 w-[530px] mainDetailsCard">
        <h1 className="venuInfoHeading  mb-2">
          {title}
        </h1>

        <div className="venuInfoDetails">
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground border-b border-border pb-6 " >
          <div className="flex items-center gap-4">
          <div className='flex w-full gap-2 items-center'> 
            <Star className="w-4 h-4 fill-current text-yellow-400" />
            <span className="font-medium border-solid">{rating}</span>
            <span> | {reviewCount} Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueInfo;
