import React from "react";
import Header from "../components/header/header.component";
import { Route, Switch } from "react-router-dom";
import ProfilePage from "../pages/profile/profile-page.component";
import ContactPage from "../pages/contact/contact.component";
import Footer from "../components/footer/footer.component";
import { AppContainer, AppHeader, AppContent, AppFooter } from "./app.style";

class App extends React.Component {
  componentDidMount() {
    console.log("Mounted");
    console.log("url", process.env.PUBLIC_URL);
  }
  render() {
    return (
      <AppContainer>
        <AppHeader>
          <Header />
        </AppHeader>
        <AppContent>
          <Switch>
            <Route exact path="/" component={ProfilePage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/contact" component={ContactPage} />
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
