// COMPONENTS
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { MessengerContainer } from "./components/Messenger/MessengerContainer";
import { FriendsContainer } from "./components/Friends/FriendsContainer";
import { Feed } from "./components/Feed/Feed";
import { MusicContainer } from "./components/Music/MusicContainer";
import { Settings } from "./components/Settings/Settings";

// LIBS
import { Route, Routes, BrowserRouter } from "react-router-dom";

//

function App() {
  return (
    <BrowserRouter>
      <section>
        <Header />
        <div className="grid sm:grid-cols-[200px_1fr]">
          <Navigation />

          {/* ROUTING */}
          <Routes>
            <Route path="/" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/messenger/*" element={<MessengerContainer />} />
            <Route path="/friends" element={<FriendsContainer />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/music" element={<MusicContainer />} />
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
