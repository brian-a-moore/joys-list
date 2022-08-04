import { useState } from 'react';
import styled from 'styled-components';

import { Input, Select } from '../../../form';
import { IconButton } from '../../../interactive';
import { FIELD_OPTS } from '../../../../data/constants';
import { InputValue } from '../../../../interfaces/input';
import { IField, IFieldOpts } from '../../../../interfaces/field';
import { EButtonTypes } from '../../../../interfaces/interactions';
// import { getDefaultOptions } from '../../../../helpers';

function Field({
    field,
    onFieldChange,
    deleteField
}: {
    field: IField;
    onFieldChange: Function;
    deleteField: Function;
}) {
    const [showOptions, setShowOptions] = useState(false);

    const _toggleOptions = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setShowOptions(prevState => !prevState);
    };

    const _renderOptions = (key: string, opts: IFieldOpts) => {
        // const defaultOpts = getDefaultOptions(key);
    };

    return (
        <Wrapper>
            <div className="field-header">
                <div className="inputs">
                    <Input
                        type="text"
                        name="fieldName"
                        placeholder="Field Name"
                        value={field.fieldName}
                        onChange={(name: string, value: InputValue) =>
                            onFieldChange(field.id, name, value)
                        }
                    />
                    <Select
                        name="fieldType"
                        value={field.fieldType}
                        onChange={(name: string, value: InputValue) =>
                            onFieldChange(field.id, name, value)
                        }
                        options={FIELD_OPTS}
                    />
                </div>
                <div className="actions">
                    <IconButton
                        onClick={_toggleOptions}
                        path={showOptions ? 'minimize' : 'maximize'}
                    />
                    <IconButton
                        type={EButtonTypes.DESTRUCTIVE}
                        onClick={() => deleteField(field.id)}
                        path="close"
                    />
                </div>
            </div>
            {showOptions && (
                <div className="field-options">
                    <h6>Options:</h6>
                    <>{_renderOptions(field.fieldType, field.opts)}</>
                    <p>{JSON.stringify(field.opts)}</p>
                </div>
            )}
        </Wrapper>
    );
}

export default Field;

const Wrapper = styled.div`
    float: left;
    width: 100%;
    margin: 0 0 1rem 0;
    padding: 1rem;
    border: 1px solid var(--gray-200);
    border-radius: 4px;

    .field-header {
        float: left;
        width: 100%;
        height: 2rem;

        .inputs {
            float: left;

            & div + div {
                margin: 0 0 0 1rem;
            }
        }

        .actions {
            float: right;

            & button + button {
                margin: 0 0 0 1rem;
            }
        }
    }

    .field-options {
        background: var(--gray-200);
        float: left;
        width: 100%;
        margin: 1rem 0 0 0;
        padding: 1rem 1rem 0 1rem;
        border-radius: 4px;

        .opts-row {
            float: left;
            width: 100%;
            margin: 0 0 1rem 0;
        }
    }
`;
