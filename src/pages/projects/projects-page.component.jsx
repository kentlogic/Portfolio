import React from "react";
import Card from "../../components/card/card.component";
import { Container, ProjHeader, ProjContainer } from "./projects-page.styles";
import ImageLink from "../../components/image-link/image-link.component";
import { requestProjects } from "../../redux/actions";
import { connect } from "react-redux";
import LoadingAnimation from "../../components/loading-animation/loading-animation.component";

const mapStateToProps = (state) => {
  return {
    projects: state.requestProjects.projects,
    isProjPending: state.requestProjects.isProjPending,
    projError: state.requestProjects.projError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestProjects: () => dispatch(requestProjects()),
  };
};

class ProjectsPage extends React.Component {
  componentDidMount() {
    this.props.onRequestProjects();
  }
  render() {
    const { projError, isProjPending, projects } = this.props;
    return isProjPending ? (
      <LoadingAnimation />
    ) : !projError ? (
      <Container>
        <ProjHeader>Projects</ProjHeader>
        <ProjContainer>
          {projects.map((proj, i) => {
            let type;
            switch (projects[i].type) {
              case 1:
                type = "Web";
                break;
              case 2:
                type = "Mobile";
                break;
              default:
                type = "Others";
                break;
            }
            return (
              <Card
                key={i}
                imgUrl={projects[i].imageurl}
                title={projects[i].name}
                subtitle={type}
                body={projects[i].description}
                footer={""}
              >
                <ImageLink
                  src={"./images/github24.svg"}
                  url={projects[i].repourl}
                >
                  View Code
                </ImageLink>
                <ImageLink
                  src={"./images/discord24.svg"}
                  url={projects[i].liveurl}
                >
                  View Live
                </ImageLink>
              </Card>
            );
          })}
        </ProjContainer>
      </Container>
    ) : (
      <div>Unable to retrieve Projects.</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
