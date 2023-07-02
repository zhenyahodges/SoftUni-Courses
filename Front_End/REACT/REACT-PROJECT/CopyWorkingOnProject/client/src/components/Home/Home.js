import { useActionData, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import Welcome from './Welcome/Welcome';




export default function Home() {
    const navigate = useNavigate();
    const navigation = useNavigation();

    const message = useLoaderData();
    const errorMessage = useActionData();

    return (
        <section className='welcome window'>
             {message && <h3 style={{ color: 'red' }}>{message}</h3>}
            {errorMessage && <h3 style={{ color: 'red' }}>{errorMessage}</h3>}
                 {/*  <!-- WELCOME --> */}
            <Welcome />


            {/* <!-- SAMPLE  --> */}
            {/* <section className='sample content'>
                <h4 className='samples-title'>Sample</h4>

                <div className='samples wrapper'>                  
                    <Sample />                    
                </div>
            </section> */}

            <div className='more'>
                <button
                    onClick={() => navigate('cards')}
                    className='btn highlight catalog'
                    id='catalog-btn'
                    disabled={navigation.state === 'loading'}
                >
                    {navigation.state === 'loading' ? ':Loading...' : 'Catalog'}
                </button>
            </div>
        </section>
    );
}
