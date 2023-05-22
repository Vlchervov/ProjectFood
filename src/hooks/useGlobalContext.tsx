import { useContext } from 'react';
import GlobalContext from '../context/global/globalContext';

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}