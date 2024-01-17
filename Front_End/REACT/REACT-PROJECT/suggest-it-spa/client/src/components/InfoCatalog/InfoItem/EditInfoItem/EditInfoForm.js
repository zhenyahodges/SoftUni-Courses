import { Form, useNavigation } from 'react-router-dom';

export default function EditInfoForm(props) {
    const navigation = useNavigation();
    return (
        <Form
            method='put'
            id='edit-info-form'
            className='create-card form edit'
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
                    defaultValue={props.title}
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
                    defaultValue={props.web}
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
                    form='edit-info-form'
                    name='text'
                    rows='4'
                    cols='50'
                    maxLength='300'
                    placeholder='Type your text here'
                    defaultValue={props.text}
                    required
                ></textarea>
            </div>
            {/* LATER--CODE */}

            {/* <!-- <div className="wrap card-timeout">
          <label
              htmlFor="card-timeout"
              className="lbl card-timeout"
              >End Date</label
          >
          <input
              type="date"
              className="card-timeout"
              name="card-timeout"
              id="card-timeout"
              min="2023-03-20"
              max="2023-06-20"
            //   value="2023-03-01"
              required
          />
      </div> --> */}

            <button
                // type='submit'
                // method='post'
                // value='Create'
                className='create btn dark subm'
                form='edit-info-form'
                id='btn-edit-form'
                disabled={navigation.state === 'submitting'}
            >
                {navigation.state === 'submitting'
                    ? 'Submitting ...'
                    : 'Submit'}
            </button>
        </Form>
    );
}
