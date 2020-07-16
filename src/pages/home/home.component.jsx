import React from "react";
import "./home.styles.scss";
import Card from "../../components/card/card.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { Container } from "./home.style";
import { content_data } from "./home.data";

const HomePage = () => {
  const content = content_data[0].content;
  return (
    <Container>
      <Card title={"title"} content={content}>
        <CustomButton type={"input"} name={"profile"}>
          More about me
        </CustomButton>
      </Card>
      <Card title={"title"} content={content}>
        <CustomButton type={"input"} name={"profile"}>
          More about me
        </CustomButton>
      </Card>
    </Container>
  );
};

export default HomePage;
