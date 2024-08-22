// COMPONENTS
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";
import { Profile } from "./components/Profile/Profile";
import { Messenger } from "./components/Messenger/Messenger";
import { Feed } from "./components/Feed/Feed";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";

// LIBS
import { Route, Routes, BrowserRouter } from "react-router-dom";

//

function App() {
  return (
    <BrowserRouter>
      <section>
        <Header />
        <div className="grid grid-cols-[200px_1fr]">
          <Navigation />

          {/* ROUTING */}
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messenger/*" element={<Messenger />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
          {/* ROUTING: END */}

        </div>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export { App };
