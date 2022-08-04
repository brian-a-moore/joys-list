import { Route, Routes } from "react-router-dom";
import { Nav } from "../components/core";
import {
  Home,
  List,
  Lists,
  PageNotFound,
  Settings,
  Template,
  Templates,
} from "../components/views";
import { Container, Wrapper } from "./style";

function App() {
  return (
    <Wrapper>
      <Nav />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/list/:id" element={<List />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/template/:id" element={<Template />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
    </Wrapper>
  );
}

export default App;
