import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Review {
  id: string;
  name: string;
  avatar: string;
  comments: string;
  role: string;
  createdAt: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
  isLoading: boolean;
  error: any;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  isLoading,
  error,
}) => {
  const [showReviewsCount, setShowReviewCount] = useState(6);

  if (isLoading) {
    return <div className="py-8">Loading reviews...</div>;
  }

  if (error) {
    return <div className="py-8 text-red-500">Error loading reviews</div>;
  }

  if (!reviews || reviews.length === 0) {
    return <div className="py-8 text-center text-muted-foreground">No reviews found.</div>;
  }

  const showMoreReviews = () => {
    setShowReviewCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="reviewsWrapper ">
      <h3 className="reviewsHeading ">Customer Reviews</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.slice(0, showReviewsCount).map((review) => (
          <div key={review.id} className=" reviewsCard">
            <Avatar className="avtarIcon">
              <AvatarImage src={review.avatar} alt={review.name} />
              <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="avtarDetails">
              <h4 className="font-semibold text-sm flex items-center gap-1">
                {review.name}
                <span className="flex items-center ml-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  ))}
                </span>
              </h4>
              <p className="avtartSub  text-muted-foreground">{review.role}</p>
              <p className="avtartsubDetails  text-muted-foreground ">
                {review.comments}
              </p>
            </div>
          </div>
        ))}
      </div>
      {showReviewsCount <= reviews.length && (
        <Button
          variant="outline"
          className=" showallBtn"
          onClick={showMoreReviews}
        >
          {showReviewsCount <= 6
            ? `Show All ${reviews && reviews.length} Reviews`
            : `Show remaining ${reviews.length - showReviewsCount} Reviews`}
        </Button>
      )}
    </div>
  );
};

export default ReviewsSection;
