import Header from "@components/Header/Header";
import Hero from "@components/Hero/Hero";
import { ThemeProvider } from "@components/theme/theme-provider";
import Dashboard from "@components/Dashboard/Dashboard";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className="min-h-screen bg-background  transition-colors duration-300">
        <Header />
        <Hero />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
