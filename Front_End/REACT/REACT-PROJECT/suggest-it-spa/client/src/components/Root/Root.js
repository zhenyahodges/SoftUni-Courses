import { Outlet, useLoaderData } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';

export async function loader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        return user;
    } else {
        return null;
    }
}

export default function Root() {
    const user = useLoaderData();

    let userId;
    if (user) {
        userId = user.userId;
    }

    return (
        <>
            <Header props={userId} />
            <main className='page main'>
                <section className='page main container'>
                    <Outlet />
                </section>
            </main>
            <Footer />
        </>
    );
}
