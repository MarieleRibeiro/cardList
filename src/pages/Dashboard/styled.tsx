import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  max-width: 460px !important;
  height: 609px;
  width: 100%;
  padding: 41px 39px 71px 39px;
  background-color: ${(props) => props.theme.colors.white};
  P {
    margin-bottom: 21px;
  }
  h2 {
    margin-bottom: 19px;
  }
  h1 {
    margin-bottom: 55px;
  }
`;
