import styled from 'styled-components';

type Option = {
    id: string;
    value: string;
    title: string;
};

function SelectInput({
    onChange,
    name,
    options,
    ...rest
}: {
    onChange: Function;
    name: string;
    options: Option[];
}) {
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
