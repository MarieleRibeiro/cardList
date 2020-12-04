import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = () => {
  return (
    <HeaderContainer>
      <p>Fast Payment</p>
      <h2>issmich</h2>
      <h1>
        Choose a Client <br />
        Shopping Cart
      </h1>
    </HeaderContainer>
  );
};
