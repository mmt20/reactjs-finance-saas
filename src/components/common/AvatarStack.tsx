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
    <div className="mt-6 flex flex-col items-center gap-3">
      <div className="flex -space-x-2">
        {avatars.map((avatar, index) => (
          <Avatar
            key={index}
            className={`w-${size} h-${size} border-background rounded-full border`}
          >
            <AvatarImage
              src={avatar.src}
              alt={`User avatar ${index + 1}`}
              className="h-full w-full rounded-full object-cover"
            />
            <AvatarFallback className="bg-muted text-muted-foreground flex h-full w-full items-center justify-center rounded-full text-xs">
              {avatar.fallback}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>
  );
};

export default AvatarStack;
