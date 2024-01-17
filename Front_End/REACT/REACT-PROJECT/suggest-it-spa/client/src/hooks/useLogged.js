import { useContext } from 'react';
import { LoggedContext } from '../context/LoggedContext';

export function useLogged() {
    return useContext(LoggedContext);
}