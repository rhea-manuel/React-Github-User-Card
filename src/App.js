import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

import Axios from 'axios'
import FollowerCard from './components/FollowerCard';

class App extends React.Component {

  constructor() {
    super()
  }

  componentDidMount() {
    Axios.get("https://api.github.com/users/rhea-manuel")
      .then((response) => {

        const data = response.data
        console.log(data)
        this.setState({
          avatar_url: data.avatar_url,
          name: data.name,
          url: data.url,
          login:data.login,
          followers: data.followers,
          following: data.following,
          followers_url: data.followers_url
        })
      })

      .then(() => {
        Axios.get(this.state.followers_url)
          .then((response) => {
            console.log(response.data)
            this.setState({
              ...this.state,
              followers_data: response.data
            })
          })
      })

      .catch((error) => { console.log(error) })
  }

  renderFollowers = () => {
  }

  render() {
    if (this.state && this.state.followers_data) {
      return (
        <section>
          <Card user={this.state}></Card>
          <h2 className="title">Followers</h2>
          <section className="followers">{
            this.state.followers_data.map((element, index) => {
              return (<FollowerCard key={index} user={element}></FollowerCard>)
            })
          }</section>
        </section>
      )
    }

    return (
      <span>Loading...</span>
    )

  }

}

export default App;
