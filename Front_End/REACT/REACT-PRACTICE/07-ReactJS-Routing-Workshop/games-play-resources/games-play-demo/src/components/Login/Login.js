// import { useContext } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
// import { withAuth } from '../../hoc/withAuth';
import { useForm } from '../../hooks/useForm';

export const Login = (
    // {
    //     // auth,        
    // }
) => {
    // const{onLoginSubmit}=auth;

    // const { onLoginSubmit } = useContext(AuthContext);
    const { onLoginSubmit } = useAuthContext();

    const { values, changeHandler, onSubmit } = useForm(
        {
            email: '',
            password: '',
        },
        onLoginSubmit,
    );

    return (
        //   {/* <!-- Login Page ( Only for Guest users ) --> */}
        <section id='login-page' className='auth'>
            <form id='login' method='POST' onSubmit={onSubmit}>
                <div className='container'>
                    <div className='brand-logo'></div>
                    <h1>Login</h1>

                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Sokka@gmail.com'
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <label htmlFor='login-pass'>Password:</label>
                    <input
                        type='password'
                        id='login-password'
                        name='password'
                        value={values.password}
                        onChange={changeHandler}
                    />

                    <input type='submit' className='btn submit' value='Login' />
                    <p className='field'>
                        <span>
                            If you don't have profile click{' '}
                            <Link to='/register'>here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
};

// export na hoc...
// export default withAuth(Login);
