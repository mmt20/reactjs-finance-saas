import ctaImage from "@assets/cta/cta-image.avif";
import { Button } from "../common/ui/button";
import { Card, CardContent } from "../common/ui/card";
export default function CTA() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-0 bg-card2  shadow-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
                {/* Left Content */}
                <div className="p-8 md:p-12 lg:p-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                    Let's Upgrade your finances experience by using FinBiz
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="accent" size="lg">
                      Request Demo
                    </Button>
                    <Button variant="default" size="lg">
                      Watch Video
                    </Button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="h-64 md:h-full  p-4">
                  <img
                    src={ctaImage}
                    alt="Person viewing financial planning boards"
                    className=" inset-0 w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
