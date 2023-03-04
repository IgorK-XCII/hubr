import { useDispatch } from 'react-redux';
import { RootReducer } from '../types/RootReducer';

export const useAppDispatch = useDispatch<RootReducer>;
