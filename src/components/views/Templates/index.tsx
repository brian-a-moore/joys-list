import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { deleteTemplate, getTemplates } from '../../../api';
import { EButtonTypes } from '../../../interfaces/interactions';
import { ITemplate } from '../../../interfaces/template';
import { Card, EmptyText } from '../../display';
import { IconButton, Link } from '../../interactive';

function Templates() {
    const [templates, setTemplates] = useState<ITemplate[] | null>(null);

    useEffect(() => {
        setTemplates(getTemplates());
    }, []);

    const _onDelete = (id: string) => {
        deleteTemplate(id);
        setTemplates(getTemplates());
    };

    const renderTemplates = (): JSX.Element[] | JSX.Element | Element => {
        if (templates === null) {
            return <p>Loading....</p>;
        }

        if (!templates.length) {
            return <EmptyText>No Templates</EmptyText>;
        }

        return templates.map(t => (
            <div key={t.id} className="template-row">
                <TemplateLink to={`/template/${t.id}`}>
                    <span className="title">{t.title}</span>
                    <span className="updated-at">
                        <strong>Last Updated:</strong>{' '}
                        {new Date(t.updatedAt).toDateString()}
                    </span>
                </TemplateLink>
                <div>
                    <IconButton
                        type={EButtonTypes.DESTRUCTIVE}
                        onClick={() => _onDelete(t.id)}
                        path="delete"
                    />
                </div>
            </div>
        ));
    };

    return (
        <Wrapper>
            <h1>Templates</h1>
            <Card>{renderTemplates()}</Card>
            <div className="delete-button">
                <Link type={EButtonTypes.AFFIRMATIVE} to="/template/new">
                    New Template
                </Link>
            </div>
        </Wrapper>
    );
}

export default Templates;

const Wrapper = styled.section`
    .template-row {
        float: left;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .delete-button {
            float: left;
            width: 2rem;
            height: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
`;

const TemplateLink = styled(RouterLink)`
    float: left;
    padding: 0.5rem 1rem;
    width: calc(100% - 2rem);
    color: var(--gray-600);
    text-decoration: none;
    border-radius: 4px;

    &:hover {
        background: var(--gray-200);
    }

    .title {
        float: left;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .updated-at {
        width: 100%;
        font-size: 0.6rem;

        strong {
            font-weight: 600;
        }
    }
`;
