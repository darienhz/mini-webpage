import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Table from './Table/Table'

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

  handleVideoChange(item, event){
    event.preventDefault()

    let course_modules = [...this.state.course_modules]

    course_modules.map ( data => {
      data.active = false
    })

    item.active = !item.active

    course_modules[item.id - 1] = item

    this.setState({course_modules})
  }

  render() {
    return (
      <div>
        <Jumbotron/>
        <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules}/>
      </div>
    )
  }
}

export default Home