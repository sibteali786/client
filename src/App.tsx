import { Button } from "@/components/ui/button";
import { ThemeProvider } from "./components/theme-provider";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Button variant="default">Button</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
