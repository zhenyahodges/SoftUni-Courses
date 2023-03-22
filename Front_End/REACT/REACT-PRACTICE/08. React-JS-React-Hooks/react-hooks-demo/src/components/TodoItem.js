import { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { TodoContext } from '../contexts/TodoContext';

export const TodoItem = ({ _id,
     text,
      isCompleted,
       onTodoDelClick
     }) => {

        const name=useContext(TodoContext);

    return (
        <ListGroup.Item action>
           {name} - {text}
            {/* <Button
                variant='dark'
                onClick={onTodoDelClick(_id)}
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                X
            </Button> */}
        </ListGroup.Item>
    );
};
