import CountdownPage from "./components/CountdownPage";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggler";
import Footer from "./components/Footer";

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <>
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="min-h-screen flex flex-col">
        <main className="container mx-auto flex-1 px-3">
          <CountdownPage />
          <Toaster />
        </main>
        <Footer />
      </div>
    </>
  </ThemeProvider>
);

export default App;
