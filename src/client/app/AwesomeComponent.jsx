import React from 'react'

class AwesomeComponent extends React.Component {
  state = { likesCount: 0 }

  onLike = () => this.setState(prevState => ({
    likesCount: prevState.likesCount + 1
  }))

  render () {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    )
  }
}

export default AwesomeComponent
