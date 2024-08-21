import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Profile } from "./components/Profile";

function App() {
  return (
    <section>
      <Header />
      <div className="grid grid-cols-[1fr_2fr]">
        <Navigation />
        <Profile />
      </div>
      <Footer />
    </section>
  );
}

export { App };
