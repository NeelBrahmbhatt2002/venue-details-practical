import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { DateRange } from "react-day-picker";
import { Calendar as CalendarIcon } from "lucide-react";
import "./../App.css";

const SelectDates: React.FC = () => {
  const [date, setDate] = useState<DateRange | undefined>();

  const handleClear = () => setDate(undefined);

  return (
    <div className="py-5 border-gray-200">
      <h2 className="text-xl font-semibold mb-6 calenderHeading">Select Date</h2>
      <div className="max-w-xl">
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          disabled={(d) => d < new Date()}
          className="pointer-events-auto  rounded-lg"
        />
        <div className="mt-4 flex justify-between items-center">
          {date?.from && date?.to ? (
            <span className="text-sm text-muted-foreground">
              {`${date.from.toLocaleDateString()} - ${date.to.toLocaleDateString()}`}
            </span>
          ) : (
            <CalendarIcon className="w-5 h-5 text-muted-foreground" />
          )}
          <Button
            variant="link"
            className="text-sm font-medium"
            onClick={handleClear}
          >
            Clear dates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectDates;
