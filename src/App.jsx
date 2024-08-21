import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Profile } from "./components/Profile";

function App() {
  return (
    <section>
      <Header />
      <div className="grid grid-cols-[200px_1fr]">
        <Navigation />
        <Profile />
      </div>
      <Footer />
    </section>
  );
}

export { App };
