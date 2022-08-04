import { useState } from 'react';
import styled from 'styled-components';

import { CheckBox, Input, Select } from '../../../form';
import { IconButton } from '../../../interactive';
import { FIELD_OPTS } from '../../../../data/constants';
import { EInputType } from '../../../../interfaces/input';
import {
    IField,
    IFieldConstant,
    IFieldOption
} from '../../../../interfaces/field';
import { EButtonType } from '../../../../interfaces/interactions';
import { getFieldOptionConstants } from '../../../../helpers';

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

    const _renderOptions = (key: string, opts: IFieldOption) => {
        const constants = getFieldOptionConstants(key);

        return constants.map((c: IFieldConstant) => {
            switch (c.type) {
                case EInputType.CHECKBOX: {
                    return (
                        <CheckBox
                            name={c.name}
                            label={c.label}
                            onChange={() => {}}
                            value={c.value}
                        />
                    );
                }
                case EInputType.DATE: {
                    return (
                        <Input
                            type={EInputType.DATE}
                            name={c.name}
                            label={c.label}
                            onChange={() => {}}
                            value={c.value}
                        />
                    );
                }
                case EInputType.NUMBER: {
                    return (
                        <Input
                            type={EInputType.NUMBER}
                            name={c.name}
                            label={c.label}
                            onChange={() => {}}
                            value={c.value}
                        />
                    );
                }
                case EInputType.SELECT: {
                    return (
                        <Select
                            type={EInputType.NUMBER}
                            name={c.name}
                            label={c.label}
                            onChange={() => {}}
                            options={c.options}
                            value={c.value}
                        />
                    );
                }
                case EInputType.TEXT: {
                    return (
                        <Input
                            type={EInputType.TEXT}
                            name={c.name}
                            label={c.label}
                            onChange={() => {}}
                            value={c.value}
                        />
                    );
                }
                default:
                    throw new Error('Unknown field type');
            }
        });
    };

    return (
        <Wrapper>
            <div className="field-header">
                <div className="inputs">
                    <Input
                        type={EInputType.TEXT}
                        name="fieldName"
                        placeholder="Field Name"
                        value={field.fieldName}
                        onChange={(name, value) =>
                            onFieldChange(field.id, name, value)
                        }
                    />
                    <Select
                        name="fieldType"
                        onChange={(name, value) =>
                            onFieldChange(field.id, name, value)
                        }
                        options={FIELD_OPTS}
                        value={field.fieldType}
                    />
                </div>
                <div className="actions">
                    <IconButton
                        onClick={_toggleOptions}
                        path={showOptions ? 'minimize' : 'maximize'}
                    />
                    <IconButton
                        type={EButtonType.DESTRUCTIVE}
                        onClick={() => deleteField(field.id)}
                        path="close"
                    />
                </div>
            </div>
            {showOptions && (
                <div className="field-options">
                    <h6>Options:</h6>
                    <>{_renderOptions(field.fieldType, field.opts)}</>
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
