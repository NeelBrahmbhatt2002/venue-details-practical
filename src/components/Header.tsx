import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Users, MapPin, Settings, Search } from "lucide-react";
import "./../App.css";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-[180px] md:w-[280px] h-auto">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Button variant="ghost" className="p-0 menuNav">
              <Globe className="w-4 h-4 mr-2" />
              Browse Venues
            </Button>
            <Button variant="ghost" className="p-0 menuNav">
              <Users className="w-4 h-4 mr-2" />
              Browse Vendors
            </Button>
            <Button variant="ghost" className="p-0 menuNav">
              <MapPin className="w-4 h-4 mr-2" />
              List Your Space
            </Button>
            <Button variant="ghost" className="p-0 menuNav">
              <Settings className="w-4 h-4 mr-2" />
              List Your Services
            </Button>
          </nav>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center btngrop gap-2">
            <Button className="bg-purple-600 text-white hover:bg-purple-700 px-6 md:px-4">
              LOG IN
            </Button>
            <Button className="bg-orange-500 text-white hover:bg-orange-600 px-6">
              SIGN UP
            </Button>
          </div>
        </div>

        {/* Filter & Search Section */}
        <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-start flex-wrap space-y-3 md:space-y-0 md:space-x-4 ml-2 md:ml-[40px]">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="text-sm px-4 py-2 shortMenu">
              Price
            </Button>
            <Button variant="outline" size="sm" className="text-sm px-4 py-2 shortMenu">
              Attendees
            </Button>
            <Button variant="outline" size="sm" className="text-sm px-4 py-2 shortMenu">
              Date & Time
            </Button>
            <Button variant="outline" size="sm" className="text-sm px-4 py-2 shortMenu">
              <Settings className="w-4 h-4 mr-1" />
              More Filters
            </Button>
          </div>
          <div className="w-full md:max-w-md relative">
            <Input
              placeholder="Find Spaces with specific keywords"
              className="pr-10 inputNav"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
