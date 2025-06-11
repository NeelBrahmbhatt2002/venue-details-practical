import React, { useState } from "react";
import { Check, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdditionalInfo: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const features = [
    {
      icon: Check,
      title: "Self check-in",
      description: "Check yourself in with the keypad.",
    },
    {
      icon: Calendar,
      title: "Free cancellation before 9 aug",
      description: "Get a full refund if you change your mind",
    },
  ];

  const loremText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className="py-6 border-b border-gray-200 space-y-6 ">
      <div className="flex flex-col grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex  items-start gap-3">
              <IconComponent className="w-5 h-5 mt-1 text-gray-600" />
              <div className="flex flex-col">
                <h4 className="font-medium text-gray-900">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {showMore ? loremText : `${loremText.substring(0, 150)}...`}
        </p>
        <Button
          variant="link"
          className="p-0 mt-2 text-sm font-medium"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less" : "Show more"}
        </Button>
      </div>
    </div>
  );
};

export default AdditionalInfo;
