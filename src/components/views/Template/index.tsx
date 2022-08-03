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
import {
    DEFAULT_FIELD,
    DEFAULT_OPTS,
    DEFAULT_TEMPLATE
} from '../../../data/constants';
import { getId } from '../../../helpers';
import { InputValue } from '../../../interfaces/input';
import { EButtonTypes } from '../../../interfaces/interactions';
import { ITemplateBase, ITemplate } from '../../../interfaces/template';
import Field from './Field';

function Template() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isNewTemplate = id && id === 'new';

    const [template, setTemplate] = useState<ITemplateBase | ITemplate | null>(
        null
    );

    useEffect(() => {
        if (!isNewTemplate) {
            setTemplate(getTemplate(id as string));
        } else {
            const id: string = getId();

            setTemplate(DEFAULT_TEMPLATE(id));
        }
    }, [isNewTemplate, id]);

    const _addField = (e: React.FormEvent<HTMLInputElement></HTMLInputElement>) => {
        e.preventDefault();

        setTemplate(prevState => ({
            ...prevState,
            fields: [...prevState.fields, DEFAULT_FIELD(getId())]
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
            fields.find(f => f.id === id)[name] = value;
            if (name === 'fieldType') {
                fields.find(f => f.id === id).opts = DEFAULT_OPTS[value];
            }
            return { ...prevState, fields };
        });
    };

    const _onSubmit = () => {
        try {
            if (isNewTemplate) {
                createTemplate({
                    id: getId(),
                    ...template
                });
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
                                type={EButtonTypes.DESTRUCTIVE}
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
                            addField={_addField}
                        />
                    ))}
                </section>
                <aside>
                    <Button onClick={_addField}>Add Field</Button>
                    <Button onClick={_onCancel}>Cancel</Button>
                    <Button type={EButtonTypes.AFFIRMATIVE}>
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
