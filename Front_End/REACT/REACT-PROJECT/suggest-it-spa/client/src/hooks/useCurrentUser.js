import { useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

export function useCurrentUser() {
    return useContext(CurrentUserContext);
}
