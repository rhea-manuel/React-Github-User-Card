import React from 'react'

class Follower extends React.Component {

    render() {

        return (
            <article>
                <img src={this.props.img}></img>
                <a href={this.props.url}><h4>{this.props.name}</h4></a>
            </article>
        )
    }
}

export default Follower