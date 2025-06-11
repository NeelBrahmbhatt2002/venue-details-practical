import React from "react";
import { Facebook, Instagram, Twitter, MapPin, Music } from "lucide-react";

const Footer: React.FC = () => {
  const companyLinks = ["About", "Press", "Careers", "Terms", "Privacy"];
  const activityLinks = [
    "Activities",
    "Locations",
    "Resources",
    "Ambassador Program",
  ];
  const hostLinks = ["List your space", "Community", "Become a Vendor"];
  const supportLinks = [
    "Help Center",
    "Trust and Safety",
    "Cookie preferences",
    "Report vulnerability",
  ];

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        {/* Grid section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="public/images/logo.png"
              alt="Logo"
              className="w-40 h-auto object-contain"
            />
          </div>

          {/* Company */}
          <div className="footerNavBar">
            <h3 className="font-semibold mb-4 footerhead">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div className="footerNavBar">
            <h3 className="font-semibold mb-4 footerhead">Activities</h3>
            <ul className="space-y-2">
              {activityLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Host */}
          <div className="footerNavBar">
            <h3 className="font-semibold mb-4 footerhead">Host</h3>
            <ul className="space-y-2">
              {hostLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="footerNavBar">
            <h3 className="font-semibold mb-4 footerhead">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-10 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 Seek Spaces. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Facebook className="w-7 h-7 bg-gray-300 p-[3px] rounded-full text-muted-foreground hover:text-foreground cursor-pointer" />
            <Instagram className="w-7 h-7 bg-gray-300 p-[3px] rounded-full text-muted-foreground hover:text-foreground cursor-pointer" />
            <Twitter className="w-7 h-7 bg-gray-300 p-[3px] rounded-full text-muted-foreground hover:text-foreground cursor-pointer" />
            <Music className="w-7 h-7 bg-gray-300 p-[3px] rounded-full  text-muted-foreground hover:text-foreground cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
