import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface AvatarData {
  src: string;
  fallback: string;
}

interface AvatarStackProps {
  avatars: AvatarData[];
  size?: number;
}

const AvatarStack = ({ avatars, size = 8 }: AvatarStackProps) => {
  return (
    <div className="flex flex-col items-center gap-3 mt-6">
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <Avatar key={index} className={`w-${size} h-${size} border border-background rounded-full`}>
            <AvatarImage
              src={avatar.src}
              alt={`User avatar ${index + 1}`}
              className="w-full h-full object-cover rounded-full"
            />
            <AvatarFallback className="w-full h-full bg-muted text-muted-foreground text-xs flex items-center justify-center rounded-full">
              {avatar.fallback}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>
  );
};

export default AvatarStack;
