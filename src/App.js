import './App.css';
import React from 'react'
import Card from './Card'
import FollowerList from './FollowerList';

import Axios from 'axios'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      followerList: [
        {
          name: 'Human',
          img: "https://avatars0.githubusercontent.com/u/33386393?v=4"
        },
        {
          name: 'Human',
          img: "https://avatars0.githubusercontent.com/u/33386393?v=4"
        }
      ]
    }
  }

  componentDidMount() {

    const url = "https://api.github.com/users/rhea-manuel"

    Axios.get(url).then((res) => {
      const data = res.data
      this.setState({
        name: data.name,
        img: data.avatar_url,
        bio: data.bio,
        location: data.location,
        followers: data.followers,
        repos: data.public_repos,
        url: "https://github.com/rhea-manuel"
      })

      return data.followers_url
    }).then((res) => {
      // Axios.get()
      Axios.get(res).then((res) => {
        const data = res.data
        console.log(data)

        const followerList = data.map((item)=>{
          const toReturn = {
            name: item.login,
            img: item.avatar_url,
            url: item.html_url
          }

          return toReturn
        })

        this.setState({
          followerList: followerList
        })
      })
    })
  }

  render() {

    return (
      <div className="App" >
        <header className="App-header">
          <Card img={this.state.img} bio={this.state.bio} name={this.state.name} location={this.state.location} followers={this.state.followers} repos={this.state.repos} url={this.state.url}></Card>

          <h2>Followers</h2>
          <FollowerList followers={this.state.followerList}></FollowerList>
        </header>
      </div>
    )
  }
}

export default App;
