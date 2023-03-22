import {ListGroup} from 'react-bootstrap';


export const TodoList = () => {
    return (
      <div style={{width:'30%', margin:'0 auto'}}>
        <h1 style={{textAlign: 'center'}}>To Do List</h1>
          <ListGroup>
            <ListGroup.Item action>List</ListGroup.Item>
            <ListGroup.Item action>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item action>Morbi leo risus</ListGroup.Item>
        </ListGroup>
      </div>      
    );
};
