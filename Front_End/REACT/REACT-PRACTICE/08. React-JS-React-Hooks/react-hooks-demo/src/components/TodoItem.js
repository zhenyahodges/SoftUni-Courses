import { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { TodoContext } from '../contexts/TodoContext';

export const TodoItem = ({ 
    _id,
     text,
      isCompleted,
     }) => {

        const {onTodoDelClick,onToDoClick}=useContext(TodoContext);

    return (
        <ListGroup.Item action style={{ display: 'flex', justifyContent: 'space-between' }}>
           <p style={{textDecoration: isCompleted ? 'line-through' : 'none'}} onClick={()=>onToDoClick(_id)}>{text}</p>
            <Button
                variant='dark'
                onClick={()=>onTodoDelClick(_id)}>
                X
            </Button>
        </ListGroup.Item>
    );
};
