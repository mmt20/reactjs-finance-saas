import { Card, CardContent } from "@/components/common/ui/card";
import AvatarStack from "../common/AvatarStack";
import avatarOneImage from "@/assets/avatar-images/avatar-1.avif";
import avatarTwoImage from "@/assets/avatar-images/avatar-2.avif";
import avatarThreeImage from "@/assets/avatar-images/avatar-3.avif";
import avatarFourImage from "@/assets/avatar-images/avatar-4.avif";

const AVATARS = [
  { src: avatarOneImage, fallback: "AB" },
  { src: avatarTwoImage, fallback: "MA" },
  { src: avatarThreeImage, fallback: "RK" },
  { src: avatarFourImage, fallback: "AL" },
];

const CollaborationCard = () => {
  return (
    <Card className="border-border bg-card2 flex flex-col rounded-2xl border shadow-sm">
      <CardContent className="flex flex-1 flex-col items-center p-5">
        <p className="text-lg font-bold">Easy collaboration</p>
        <p className="text-card-foreground mb-6 text-center text-sm font-semibold">
          Seamlessly collaborate with your team members like never before.
        </p>
        <div className="relative flex h-66 w-66 items-center justify-center rounded-full">
          {/* Outer circle */}
          <div className="bg-circle-outer border-border absolute h-66 w-66 rounded-full border"></div>
          {/* Inner circle */}
          <div className="bg-circle-inner border-border absolute h-52 w-52 rounded-full border"></div>
          {/* Avatar stack */}
          <div className="relative z-10">
            <AvatarStack avatars={AVATARS} size={12} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollaborationCard;
