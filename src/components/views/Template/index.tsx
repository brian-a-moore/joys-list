import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
    getTemplate,
    createTemplate,
    deleteTemplate,
    updateTemplate
} from '../../../api';
import { Input } from '../../form';
import { Button, IconButton } from '../../interactive';
import { DEFAULT_TEMPLATE } from '../../../data/constants';
import {
    getDefaultField,
    getDefaultFieldOptions,
    getId
} from '../../../helpers';
import { InputValue } from '../../../interfaces/input';
import { EButtonType } from '../../../interfaces/interactions';
import { ITemplate } from '../../../interfaces/template';
import Field from './Field';

function Template() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isNewTemplate = id && id === 'new';

    const [template, setTemplate] = useState<ITemplate>(DEFAULT_TEMPLATE);

    useEffect(() => {
        if (!isNewTemplate) {
            const fetchedTemplate = getTemplate(id as string);

            if (fetchedTemplate) {
                setTemplate(fetchedTemplate);
            }
        }
    }, [isNewTemplate, id]);

    const _addField = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        setTemplate(prevState => ({
            ...prevState,
            fields: [...prevState.fields, getDefaultField(getId())]
        }));
    };

    const _deleteField = (id: string) => {
        setTemplate(prevState => ({
            ...prevState,
            fields: [...prevState.fields].filter(f => f.id !== id)
        }));
    };

    const _deleteTemplate = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        deleteTemplate(id || template.id);
        navigate(-1);
    };

    const _onCancel = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        navigate(-1);
    };

    const _onChange = (name: string, value: InputValue) => {
        setTemplate(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const _onFieldChange = (id: string, name: string, value: InputValue) => {
        setTemplate(prevState => {
            const fields = [...prevState.fields];
            const index = fields.findIndex(f => f.id === id);

            console.log(id, name, value);

            if (index > -1) {
                // Update the field value
                fields[index] = {
                    ...fields[index],
                    [name]: value
                };

                // Set default field options if the value changed was the field type
                if (name === 'fieldType') {
                    fields[index].opts = getDefaultFieldOptions(value);
                }
            }

            return { ...prevState, fields };
        });
    };

    const _onSubmit = () => {
        try {
            if (isNewTemplate) {
                createTemplate(template);
            } else {
                updateTemplate(template);
            }

            navigate('/templates');
        } catch (e: any | unknown) {
            alert(e.message);
        }
    };

    if (template === null) {
        return <Wrapper> Loading... </Wrapper>;
    }

    return (
        <Wrapper>
            <h1>{isNewTemplate ? 'New ' : 'Update '}Template</h1>

            <form onSubmit={_onSubmit}>
                <main>
                    <Input
                        type="text"
                        onChange={_onChange}
                        name="title"
                        placeholder="Template Title"
                        value={template.title}
                    />
                    {!isNewTemplate && (
                        <div className="delete-template">
                            <IconButton
                                type={EButtonType.DESTRUCTIVE}
                                path="delete"
                                onClick={_deleteTemplate}
                            />
                        </div>
                    )}
                </main>
                <section>
                    <h4>Fields</h4>
                    {template.fields.map(field => (
                        <Field
                            key={field.id}
                            field={field}
                            onFieldChange={_onFieldChange}
                            deleteField={_deleteField}
                        />
                    ))}
                </section>
                <aside>
                    <Button onClick={_addField}>Add Field</Button>
                    <Button onClick={_onCancel}>Cancel</Button>
                    <Button type={EButtonType.AFFIRMATIVE}>
                        {isNewTemplate ? 'Create ' : 'Update '} Template
                    </Button>
                </aside>
            </form>
        </Wrapper>
    );
}

export default Template;

const Wrapper = styled.section`
    .delete-template {
        float: left;
        margin: 0 0 0 1rem;
    }

    main {
        float: left;
        width: 100%;
        margin: 0 0 1rem 0;
    }
`;
