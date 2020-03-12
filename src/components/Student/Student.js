import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentInfo: []
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(results => {
        this.setState({studentInfo: results.data})
    })
  }
  // handleClick = () => {
  //   this.props.history.goBack()
  // }
  render() {
    const info = this.state.studentInfo
    return (
      <div className="box">
        {/* <Link to={this.handleClick} >
          ⬅︎ return to class list
        </Link> */}

        <h1>Student</h1>
        <h1> {info.first_name} {info.last_name} </h1>
        <h3> Grade: {info.grade} </h3>
        <h3> Email: {info.email} </h3>
      </div>
    )
  }
}