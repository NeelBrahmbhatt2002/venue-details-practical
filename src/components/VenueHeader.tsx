
import React from 'react';
import { Button } from '@/components/ui/button';
import { Share, Heart } from 'lucide-react';
import "./../App.css";

interface VenueHeaderProps {
  resultCount: number;
  location: string;
}

const VenueHeader: React.FC<VenueHeaderProps> = ({ resultCount, location }) => {
  return (
    <div className="main-venueHeader flex items-center justify-between flex-wrap gap-2">
      <h2 className="venutitle">
        {resultCount} launch event spaces near {location}
      </h2>
      <div className="flex gap-4">
        <Button variant="ghost" size="sm" className="detailsBtn">
          <Share className="w-4 h-4 " />
          Share
        </Button>
        <Button variant="ghost" size="sm" className="detailsBtn">
          <Heart className="w-4 h-4 " />
          Save
        </Button>
      </div>
    </div>
  );
};

export default VenueHeader;
