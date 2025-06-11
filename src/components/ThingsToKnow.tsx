import React from "react";
import { Button } from "@/components/ui/button";
import "./../App.css";
import { useToast } from "@/hooks/use-toast";

const ThingsToKnow: React.FC = () => {
  const { toast } = useToast();

  const safetyItems = [
    "Carbon monoxide alarm not reported",
    "Smoke alarm not reported",
    "Some spaces are shared",
  ];

  const cancellationPolicy = [
    "Free cancellation before 9 Aug. Cancel before check-in on 14 Aug for a partial refund.",
    "Review this Host's full policy for details.",
  ];

  const showMore = () => {
    toast({
      title: "Coming Soon!",
      description: "This feature will be available soon.",
      variant: "success",
    });
  };

  return (
    <div className="tinkKnowmain ">
      <h3 className="tinkKnowHeading">Things to know</h3>

      <div className="detailsRow ">
        <div className="detailsCards">
          <h4 className="font-medium mb-3">Safety & property</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {safetyItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button
            onClick={showMore}
            variant="link"
            className="showmoreBtn p-0 mt-3 text-sm"
          >
            Show More
          </Button>
        </div>

        <div className="detailsCards">
          <h4 className="font-medium mb-3">Cancellation policy</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            {cancellationPolicy.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <Button
            onClick={showMore}
            variant="link"
            className="showmoreBtn p-0 mt-3 text-sm"
          >
            Show More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThingsToKnow;
