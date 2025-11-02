import ctaImage from "@assets/cta/cta-image.avif";
import { Button } from "../common/ui/button";
import { Card, CardContent } from "../common/ui/card";

export default function CTA() {
  return (
    <section className="bg-background py-16" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <Card className="bg-card2 overflow-hidden border-0 p-0 shadow-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 items-center md:grid-cols-2">
                {/* Left Content */}
                <div className="p-8 md:p-12 lg:p-16">
                  <h2 className="text-foreground mb-8 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
                    Upgrade your financial experience with FinBiz
                  </h2>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                      variant="accent"
                      size="lg"
                      className="cursor-pointer"
                    >
                      Request Demo
                    </Button>
                    <Button
                      variant="default"
                      size="lg"
                      className="cursor-pointer"
                    >
                      Watch Video
                    </Button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex h-64 justify-center p-4 md:ml-32 md:block md:h-full">
                  <img
                    src={ctaImage}
                    alt="Person viewing financial planning boards"
                    className="h-full w-full max-w-full rounded-2xl object-cover"
                    loading="lazy"
                    decoding="async"
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
