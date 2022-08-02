import styled from 'styled-components';

function Empty({ children }: { children: JSX.Element }) {
    return (
        <Wrapper>
            <p>{children}</p>
        </Wrapper>
    );
}

export default Empty;

const Wrapper = styled.div``;
