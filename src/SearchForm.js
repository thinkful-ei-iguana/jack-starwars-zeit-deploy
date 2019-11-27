import React from 'react';
import context from './Context.js'
import Character from './Character.js'


export default class SearchForm extends React.Component {
    static contextType = context;

    state= {
        name: '',
        characters : []
    }

    ChangeName(input) {
        this.setState({
            name: input,
            characters : []
        });
    }

    search(e) {
        console.log('searching')
        e.preventDefault();
        Promise.all([this.apiFetch(this.context.name).then(() => console.log('test' + this.context.characters))]);
        
    }


    apiFetch(input) {
        return fetch("https://swapi.co/api/people/?search=" + input)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then(e => Promise.reject(e))
                }
            })
            .then(resJson => {
                this.context.changeCharacters(resJson.results);
            })
            
    }

    render() {
        return (
            <div className="search-form">
                <form className="search-form" onSubmit={e => this.search(e)}>
                    <input type="text" id="search-name" value={this.context.name} onChange={e => this.context.changeName(e.target.value)} required />
                    <button type="submit" >Search</button>
                </form>
            </div>
        )
    }
}