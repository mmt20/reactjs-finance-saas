import AnnouncementBadge from "../common/AnnouncementBadge";
import { MessageSquare } from "lucide-react";

const TestimonialsHeader = () => {
  return (
    <>
      <AnnouncementBadge startIcon={MessageSquare}>
        Testimonials
      </AnnouncementBadge>
      <h2 className="text-foreground mt-4 text-2xl font-bold sm:text-3xl">
        What people are saying
      </h2>
      <p className="text-muted-foreground mt-2 text-base font-normal sm:text-[18px]">
        "Thank you for your trust in Crypt Land! We are grateful for your
        feedback and are committed to providing the best [products/services
        offered]. Read what our clients have to say about their experience with
        us.
      </p>
    </>
  );
};

export default TestimonialsHeader;
