export default function Sample() {
    return (
        <article className='sugg-card sample'>
            <header className='card-header  suggestit-brand'>
                <h5 className='brand logo-line'>
                    Suggest<span className='suggest-it'>It</span>
                </h5>
            </header>

            <main className='card-main'>
                <ul className='sugg-list'>
                    {/* <!-- LIST items start --> */}

                    {/* <!-- li start --> */}
                    <li className='sugg-item'>
                        <div className='sugg-item-wrapper'>
                            <p className='sugg-text'>
                                {/* <span className='author-nickname'>
                                                Me
                                            </span> */}
                                Improve this project
                            </p>

                            <p className='sugg-ranking'>
                                <span className='rank'>15</span>
                                <span className='sugg-like-link'>
                                    <i className='like fa-solid fa-circle-up'></i>
                                </span>
                            </p>
                        </div>
                    </li>
                    {/* <!-- li end --> */}

                    {/* <!-- li start --> */}
                    <li className='sugg-item'>
                        <div className='sugg-item-wrapper'>
                            <p className='sugg-text'>
                                <span className='author-nickname'>Me</span>
                                Add more features
                            </p>
                            <p className='sugg-ranking'>
                                <span className='rank'>10</span>
                                <span className='sugg-like-link'>
                                    <i className='like fa-solid fa-circle-up'></i>
                                </span>
                            </p>
                        </div>
                    </li>
                    {/* <!-- li end --> */}

                    {/* <!-- li start --> */}
                    <li className='sugg-item'>
                        <div className='sugg-item-wrapper'>
                            <p className='sugg-text'>
                                <span className='author-nickname'>Me</span>
                                Add more pages
                            </p>
                            <p className='sugg-ranking'>
                                <span className='rank'>5</span>
                                <span href='/' className='sugg-like-link'>
                                    <i className='like fa-solid fa-circle-up'></i>
                                </span>
                            </p>
                        </div>
                    </li>
                    {/* <!-- li end --> */}

                    {/* <!-- LISTitems --> */}
                </ul>
            </main>

            <footer className='card-footer suggs-card foot'>
                <div className='card-footer-content'>
                    <p className='card-footer-text'>
                        Thank you for your contributions!
                    </p>
                </div>
            </footer>
        </article>
    );
}
