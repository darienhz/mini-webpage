import React, { Component } from 'react'


class Home extends Component {
  constructor(){
    super()

    this.state = {
      course_modules: [
        { id: 1, title: '1.Setting up a new Ruby on Rails app with React', description: 'lorem ipsum', active: false },
        { id: 2, title: '2.Adding React to an existing rails app', description: 'lorem ipsum', active: false },
        { id: 3, title: '3.Building a Hello World app', description: 'lorem ipsum', active: false },
        { id: 3, title: '4.Adding React Router Dom to your app', description: 'lorem ipsum', active: false },
      ]
    }
  }

  render() {
    return (
      <div>This is our home component</div>
    )
  }
}

export default Home