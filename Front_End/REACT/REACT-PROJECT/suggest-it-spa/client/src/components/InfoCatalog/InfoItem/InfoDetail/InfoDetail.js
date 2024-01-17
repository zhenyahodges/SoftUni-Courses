import { useLoaderData, useNavigate } from 'react-router-dom';
import { deleteInfo, getInfo } from '../../../../services/infoCatalogService';
import PrintButton from '../../../Buttons/PrintButton/PrintButton';
import EmailBtn from '../../../Buttons/EmailBtn/EmailBtn';
import DeleteBtn from '../../../Buttons/DeleteBtn/DeleteBtn';
import RenderLink from '../../../RenderLink/RenderLink';

export async function loader({ params }) {
    const res = await getInfo(params.infoId);
    return res;
}

export default function InfoDetail() {
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
            await deleteInfo(token, infoId);
            navigate(-1);
        }
    };

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
                                <PrintButton />
                                <EmailBtn />

                                {isAuthorized && isOwner && (
                                    <>
                                        <RenderLink
                                            to={`/infos/${infoId}/edit`}
                                            classN={
                                                'btn-sm card-details edit-card'
                                            }
                                            text={'Edit'}
                                        />

                                        <DeleteBtn
                                            to={'/'}
                                            onClick={onDelete}
                                            action={'Loading'}
                                            text={'Delete'}
                                        />
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
