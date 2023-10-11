import Header from "../Header/Header";
import ContainerStyled from "../shared/ContainerStyled";

const App = (): JSX.Element => {
  return (
    <>
      <Header
        picture="images/recomotor-logo.webp"
        alternativeText="Recomotor logo"
      />
      <ContainerStyled>
        <p>Recomotor cars wish list</p>
      </ContainerStyled>
    </>
  );
};

export default App;
