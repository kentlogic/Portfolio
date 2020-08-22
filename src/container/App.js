import React from "react";
import Header from "../components/header/header.component";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/home/home-page.component";
import ProfilePage from "../pages/profile/profile-page.component";
import ContactPage from "../pages/contact/contact-page.component";
import Footer from "../components/footer/footer.component";
import { AppContainer, AppHeader, AppContent, AppFooter } from "./app.style";
import ProjectsPage from "../pages/projects/projects-page.component";

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <AppContainer>
        <AppHeader>
          <Header />
        </AppHeader>
        <AppContent>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/projects" component={ProjectsPage} />
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
