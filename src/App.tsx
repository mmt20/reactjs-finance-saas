import { ThemeProvider } from "@components/theme/theme-provider";
import Header from "@components/Header/Header";
import GradientNav from "@components/GradientNav/GradientNav";
import Hero from "@components/Hero";
import Dashboard from "@components/Dashboard";
import Features from "@components/Features";
import Testimonials from "@components/Testimonials";
import Pricing from "@components/Pricing/Pricing";
import CTA from "@components/CTA/CTA";
import Footer from "@components/Footer/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className="min-h-screen w-full  bg-background transition-colors duration-300">
        <Header />
        <Hero />
        <Dashboard />
        <GradientNav />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
