import React from "react";
import "./profile-page.styles.scss";
import Card from "../../components/card/card.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { Container } from "./profile-page.style";

const AboutPage = () => {
  return (
    <Container>
      <Card title={"This is a title"} content={"this is a content"}>
        <CustomButton type={"input"} name={"profile"}>
          More about me
        </CustomButton>
      </Card>
      <Card title={"This is a title"} content={"this is a content"}>
        <CustomButton type={"input"} name={"profile"}>
          More about me
        </CustomButton>
      </Card>

      <Card title={"This is a title"} content={"this is a content"}>
        <CustomButton type={"input"} name={"profile"}>
          More about me
        </CustomButton>
      </Card>

      <Card title={"This is a title"} content={"this is a content"}>
        <CustomButton type={"input"} name={"profile"}>
          More about me
        </CustomButton>
      </Card>

      <Card title={"This is a title"} content={"this is a content"}>
        <CustomButton type={"input"} name={"profile"}>
          More about me
        </CustomButton>
      </Card>
    </Container>
  );
};

export default AboutPage;
