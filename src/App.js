import React from 'react';
import logo from './logo.svg';
import './App.css';

import allContacts from './contacts.json'

import Contact from './Contact'

import _ from 'lodash'

class App extends React.Component {

  state = {
    contactsArr: [{
      "name": "Idris Elba",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
      "popularity": 11.622713,
      "id": "11731993-0604-4bee-80d5-67ad845d0a38"
    },
    {
      "name": "Johnny Depp",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
      "popularity": 15.656534,
      "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
    },
    {
      "name": "Monica Bellucci",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
      "popularity": 16.096436,
      "id": "0ad5e441-3084-47a1-9e9b-b917539bba71"
    }]
  }

  clickHandler = () => {

    // let randomPosition = Math.floor(Math.random() * allContacts.length)
    // let randomContact = allContacts[randomPosition]

    let randomContact = _.sample(allContacts)

    // let newArr = [...this.state.contactsArr]
    // newArr.push(randomContact)

    let newArr = this.state.contactsArr.concat(randomContact)

    this.setState({
      contactsArr: newArr
    })
  }

  removeOneContact = (id) => {

    let newArr = this.state.contactsArr.filter((c) => c.id !== id)

    this.setState({
      contactsArr: newArr
    })
  }

  render() {

    return (
      <div>
        <button onClick={this.clickHandler}>Add Random</button>
        {this.state.contactsArr.map((c) => <Contact removeContact={this.removeOneContact} key={c.id} id={c.id} picture={c.pictureUrl} name={c.name} popularity={c.popularity}></Contact>)}
      </div>
    );

  }

}

export default App;
