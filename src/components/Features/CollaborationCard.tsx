import { Card, CardContent } from "@/components/common/ui/card";
import AvatarStack from "../common/AvatarStack";
import avatarOneImage from "@/assets/avatar-images/avatar-1.jpg";
import avatarTwoImage from "@/assets/avatar-images/avatar-2.jpg";
import avatarThreeImage from "@/assets/avatar-images/avatar-3.jpg";
import avatarFourImage from "@/assets/avatar-images/avatar-4.jpg";

const AVATARS = [
  { src: avatarOneImage, fallback: "AB" },
  { src: avatarTwoImage, fallback: "MA" },
  { src: avatarThreeImage, fallback: "RK" },
  { src: avatarFourImage, fallback: "AL" },
];

const CollaborationCard = () => {
  return (
    <Card className="rounded-2xl border border-border bg-card2 shadow-sm flex flex-col">
      <CardContent className="p-5 flex flex-col items-center flex-1">
        <p className="font-bold text-lg">Easy collaboration</p>
        <p className="text-sm font-semibold text-card-foreground text-center mb-6">
          Seamlessly collaborate with your team members like never before.
        </p>
        <div className="relative w-66 h-66 flex items-center justify-center  rounded-full">
          {/* Outer circle */}
          <div className="absolute w-66 h-66 rounded-full bg-circle-outer border border-border"></div>
          {/* Inner circle */}
          <div className="absolute w-52 h-52 rounded-full bg-circle-inner border border-border"></div>
          {/* Avatar stack */}
          <div className="relative z-10 ">
            <AvatarStack avatars={AVATARS} size={12} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollaborationCard;
