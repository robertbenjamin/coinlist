import React, { Component } from 'react';
import Header from '../Header';
import SearchInput from '../SearchInput';
import CoinList from '../CoinList';
import './App.css';

class App extends Component {
  state = {
    coins: [],
    filteredCoins: [],
    searchText: ''
  }

  async componentDidMount() {
    const request = await fetch('/coins');
    const coins = await request.json();
    this.setState({ coins });
    this.setState({ filteredCoins: coins });
  }

  filterCoins = searchText => {
    const coins = this.state.coins;
    const filteredCoins = coins.filter(coin => {
      return coin.id.toLowerCase().includes(searchText) ||
        coin.symbol.toLowerCase().includes(searchText) ||
        coin.name.toLowerCase().includes(searchText);
    });

    this.setState({ filteredCoins });
  }

  handleSearchInput = (e) => {
    const searchText = e.target.value.toLowerCase();
    this.filterCoins(searchText);
    this.setState({ searchText });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <SearchInput
          searchText={this.state.searchText}
          handleSearchInput={this.handleSearchInput} />
        <CoinList coins={this.state.filteredCoins} />
      </div>
    );
  }
}

export default App;
