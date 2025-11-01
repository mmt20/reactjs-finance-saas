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
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables");
  } else {
    console.log("Supabase environment variables are set.");
    console.log("VITE_SUPABASE_URL:", supabaseUrl);
    console.log("VITE_SUPABASE_ANON_KEY:", supabaseKey);
  }
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className="min-h-screen w-full  bg-background transition-colors duration-300">
        <Header />
        <Hero />
        <Dashboard />
        <div className="bg-background2 ">
          <GradientNav />
          <Features />
          <Testimonials />
          <Pricing />
          <CTA />
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
