import { About } from "./sections/about";
import { Footer } from "./sections/footer";
import { Home } from "./sections/home";
import { Instructors } from "./sections/instructors";
import { Partners } from "./sections/partners";

export default function Main() {
  
  return (
    <div className="w-full min-h-screen">
      <Home />
      <About />
      <Instructors />
      <Partners />
      <Footer />
    </div>
  );
}
