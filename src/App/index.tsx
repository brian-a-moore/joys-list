import { Route, Routes } from "react-router-dom";
import { Nav } from "../components/core";
import Views from "../components/views";
import { Container, Wrapper } from "./style";

const App = () => {
  return (
    <Wrapper>
      <Nav />
      <Container>
        <Routes>
          <Route index element={<Views.Home />} />
          <Route path="/list/:id" element={<Views.List />} />
          <Route path="/lists" element={<Views.Lists />} />
          <Route path="/settings" element={<Views.Settings />} />
          <Route path="/template/:id" element={<Views.Template />} />
          <Route path="/templates" element={<Views.Templates />} />
          <Route path="*" element={<Views.PageNotFound />} />
        </Routes>
      </Container>
    </Wrapper>
  );
};

export default App;
