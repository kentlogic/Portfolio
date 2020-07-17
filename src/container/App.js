import React from "react";
import Header from "../components/header/header.component";
import HomePage from "../pages/home/home.component";
import { Route, Switch } from "react-router-dom";
import ProfilePage from "../pages/profile/profile-page.component";
import Footer from "../components/footer/footer.component";
import { AppContainer, AppHeader, AppContent, AppFooter } from "./app.style";
import GlobalFonts from "../fonts/fonts";

class App extends React.Component {
  componentDidMount() {
    console.log("Mounted");
    console.log("url", process.env.PUBLIC_URL);
  }
  render() {
    return (
      <AppContainer>
        <GlobalFonts />
        <AppHeader>
          <Header />
        </AppHeader>
        <AppContent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" component={ProfilePage} />
          </Switch>
        </AppContent>
        <AppFooter>
          <Footer />
        </AppFooter>
      </AppContainer>
    );
  }
}
export default App;
