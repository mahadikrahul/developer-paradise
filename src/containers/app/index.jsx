import { Container, ThemeProvider } from "react-bootstrap";
import DefaultLayout from "../../layouts/defaultLayout";
import "./index.scss";

const App = () => {
  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      >
        <Container fluid>
          <DefaultLayout />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
