import React from 'react';
import Character from './Character'
import context from './Context'

export default class CharacterList extends React.Component {
    static contextType = context;

    getCharList() {
    
      let result = this.context.characters.map(character => {
        return (<Character name={character.name} />)
      })
      return result;
  }

    render() {
        console.log(this.context);
        return (
            <div className="character-list" >
                <ul>
                    {this.getCharList()}
                </ul>        
            </div>
        )
    }
}