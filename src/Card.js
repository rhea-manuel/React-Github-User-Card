import React from 'react'

class Card extends React.Component {

    render() {

        if (!this.props) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <article className="Card">

                <img src={this.props.img} alt="profile pic"></img>

                <section>

                    <a className="Link" href={this.props.url}><h1>{this.props.name}</h1></a>

                    <div className="Card-Item">

                        <div>

                        <i class="fas fa-book"></i>
                            <span>Bio:</span>
                            <br></br>
                            {this.props.bio}
                        </div>
                    </div>

                    <div className="Col">

                        <div className="Card-Item">
                            <i class="fas fa-user-friends"></i><span>Followers:</span>{this.props.followers}
                        </div>

                        <div className="Card-Item">
                        <i class="fas fa-code"></i><span>Repos:</span>{this.props.repos}
                        </div>


                    </div>
                </section>

            </article>

        )

    }
}

export default Card