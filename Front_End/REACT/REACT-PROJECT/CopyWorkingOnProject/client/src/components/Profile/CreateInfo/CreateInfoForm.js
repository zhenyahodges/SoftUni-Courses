import { Form, useNavigation } from 'react-router-dom';

export default function CreateInfoForm(){
    const navigation = useNavigation();
    return(
        <Form
        method='post'
        id='create-info-form'
        className='create-card form'
    >
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
                pattern='((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w\-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)'
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
        
        <button
            className='create btn dark subm'
            form='create-info-form'
            id='btn-info-form'
            disabled={navigation.state === 'submitting'}
        >
            {navigation.state === 'submitting'
                ? 'Submitting ...'
                : 'Submit'}
        </button>
    </Form>
    );
}