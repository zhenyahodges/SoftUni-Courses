import {
    Link,
    useLoaderData,
    useNavigate,
    useNavigation,
} from 'react-router-dom';
import { getInfos, onDeleteInfo } from '../../../../utils/infoCatalogService';
import { EmailShareButton } from 'react-share';

export async function loader({ params }) {
    const res = await getInfos(params.infoId);
    return res;
}

export default function InfoDetail() {
    const navigation = useNavigation();
    const navigate = useNavigate();
    const res = useLoaderData();

    const ownerId = res._ownerId;
    const infoId = res._id;
    const title = res.title;
    const web = res.web;
    const text = res.text;

    const user = JSON.parse(localStorage.getItem('user'));

    let userId;
    let token;
    if (user) {
        ({ token, userId } = user);
    }

    const isOwner = ownerId === userId;
    const isAuthorized = Boolean(token);

    const onDelete = async () => {
        if (window.confirm('Are you sure you want to submit?')) {
            await onDeleteInfo(infoId, token);
            navigate(-1);
        }
    };

    function onPrint(e) {
        e.preventDefault();
        window.print();
        return false;
    }

    return (
        //  DETAILS vis for all
        <section className='details-view container'>
            <h2>Details</h2>
            {
                <article className='sugg-card details detailed-card'>
                    <header className='card-header details-header'>
                        <h5 className='brand'>{title}</h5>
                    </header>

                    <main className='card-main'>
                        <p>{web}</p>
                        <p>{text}</p>
                    </main>

                    <footer className='card-footer sugg-card foot'>
                        <div className='card-footer-content'>
                            <div className='card-footer-links-wrapper'>
                                <Link
                                    to='/'
                                    className='print details'
                                    onClick={onPrint}
                                >
                                    Print
                                </Link>
                                <EmailShareButton>
                                    <span className='print details'>Email</span>
                                </EmailShareButton>

                                {isAuthorized && isOwner && (
                                    <>
                                        <Link
                                            to={`/infos/${infoId}/edit`}
                                            className='btn-sm card-details edit-card'
                                            disabled={
                                                navigation.state === 'loading'
                                            }
                                        >
                                            {navigation.state === 'loading'
                                                ? 'Loading...'
                                                : 'Edit'}
                                        </Link>
                                        <button
                                            to='/'
                                            className='btn-sm card-details delete-card'
                                            onClick={onDelete}
                                            disabled={
                                                navigation.state === 'loading'
                                            }
                                        >
                                            {navigation.state === 'loading'
                                                ? ':Loading...'
                                                : 'Delete'}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </footer>
                </article>
            }
        </section>
    );
}
