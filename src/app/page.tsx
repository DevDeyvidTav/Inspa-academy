import { About } from "./sections/about";
import { Home } from "./sections/home";
import { Instructors } from "./sections/instructors";

export default function Main() {
  
  return (
    <div className="w-full min-h-screen">
      <Home />
      <About />
      <Instructors />
    </div>
  );
}
