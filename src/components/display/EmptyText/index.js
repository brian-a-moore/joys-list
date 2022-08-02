import styled from 'styled-components';

function Empty({ children }) {
    return (
        <Wrapper>
            <p>{children}</p>
        </Wrapper>
    );
}

export default Empty;

const Wrapper = styled.div``;
