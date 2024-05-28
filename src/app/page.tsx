import { About } from "./sections/about";
import { Home } from "./sections/home";

export default function Main() {
  
  return (
    <div className="w-full min-h-screen">
      <Home />
      <About />
    </div>
  );
}
