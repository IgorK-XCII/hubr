import { PROJECT } from '@/shared/types';

export const isStorybookMode = () => __PROJECT__ === PROJECT.STORYBOOK;
