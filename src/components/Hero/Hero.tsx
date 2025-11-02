import avatarOneImage from "@/assets/avatar-images/avatar-1.avif";
import avatarTwoImage from "@/assets/avatar-images/avatar-2.avif";
import avatarThreeImage from "@/assets/avatar-images/avatar-3.avif";
import avatarFourImage from "@/assets/avatar-images/avatar-4.avif";

import AvatarStack from "../common/AvatarStack";
import { ArrowRight } from "lucide-react";
import AnnouncementBadge from "../common/AnnouncementBadge";
import EmailForm from "../common/EmailForm";

const AVATARS = [
  { src: avatarOneImage, fallback: "AB" },
  { src: avatarTwoImage, fallback: "MA" },
  { src: avatarThreeImage, fallback: "RK" },
  { src: avatarFourImage, fallback: "AL" },
];

const Hero = () => {
  const handleEmailSubmit = (email: string) => {
    console.log("Email submitted:", email);
  };

  return (
    <section className="bg-background container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <AnnouncementBadge label="New" endIcon={ArrowRight}>
          Introducing AI Automation
        </AnnouncementBadge>

        <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold md:text-6xl">
          The Finance Solutions
          <br />
          For Your Business
        </h1>

        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
          Empower your finances with The leading solutions for thousands of
          small and medium-sized businesses
        </p>

        <EmailForm
          onSubmit={handleEmailSubmit}
          buttonVariant="default"
          buttonText="Book a Demo"
          className="mx-auto rounded-full px-1 md:h-14 md:max-w-xl"
          inputClass="rounded-full"
          buttonClass="rounded-full font-medium "
        />
        <AvatarStack avatars={AVATARS} />
        <p className="text-muted-foreground mt-2 text-sm">
          1,200+ reviews (4.9 of 5)
        </p>
      </div>
    </section>
  );
};

export default Hero;
