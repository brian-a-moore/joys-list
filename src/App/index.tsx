import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
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

const Wrapper = styled.div`
  background: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow-y: auto;
`;
