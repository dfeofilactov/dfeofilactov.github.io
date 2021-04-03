import React from 'react';
import { screen } from '@testing-library/dom';
import Layout from '../Layout';
import { render } from '~/core/utils/testUtils';

describe('<Layout />', () => {
  it('Component should contain menu', () => {
    render(<Layout />);
    screen.debug();
  });
});
