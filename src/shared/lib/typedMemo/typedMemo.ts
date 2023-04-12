import { FC, memo } from 'react';

export const typedMemo: <T extends FC<any>>(component: T) => T = memo;
