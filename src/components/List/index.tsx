import styled, { useTheme } from "styled-components";
import { FiCopy } from "react-icons/fi";

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  padding-top: 20px;
  padding-bottom: 20px;

  button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: ${(props) => props.theme.colors.gray100};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const ListContainer = styled.ul`
  width: 100%;
  li:first-child {
    border-top: 1px solid #e6e6e6;
  }
`;
const list = [
  { name: "Mariele Ribeiro", id: 1 },
  { name: "Miguel Ribeiro", id: 2 },
  { name: "Millena Ribeiro", id: 3 },
  { name: "Misael Ribeiro", id: 4 },
];

export const List = () => {
  const { colors } = useTheme();
  return (
    <ListContainer>
      {list.map((name) => (
        <Item>
          <h3>{name.name}</h3>
          <button>
            <FiCopy color={colors.gray200} size={16.5} />
          </button>
        </Item>
      ))}
    </ListContainer>
  );
};
