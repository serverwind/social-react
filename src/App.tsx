// COMPONENTS
import Header from "./components/Header/Header";
import { NavigationContainer } from "./components/Navigation/NavigationContainer";
import Footer from "./components/Footer/Footer";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { MessengerContainer } from "./components/Messenger/MessengerContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import { FeedContainer } from "./components/Feed/FeedContainer";
import { MusicContainer } from "./components/Music/MusicContainer";
import { SettingsContainer } from "./components/Settings/SettingsContainer";

// LIBS
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <section>
        <Header />
        <div className="grid sm:grid-cols-[200px_1fr]">
          <NavigationContainer />

          {/* ROUTING */}
          <Routes>
            <Route path="/" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/messenger/*" element={<MessengerContainer />} />
            <Route path="/friends" element={<FriendsContainer />} />
            <Route path="/feed" element={<FeedContainer />} />
            <Route path="/music" element={<MusicContainer />} />
            <Route path="/settings" element={<SettingsContainer />} />
          </Routes>
          {/* ROUTING: END */}
        </div>
        <Footer />
      </section>
    </BrowserRouter>
  );
}
