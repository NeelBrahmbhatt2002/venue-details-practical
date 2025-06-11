
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import "./../App.css";

interface HostInfoProps {
  name: string;
  avatar: string;
  description: string;
}

const HostInfo: React.FC<HostInfoProps> = ({ name, avatar, description }) => {
  return (
    <div className="profile-card flex gap-4 py-6 border-b border-border">
      <Avatar className="w-12 h-12">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold text-foreground">Hosted by {name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default HostInfo;
