import ctaImage from "@assets/cta/cta-image.avif";
import { Button } from "../common/ui/button";
import { Card, CardContent } from "../common/ui/card";

export default function CTA() {
  return (
    <section className="py-16 bg-background" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden border-0 p-0 bg-card2 shadow-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Left Content */}
                <div className="p-8 md:p-12 lg:p-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-foreground">
                    Upgrade your financial experience with FinBiz
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="accent" size="lg" className="cursor-pointer">
                      Request Demo
                    </Button>
                    <Button variant="default" size="lg" className="cursor-pointer">
                      Watch Video
                    </Button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:block h-64 md:h-full p-4 md:ml-32">
                  <img
                    src={ctaImage}
                    alt="Person viewing financial planning boards"
                    className="w-full  h-full object-cover rounded-2xl max-w-full"
                    loading="lazy"
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
