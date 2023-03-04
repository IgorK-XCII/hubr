import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { DeepPartial } from '@reduxjs/toolkit';
import { i18nForTest } from '@/shared/config/i18n/i18nForTests';
import { RootState, StoreProvider } from '@/app/providers';

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<RootState>
}

export const componentRender = (
  component: ReactNode,
  { route = '/', initialState }: ComponentRenderOptions = {},
) => render(
  <StoreProvider initialState={initialState as RootState}>
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
  </StoreProvider>
  ,
);
