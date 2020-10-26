import { RootState } from 'store/configure';

// Hardcoded since data are mocked and there is no way to verify current user
export const currentUserSelector = (state: RootState) => state.contacts['fc040da3-bf70-4017-b7c6-cef64b6c1708'];
