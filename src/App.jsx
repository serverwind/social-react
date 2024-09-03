// COMPONENTS
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";
import { Profile } from "./components/Profile/Profile";
import { Messenger } from "./components/Messenger/Messenger";
import { Friends } from "./components/Friends/Friends";
import { Feed } from "./components/Feed/Feed";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";

// LIBS
import { Route, Routes, BrowserRouter } from "react-router-dom";

//

function App({ state, dispatch }) {
  return (
    <BrowserRouter>
      <section>
        <Header />
        <div className="grid sm:grid-cols-[200px_1fr]">
          <Navigation links={state.links.links} />

          {/* ROUTING */}
          <Routes>
            <Route path="/" element={<Profile posts={state.posts} dispatch={dispatch} />} />
            <Route path="/profile" element={<Profile posts={state.posts} dispatch={dispatch} />} />
            <Route path="/messenger/*" element={<Messenger messenger={state.messenger} users={state.users.users} dispatch={dispatch} />} />
            <Route path="/friends" element={<Friends friends={state.users.friends} />} />
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
