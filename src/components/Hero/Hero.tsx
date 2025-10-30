import avatarOneImage from "@/assets/avatar-images/avatar-1.jpg";
import avatarTwoImage from "@/assets/avatar-images/avatar-2.jpg";
import avatarThreeImage from "@/assets/avatar-images/avatar-3.jpg";
import avatarFourImage from "@/assets/avatar-images/avatar-4.jpg";
import AnnouncementBadge from "./AnnouncementBadge";
import EmailForm from "./EmailForm";
import AvatarStack from "../common/AvatarStack";

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
    <section className="container mx-auto px-4 py-16 md:py-24 bg-background">
      <div className="text-center max-w-4xl mx-auto">
        <AnnouncementBadge />

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
          The Finance Solutions
          <br />
          For Your Business
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Empower your finances with The leading solutions for thousands of small and medium-sized businesses
        </p>

        <EmailForm onSubmit={handleEmailSubmit} />

        <AvatarStack avatars={AVATARS} />
        <p className="text-sm text-muted-foreground mt-2">1,200+ reviews (4.9 of 5)</p>
      </div>
    </section>
  );
};

export default Hero;
