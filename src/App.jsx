import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";
import { Profile } from "./components/Profile/Profile";

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
