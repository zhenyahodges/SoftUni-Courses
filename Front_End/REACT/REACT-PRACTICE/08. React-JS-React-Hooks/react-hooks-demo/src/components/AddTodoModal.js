import { Modal, Button, Form } from 'react-bootstrap';

export const AddTodoModal = () => {
    return (
        <Modal show={true}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>To Do</Form.Label>
                        <Form.Control type='text' placeholder='Enter todo' />    
                    </Form.Group>
                   
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='secondary'>Close</Button>
                <Button variant='primary'>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
};
