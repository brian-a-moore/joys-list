import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { deleteList, getLists } from '../../../api';
import { Card, EmptyText } from '../../display';
import { IconButton, Link } from '../../interactive';
import { EButtonTypes } from '../../../interfaces/interactions';
import { IList } from '../../../interfaces/list';

function Lists() {
    const [lists, setLists] = useState<IList[] | null>(null);

    useEffect(() => {
        setLists(getLists());
    }, []);

    const _onDelete = (id: string) => {
        deleteList(id);
        setLists(getLists());
    };

    const renderLists = (): JSX.Element[] | JSX.Element | Element => {
        if (lists === null) {
            return <p>Loading....</p>;
        }

        if (!lists.length) {
            return <EmptyText>No Lists</EmptyText>;
        }

        return lists.map(l => (
            <div key={l.id} className="list-row">
                <ListLink to={`/list/${l.id}`}>
                    <span className="title">{l.title}</span>
                    <span className="updated-at">
                        <strong>Last Updated:</strong>{' '}
                        {new Date(l.updatedAt).toDateString()}
                    </span>
                </ListLink>
                <div>
                    <IconButton
                        type={EButtonTypes.DESTRUCTIVE}
                        onClick={() => _onDelete(l.id)}
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
                <Link type={EButtonTypes.AFFIRMATIVE} to="/list/new">
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
