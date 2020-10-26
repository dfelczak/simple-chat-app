import { useDispatch } from 'react-redux';

import { store } from 'store/configure';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
