import Button from "./components/Button/button";
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <CenteredContainer>
      <Button size={56} theme="primary" isDisabled={false} isCounter={true} isFocus={true} />
    </CenteredContainer>
  );
}

export default App;