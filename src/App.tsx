import { ThemeProvider } from "@components/theme/theme-provider";
import { lazy, Suspense } from "react";
import ErrorBoundary from "@components/common/ErrorBoundary";
import Header from "@components/Header/Header";
import Hero from "@components/Hero";
import SectionFallback from "@/components/common/SectionFallback";
import GradientNav from "@components/GradientNav/GradientNav";

const Features = lazy(() => import("@components/Features"));
const Dashboard = lazy(() => import("@components/Dashboard"));
const Pricing = lazy(() => import("@components/Pricing"));
const Testimonials = lazy(() => import("@components/Testimonials"));
const CTA = lazy(() => import("@components/CTA/CTA"));
const Footer = lazy(() => import("@components/Footer/Footer"));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <div className="flex flex-col items-center min-h-screen w-full bg-background transition-colors duration-300">
          <Header />
          <Hero />

          <Suspense fallback={<SectionFallback />}>
            <Dashboard />
          </Suspense>

          <div className="bg-background2 w-full pt-10">
            <GradientNav />
            <Suspense fallback={<SectionFallback />}>
              <Features />
              <Testimonials />
              <Pricing />
              <CTA />
            </Suspense>
          </div>

          <Suspense fallback={<SectionFallback />}>
            <Footer />
          </Suspense>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
