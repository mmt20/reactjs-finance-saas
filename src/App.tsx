import { ThemeProvider } from "@components/theme/theme-provider";
import Header from "@components/Header/Header";
import GradientNav from "@components/GradientNav/GradientNav";
import Hero from "@components/Hero";
import Dashboard from "@components/Dashboard";
import Features from "@components/Features";
import Testimonials from "@components/Testimonials";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className="min-h-screen w-full overflow-x-hidden bg-background transition-colors duration-300">
        <Header />
        <Hero />
        <Dashboard />
        <GradientNav />
        <Features />
        <Testimonials />
      </div>
    </ThemeProvider>
  );
}

export default App;
