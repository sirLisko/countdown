import CountdownPage from "./components/CountdownPage";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggler";

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <div className="min-h-screen flex">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <main className="container mx-auto">
        <CountdownPage />
        <Toaster />
      </main>
    </div>
  </ThemeProvider>
);

export default App;
