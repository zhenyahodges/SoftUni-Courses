import { useNavigation } from 'react-router-dom';

export default function DeleteBtn({ to, onClick, action, text }) {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <button
            to={to}
            className='btn-sm card-details delete-card'
            onClick={onClick}
            disabled={isLoading}
        >
            {isLoading ?'Loading..' : text}
        </button>
    );
}
