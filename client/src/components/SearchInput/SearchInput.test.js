import React from 'react';
import SearchInput from '../SearchInput';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<SearchInput />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
