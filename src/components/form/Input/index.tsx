import styled from 'styled-components';

type Props = {
    onChange: Function;
    name: string;
};

const Input: React.FC<Props> = ({ onChange, name, ...rest }) => {
    return (
        <Wrapper>
            <input
                {...rest}
                name={name}
                onChange={e => onChange(name, e.target.value)}
            />
        </Wrapper>
    );
};

export default Input;

const Wrapper = styled.div`
    float: left;

    input {
        float: left;
        height: 2rem;
    }
`;
