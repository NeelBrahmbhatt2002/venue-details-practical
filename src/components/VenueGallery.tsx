import React from "react";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/hooks/redux";
import { toggleShowAllImages } from "@/store/slices/venueSlice";
import "./../App.css";
import { useToast } from "@/hooks/use-toast";

interface VenueGalleryProps {
  images: string[];
}

const VenueGallery: React.FC<VenueGalleryProps> = ({ images }) => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();

  const handleShowAllImages = () => {
    dispatch(toggleShowAllImages());
    toast({
      title: "Coming Soon!",
      description: "This feature will be available soon.",
      variant: "success",
    });
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1  md:grid-cols-4 gap-2 h-96 md:h-auto">
        {/* Main image */}
        <div className="md:col-span-2 relative">
          <img
            src="public\images\img1.png"
            alt="Venue main view"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Side images */}
        <div className="hidden md:grid grid-rows-2 gap-2">
          <img
            src="public\images\img2.png"
            alt="Venue view 2"
            className="w-full h-full object-cover"
          />
          <img
            src="public\images\img3.png"
            alt="Venue view 3"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="hidden md:grid grid-rows-2 gap-2">
          <img
            src="public\images\img4.png"
            alt="Venue view 4"
            className="w-full h-full object-cover rounded-tr-lg rounded-br-lg"
          />
          <div className="relative">
            <img
              src="public\images\img5.png"
              alt="Venue view 5"
              className="w-full h-full object-cover rounded-br-lg rounded-tr-lg"
            />
            <Button
              onClick={handleShowAllImages}
              variant="outline"
              className="moreBtn absolute bottom-4 right-4  backdrop-blur-sm hover:bg-white"
            >
              ALL IMAGES
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueGallery;
