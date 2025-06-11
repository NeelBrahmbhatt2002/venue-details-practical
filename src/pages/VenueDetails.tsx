import React from "react";
import Header from "@/components/Header";
import VenueHeader from "@/components/VenueHeader";
import VenueGallery from "@/components/VenueGallery";
import VenueInfo from "@/components/VenueInfo";
import HostInfo from "@/components/HostInfo";
import PlaceOffers from "@/components/PlaceOffers";
import SelectDates from "@/components/SelectDates";
import BookingCard from "@/components/BookingCard";
import ReviewsSection from "@/components/ReviewsSection";
import MapSection from "@/components/MapSection";
import ThingsToKnow from "@/components/ThingsToKnow";
import Footer from "@/components/Footer";
import AdditionalInfo from "@/components/AdditionalInfo";
import OverallRating from "@/components/OverallRating";
import { useGetReviewsQuery } from "@/store/api/reviewsApi";
import "./../App.css";

const VenueDetails = () => {
  const venueImages = [
    "https://images.unsplash.com/photo-1519167758481-83f29c8a74b2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  ];

  const venueData = {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "San Francisco, CA, United States",
    rating: 4.73,
    reviewCount: 241,
    description:
      "Fusce vitae ex consequat, fringilla justo sit amet, ornare felis. Donec vel interdum nibh. Nulla facilisis feugiat metus sed mollis.",
    price: 175,
    minHours: 3,
    host: {
      name: "Any",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      description: "Fusce vitae ex consequat.",
    },
  };

  const { data: reviews = [], isLoading, error } = useGetReviewsQuery();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <VenueHeader
          resultCount={566}
          location="San Francisco, CA, United States"
        />

        <div className="venuCard">
          <VenueGallery images={venueImages} />
        </div>

        <div className=" venuInfoMain">
          <div className="venuInfoLeft">
            <VenueInfo
              title={venueData.title}
              location={venueData.location}
              rating={venueData.rating}
              reviewCount={reviews.length}
              description={venueData.description}
            />
            <HostInfo
              name={venueData.host.name}
              avatar={venueData.host.avatar}
              description={venueData.host.description}
            />

            <AdditionalInfo />

            <PlaceOffers />

            <SelectDates />
          </div>
          <div className="lg:col-span-1 venuInfoRight ">
            <div className="sticky top-8">
              <BookingCard
                price={venueData.price}
                minHours={venueData.minHours}
              />
            </div>
          </div>
        </div>
        <OverallRating reviewCount={reviews.length} />
        <ReviewsSection reviews={reviews} isLoading={isLoading} error={error} />

        <MapSection />

        <ThingsToKnow />
      </div>

      <Footer />
    </div>
  );
};

export default VenueDetails;
