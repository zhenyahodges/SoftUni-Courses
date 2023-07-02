import { Form, useNavigation } from 'react-router-dom';

export default function EditCardItemForm(props) {
    const navigation = useNavigation();
    return (
        <Form
            method='put'
            id='edit-card-form'
            className='create-card form edit'
        >
            <div className='wrap card-title'>
                <label htmlFor='brand' className='lbl card-name'>
                    Feedback Form Title / Brand
                </label>
                <input
                    type='text'
                    className='card-name'
                    name='brand'
                    id='brand'
                    placeholder='Enter title'
                    minLength='3'
                    maxLength='30'
                    defaultValue={props.brand}
                    autoFocus
                    required
                />
            </div>
            {/* LATER--CODE */}
            {/* <div className='wrap card-code'>
            <label htmlFor='card-code' className='lbl card-code'>
                Create Code
            </label>
            <!-- ?!POLL-ID?! -->
            <input
                type='text'
                className='card-code'
                name='card-code'
                id='card-code'
                minLength='6'
                maxLength='6'
                placeholder='Create form code'
                required
            />
        </div> */}
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
                className='create btn dark subm'
                form='edit-card-form'
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
