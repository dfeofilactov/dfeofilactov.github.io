import React, { FC, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

const AllTheProviders: FC = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export { customRender as render };
