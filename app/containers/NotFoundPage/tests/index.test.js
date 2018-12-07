import React from 'react';
import ReactDOM from 'react-dom';
import NotFoundPage from '../index';

describe('renders <NotFoundPage /> components', () => {
  it('should render an <h1> tag', () => {
    const h1 = document.createElement('h1');
    ReactDOM.render(<NotFoundPage />, h1);
    ReactDOM.unmountComponentAtNode(h1);
  });
});
