import { Link, useNavigation } from 'react-router-dom';

export default function RenderLink({to, classN, text}) {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <Link
            to={to}
            className={classN}
            disabled={isLoading}
        >
            {isLoading ? 'Loading..' : text}
        </Link>
    );
}