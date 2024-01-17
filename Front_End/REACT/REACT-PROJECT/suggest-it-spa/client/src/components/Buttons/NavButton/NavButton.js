import { useNavigate, useNavigation } from 'react-router-dom';


export default function NavButton({path, classBtn, id, name }) {
    const navigate = useNavigate();
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <button
            onClick={() => navigate(path)}
            className={classBtn}
            id={id}
            disabled={isLoading}
        >
            {isLoading ? 'Loading...' : name}
        </button>
    );
}
