import { useDispatch } from 'react-redux';
import { RootDispatch } from '@/app/providers';

export const useAppDispatch = useDispatch<RootDispatch>;
