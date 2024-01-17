import { Form } from 'react-router-dom';

export default function ProfileUser(user) {
    const profUser = user.props;

    return (
        <Form method='get' id='prof-form' className='prof form'>
            <div className='user-details'>
                <div className='wrap fname'>
                    <label htmlFor='prof-fname' className='prof lbl fname'>
                        First Name
                    </label>
                    <input
                        type='text'
                        className='prof entry fname'
                        name='prof-fname'
                        id='prof-fname'
                        value={profUser.fname}
                        readOnly
                        disabled
                    />
                </div>
                <div className='wrap lname'>
                    <label htmlFor='prof-lname' className='prof lbl lname'>
                        Last Name
                    </label>
                    <input
                        type='text'
                        className='prof entry lname'
                        name='prof-lname'
                        id='prof-lname'
                        value={profUser.lname}
                        readOnly
                        disabled
                    />
                </div>
                <div className='wrap email'>
                    <label htmlFor='prof-email' className='prof lbl email'>
                        Email
                    </label>
                    <input
                        type='email'
                        className='prof entry email'
                        name='prof-email'
                        id='prof-email'
                        value={profUser.email}
                        readOnly
                        disabled
                    />
                </div>
            </div>
        </Form>
    );
}
