import CountdownPage from "./components/CountdownPage";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <div className="min-h-screen flex">
      <main className="container mx-auto">
        <CountdownPage />
        <Toaster />
      </main>
    </div>
  );
};

export default App;
