import styled from "styled-components";

const calculateWidth = (viewportWidth: number) => {
  return (-60 / 3000) * viewportWidth + 100;
};

const PageContainer = styled.div`
  width: ${() => calculateWidth(window.innerWidth).toString() + "%"};
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  background-color: #fff;
  padding: 60px 50px;
  border-radius: 10px;
`;

export default PageContainer;
