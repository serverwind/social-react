import { lazy, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { initApp } from "./data/appReducer";
import withSuspence from "./hoc/withSuspence";

import Header from "./components/Header/Header";
import { NavigationContainer } from "./components/Navigation/NavigationContainer";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));
const MessengerContainer = lazy(() => import("./components/Messenger/MessengerContainer"));
const FriendsContainer = lazy(() => import("./components/Friends/FriendsContainer"));
const Login = lazy(() => import("./components/Login/Login"));
const FeedContainer = lazy(() => import("./components/Feed/FeedContainer"));
const MusicContainer = lazy(() => import("./components/Music/MusicContainer"));
const SettingsContainer = lazy(() => import("./components/Settings/SettingsContainer"));

function App(props) {
  useEffect(() => {
    props.initApp();
  }, []);

  if (!props.init) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <section>
        <Header />
        <div className="grid sm:grid-cols-[200px_1fr]">
          <NavigationContainer />

          <Routes>
            <Route path="/" element={withSuspence(ProfileContainer)} />
            <Route path="/profile/:userId" element={withSuspence(ProfileContainer)} />
            <Route path="/profile/*" element={withSuspence(ProfileContainer)} />
            <Route path="/messenger/*" element={withSuspence(MessengerContainer)} />
            <Route path="/friends" element={withSuspence(FriendsContainer)} />
            <Route path="/feed" element={withSuspence(FeedContainer)} />
            <Route path="/music" element={withSuspence(MusicContainer)} />
            <Route path="/settings" element={withSuspence(SettingsContainer)} />
            <Route path="/login" element={withSuspence(Login)} />
          </Routes>
        </div>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  init: state.app.initApp,
});

export default connect(mapStateToProps, { initApp })(App);
