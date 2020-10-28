import React from 'react'
import Follower from './Follower'

class FollowerList extends React.Component {
    render() {

        if (!this.props){
            return (
                <div>Loading...</div>
            )
        }

        return (
            <section className="List">
                {
                    this.props.followers.map((item) => {
                        return (
                            <Follower url={item.url} name={item.name} img={item.img}></Follower>
                        )
                    })
                }
            </section>
        )
    }
}

export default FollowerList