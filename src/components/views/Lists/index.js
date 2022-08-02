import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { deleteList, getLists } from '../../../api';
import { BUTTON_TYPES } from '../../../data/constants';
import { Card, EmptyText } from '../../display';
import { IconButton, Link } from '../../interactive';

function Lists() {
    const [lists, setLists] = useState(null);

    useEffect(() => {
        setLists(getLists());
    }, []);

    const _onDelete = id => {
        deleteList(id);
        setLists(getLists());
    };

    const renderLists = () => {
        if (lists === null) {
            return <p>Loading....</p>;
        }

        if (!lists.length) {
            return <EmptyText>No Lists</EmptyText>;
        }

        return lists.map(t => (
            <div key={t.id} className="list-row">
                <ListLink to={`/list/${t.id}`}>
                    <span className="title">{t.title}</span>
                    <span className="updated-at">
                        <strong>Last Updated:</strong>{' '}
                        {new Date(t.updatedAt).toDateString()}
                    </span>
                </ListLink>
                <div>
                    <IconButton
                        type={BUTTON_TYPES.DESTRUCTIVE}
                        onClick={() => _onDelete(t.id)}
                        path="delete"
                    />
                </div>
            </div>
        ));
    };

    return (
        <Wrapper>
            <h1>Lists</h1>
            <Card>{renderLists()}</Card>
            <div className="delete-button">
                <Link type={BUTTON_TYPES.AFFIRMATIVE} to="/list/new">
                    New List
                </Link>
            </div>
        </Wrapper>
    );
}

export default Lists;

const Wrapper = styled.section`
    .list-row {
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

const ListLink = styled(RouterLink)`
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
