import styled from 'styled-components';

function Input({
    onChange,
    name,
    ...rest
}: {
    onChange: Function;
    name: string;
    [x: string]: any;
}) {
    return (
        <Wrapper>
            <input
                {...rest}
                name={name}
                onChange={e => onChange(name, e.target.value)}
            />
        </Wrapper>
    );
}

export default Input;

const Wrapper = styled.div`
    float: left;

    input {
        float: left;
        height: 2rem;
    }
`;
