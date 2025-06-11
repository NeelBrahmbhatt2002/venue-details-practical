import React from "react";
import {
  Star,
  Sparkles,
  CheckCircle,
  KeyRound,
  MessageCircle,
  MapPin,
  Tag,
} from "lucide-react";

const rating = 4.87;
const ratingBreakdown = [
  { stars: 5, percent: 90 },
  { stars: 4, percent: 8 },
  { stars: 3, percent: 1 },
  { stars: 2, percent: 1 },
  { stars: 1, percent: 0 },
];
const categories = [
  { label: "Cleanliness", value: 4.9, icon: Sparkles },
  { label: "Accuracy", value: 4.9, icon: CheckCircle },
  { label: "Check-in", value: 4.9, icon: KeyRound },
  { label: "Communication", value: 4.9, icon: MessageCircle },
  { label: "Location", value: 4.5, icon: MapPin },
  { label: "Value", value: 4.8, icon: Tag },
];

interface OverallRatingProps {
  reviewCount: number;
}

const OverallRating: React.FC<OverallRatingProps> = ({ reviewCount }) => {
  return (
    <div className="py-8 border-b border-gray-200">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Star className="w-5 h-5 fill-black text-black" />
        <span className="font-semibold text-lg startTitle">{rating}</span>
        <span className="startTitle">· {reviewCount} Reviews</span>
      </div>

      {/* Ratings & Categories */}
      <div className="flex flex-col md:flex-row md:items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
        {/* Overall rating breakdown */}
        <div className="flex flex-col text-start px-6 py-4 min-w-[140px]">
          <span className="text-xs font-medium mb-3">Overall rating</span>
          <div className="flex flex-col gap-2">
            {ratingBreakdown.map((item) => (
              <div key={item.stars} className="flex items-center gap-2">
                <span className="text-xs w-4">{item.stars}</span>
                <div className="w-20 h-[4px] bg-gray-200 rounded">
                  <div
                    className="h-[4px] bg-black rounded"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Ratings */}
        <div className="grid grid-cols-2 md:flex flex-wrap md:flex-nowrap">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.label}
                className="flex flex-col text-start px-6 py-4 min-w-[140px]"
              >
                <span className="text-xs font-medium mb-3">{cat.label}</span>
                <span className="font-semibold text-base mb-4">
                  {cat.value}
                </span>
                <Icon className="w-5 h-5 text-gray-700" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OverallRating;
