import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <section className='404 window'>
            <>
                {/* <h2 className='404 title'>Page Not Found</h2> */}
                <h2 className='404 title'>Something isn't right...</h2>
                <Link
                    to='/'
                    style={{
                        fontWeight: 'bold',
                        color: '#F79234',
                        textShadow: '1px 1px 1px #132930',
                    }}
                >
                    BACK HOME
                </Link>
            </>
        </section>
    );
};
