import React from 'react';
import './App.css';
import context from './Context.js'
import CharacterList from './CharacterList.js'
import SearchForm from './SearchForm';


class App extends React.Component {
  static contextType = context;

  state = {
    name: '',
    characters: []
  }

  changeName = (input) =>{
    this.setState({
      name: input,
      characters: this.state.characters
    });
  }

  handleChangeCharacters= (input) =>{
    this.setState({
      name: this.state.name,
      characters: input
    });
  }

  

  render() {
    const value = {
      name : this.state.name,
      characters: this.state.characters,
      changeName: this.changeName,
      changeCharacters: this.handleChangeCharacters
    }
    return (
      <context.Provider value={value}>
        <div className="App">
          <SearchForm />
          <CharacterList />
        </div>
      </context.Provider>
    )
  }
}

export default App;
