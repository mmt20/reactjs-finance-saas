import Header from "@components/Header/Header";
import GradientNav from "@components/GradientNav/GradientNav";
import { ThemeProvider } from "@components/theme/theme-provider";
import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Header />
        <Hero />
        <Dashboard />
        <GradientNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
