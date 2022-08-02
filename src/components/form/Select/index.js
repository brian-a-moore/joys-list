import styled from 'styled-components';

function SelectInput({ onChange, name, options, ...rest }) {
    return (
        <Wrapper>
            <select
                {...rest}
                name={name}
                onChange={e => onChange(name, e.target.value)}
            >
                {options.map(({ id, value, title }) => (
                    <option key={id} value={value}>
                        {title}
                    </option>
                ))}
            </select>
        </Wrapper>
    );
}

export default SelectInput;

const Wrapper = styled.div`
    float: left;

    select {
        float: left;
        height: 2rem;
    }
`;
