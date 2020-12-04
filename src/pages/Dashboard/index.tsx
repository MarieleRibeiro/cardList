import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { Wrapper } from "./styled";

import styled from "styled-components";
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.gray400};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Dashboard = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <List />
      </Wrapper>
    </Container>
  );
};
