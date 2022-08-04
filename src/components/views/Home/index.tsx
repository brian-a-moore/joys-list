import { useEffect, useState } from "react";
import { getSettings } from "../../../api";
import { Wrapper } from "./style";

const Home = () => {
  const [firstName, setFirstName] = useState<string | null>(null);

  useEffect(() => {
    const settings = getSettings();

    setFirstName(settings.firstName || "Friend");
  }, []);

  return (
    <Wrapper>
      <h1>Home</h1>
      {firstName === null ? (
        <p>Loading...</p>
      ) : (
        <p>Welcome back, {firstName}!</p>
      )}
    </Wrapper>
  );
};

export default Home;
