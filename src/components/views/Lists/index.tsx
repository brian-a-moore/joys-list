import { useEffect, useState } from "react";
import { deleteList, getLists } from "../../../api";
import { getDate } from "../../../helpers";
import { EButtonType } from "../../../interfaces/interactions";
import { IList } from "../../../interfaces/list";
import { Card, EmptyText } from "../../display";
import { IconButton, Link } from "../../interactive";
import { ListLink, Wrapper } from "./style";

function Lists() {
  const [lists, setLists] = useState<IList[] | null>(null);

  useEffect(() => {
    setLists(getLists());
  }, []);

  const _onDelete = (id: string) => {
    deleteList(id);
    setLists(getLists());
  };

  return (
    <Wrapper>
      <h1>Lists</h1>
      <Card>
        {lists === null ? (
          <p> Loading...</p>
        ) : !lists.length ? (
          <EmptyText>No Lists</EmptyText>
        ) : (
          <>
            {lists.map((l) => (
              <div key={l.id} className="list-row">
                <ListLink to={`/list/${l.id}`}>
                  <p className="title">{l.title}</p>
                  {l.updatedAt && (
                    <p className="updated-at">
                      <strong>Updated:</strong> {getDate(l.updatedAt)}
                    </p>
                  )}
                </ListLink>
                <IconButton
                  type={EButtonType.DESTRUCTIVE}
                  onClick={() => _onDelete(l.id)}
                  path="delete"
                />
              </div>
            ))}
          </>
        )}
      </Card>
      <div style={{ float: "right" }}>
        <Link type={EButtonType.AFFIRMATIVE} to="/list/new">
          New List
        </Link>
      </div>
    </Wrapper>
  );
}

export default Lists;
