import React from 'react'

class FollowerCard extends React.Component {
    constructor() {
        super()
    }

    render() {
        
        if (this.props.user) {
            const link = `https://www.github.com/${this.props.user.login}`
            return (<article>
                <div>
                    <img src={this.props.user.avatar_url}></img>
                    <h3><a href={link}>{this.props.user.login}</a></h3>
                </div>
            </article>)
        }
    }

}

export default FollowerCard