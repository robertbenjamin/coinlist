import React from 'react';
import CoinList from '../CoinList';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const coins = [
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' },
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC' }
  ];

  const tree = renderer
    .create(<CoinList coins={coins} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
