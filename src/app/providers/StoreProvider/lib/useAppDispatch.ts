import { useDispatch } from 'react-redux';
import { RootDispatch } from '../types';

export const useAppDispatch = useDispatch<RootDispatch>;
