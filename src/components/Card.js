import React from 'react'

class Card extends React.Component {

    constructor() {
        super()
        // console.log(this.props)
    }


    render() {

        if (this.props.user === undefined || this.props.user === null) {
            return (
                <span>Loading...</span>
            )
        }

        else {

            // { console.log(this.props.user) }
            const link = `https://github.com/${this.props.user.login}`

            return (
                <section className="card">
                   <img src={this.props.user.avatar_url}></img>
                    <div>

                        <h2>{this.props.user.name}</h2>
                        <p className="login"><a href={link}>
                        {this.props.user.login}</a></p>
                        <ul className="list">

                            <li>Followers: {this.props.user.followers}</li>
                            <li>Following: {this.props.user.following}</li>

                        </ul>
                        <h2></h2>
                    </div>
                </section>
            )
        }
    }



}

export default Card