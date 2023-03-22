import { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { TodoContext } from '../contexts/TodoContext';

export const TodoItem = ({ 
    _id,
     text,
      isCompleted,
     }) => {

        const {onTodoDelClick}=useContext(TodoContext);

    return (
        <ListGroup.Item action style={{ display: 'flex', justifyContent: 'space-between' }}>
           {text}
            <Button
                variant='dark'
                onClick={()=>onTodoDelClick(_id)}>
                X
            </Button>
        </ListGroup.Item>
    );
};
