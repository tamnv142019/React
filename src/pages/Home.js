import React from 'react';

const appStyle = {
  border: '1px solid red'
}

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      phone: 12312
    }
  }

  changePhone = () => {
    this.setState({
      phone: Date.now()
    })
  }
  
  render() {
    return (
      <div style={appStyle}>
        {this.props.children}
      </div>
    )
  }

}

export default Home;