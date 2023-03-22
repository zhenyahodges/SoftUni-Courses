import {ListGroup,Button} from 'react-bootstrap';
import { TodoItem } from './TodoItem';


export const TodoList = ({
  todos,
  onTodoAddClick,
  onTodoDelClick,
}) => {
    return (
      <div style={{width:'30%', margin:'0 auto'}}>
        <h1 style={{textAlign: 'center'}}>To Do List</h1>
          <ListGroup>
           {todos.map(x=><TodoItem key ={x._id} {...x}
          //  onTodoDelClick={onTodoDelClick}
           />)}
        </ListGroup>
        <Button variant="primary" onClick={onTodoAddClick}>Add</Button>

      </div>      
    );
};
