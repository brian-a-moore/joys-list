import { useState } from 'react';
import styled from 'styled-components';

import { FIELD_OPTS } from '../../../../data/constants';
import { getFieldOptionConstants, getId } from '../../../../helpers';
import { EInputType } from '../../../../interfaces/input';
import {
    EFieldType,
    IField,
    IFieldConstant,
    IFieldOptions
} from '../../../../interfaces/field';
import { EButtonType } from '../../../../interfaces/interactions';
import { CheckBox, Input, Select } from '../../../form';
import { IconButton } from '../../../interactive';

function Field({
    field,
    onFieldChange,
    onOptChange,
    deleteField
}: {
    field: IField;
    onFieldChange: Function;
    onOptChange: Function;
    deleteField: Function;
}) {
    const [showOptions, setShowOptions] = useState(false);

    /**
     * Toggles whether the current field's options menu is visible
     * @param e Event
     */
    const _toggleOptions = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setShowOptions(prevState => !prevState);
    };

    /**
     * Renders the options' inputs on screen
     * @param key Field type
     * @param opts The selected options for the current field
     * @returns A list of JSX elements
     */
    const _renderOptions = (key: EFieldType, opts: IFieldOptions) => {
        const constants = getFieldOptionConstants(key);

        return constants.map((c: IFieldConstant) => {
            switch (c.type) {
                case EInputType.CHECKBOX: {
                    return (
                        <CheckBox
                            key={getId()}
                            name={c.name}
                            label={c.label}
                            onChange={(name, value) =>
                                onOptChange(field.id, name, value)
                            }
                            // TODO: Fix - this isn't going to work for boolean values
                            value={opts[c.name] || c.value}
                        />
                    );
                }
                case EInputType.DATE: {
                    return (
                        <Input
                            key={getId()}
                            type={EInputType.DATE}
                            name={c.name}
                            label={c.label}
                            onChange={(name, value) =>
                                onOptChange(field.id, name, value)
                            }
                            // TODO: This isn't going to work for falsy values
                            value={opts[c.name] || c.value}
                        />
                    );
                }
                case EInputType.NUMBER: {
                    return (
                        <Input
                            key={getId()}
                            type={EInputType.NUMBER}
                            name={c.name}
                            label={c.label}
                            onChange={(name, value) =>
                                onOptChange(field.id, name, value)
                            }
                            // TODO: This isn't going to work for falsy values
                            value={opts[c.name] || c.value}
                        />
                    );
                }
                case EInputType.SELECT: {
                    return (
                        <Select
                            key={getId()}
                            type={EInputType.NUMBER}
                            name={c.name}
                            label={c.label}
                            onChange={(name, value) =>
                                onOptChange(field.id, name, value)
                            }
                            options={c.options}
                            // TODO: This isn't going to work for falsy values
                            value={opts[c.name] || c.value}
                        />
                    );
                }
                case EInputType.TEXT: {
                    return (
                        <Input
                            key={getId()}
                            type={EInputType.TEXT}
                            name={c.name}
                            label={c.label}
                            onChange={(name, value) =>
                                onOptChange(field.id, name, value)
                            }
                            // TODO: This isn't going to work for falsy values
                            value={opts[c.name] || c.value}
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
