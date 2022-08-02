import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSettings } from '../../../api';

function Home() {
    const [firstName, setFirstName] = useState(null);

    useEffect(() => {
        const settings = getSettings();

        setFirstName(settings.firstName || 'Friend');
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
}

export default Home;

const Wrapper = styled.section``;
