import React, {Component} from 'react'
import Form from './components/Form'
import CourseList from './components/CourseList'
import './App.css'

class App extends Component {
  state={
    courses:[],
    current:''
  }
  //function handle change input
  hundleChange=(e)=>{
    this.setState({
      current: e.target.value
    })
  }
  //function add course on submit
  addCourse=(e)=>{
    e.preventDefault()
    let courses = this.state.courses
    let current = this.state.current
    if(current !== ''){
      courses.push(current)
      this.setState({
        courses,
        current:''
      })
    }
  }
  //function deleteCourse
  deleteCourse=(index)=>{
    let courses=this.state.courses
    courses.splice(index,1)
    this.setState({courses})
  }
  //function updateCourse
  updateCourse=(index, newCourse)=>{
    let courses=this.state.courses
    courses[index] = newCourse
    this.setState({
      courses
    })
  }

  render(){
    const {courses} = this.state
    const Output = courses.length ? (courses.map((course,index)=>{
      return <CourseList key={index} index={index} course={course} deleteCourse={this.deleteCourse} updateCourse={this.updateCourse}/>
    })) : <span className="no-courses">No Course Available</span>
    return (
      <div className="App">
        <Form hundleChange={this.hundleChange} addCourse={this.addCourse} current={this.state.current}/>
        {Output}
      </div>
    );
  }
}

export default App;
