import styled from 'styled-components';

function Card({ children, ...rest }) {
    return <Wrapper {...rest}>{children}</Wrapper>;
}

export default Card;

const Wrapper = styled.div`
    background: var(--white);
    float: left;
    margin: 0 0 1rem 0;
    padding: 1rem;
    width: 100%;
    border: 1px solid var(--gray-200);
    border-radius: 4px;
    box-shadow: 0 0.25rem 0.5rem var(--gray-300);
`;
