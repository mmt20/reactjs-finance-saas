import Header from "./components/Header/Header";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <div className="min-h-screen bg-background  transition-colors duration-300">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
