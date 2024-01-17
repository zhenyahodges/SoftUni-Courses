import { Form } from 'react-router-dom';
import SubmitBtn from '../../Buttons/SubmitBtns/SubmitBtn';

export default function CreateInfoForm() {   
    return (
        <Form method='post' id='create-info-form' className='create-card form'>
            <div className='wrap card-title'>
                <label htmlFor='title' className='lbl card-name'>
                    Title
                </label>
                <input
                    type='text'
                    className='card-name'
                    name='title'
                    id='title'
                    placeholder='Enter title'
                    minLength='3'
                    maxLength='30'
                    autoFocus
                    required
                />
            </div>
            <div className='wrap card-title'>
                <label htmlFor='web' className='lbl card-name'>
                    Website
                </label>
                <input
                    type='text'
                    className='card-name'
                    name='web'
                    id='web'
                    pattern='^((https?|ftp|smtp):\/\/)?(www.)[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$'
                    placeholder='www.example.com'
                    minLength='3'
                    maxLength='30'
                    required
                />
            </div>
            <div className='wrap card-title'>
                <label htmlFor='text' className='lbl card-name'>
                    Text
                </label>
                <textarea
                    className='sugg-text-add'
                    id='text'
                    form='create-info-form'
                    name='text'
                    rows='4'
                    cols='50'
                    maxLength='300'                    
                    placeholder='Type your text here'
                    required
                ></textarea>
            </div>
            <SubmitBtn
                className='create'
                form='create-info'
                id='info'
                text='Submit'
            />
        </Form>
    );
}
