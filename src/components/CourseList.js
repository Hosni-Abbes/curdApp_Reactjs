import React, {Component, Fragment} from 'react'

class CourseList extends Component {
  state={
    isEdit: false
  }
  //function renderCourseList
  renderCourseList=()=>{
    return(
      <div className="list">
        <span>{this.props.course}</span>
        <div className="btns">
          <button onClick={()=>this.toggleState()}>Edit</button>
          <button onClick={()=>this.props.deleteCourse(this.props.index)}>Delete</button>
        </div>
      </div>
    )
  }
  //function toggleState
  toggleState=()=>{
    let isEdit=this.state.isEdit
    this.setState({
      isEdit: !isEdit
    })
  }
  //function renderEditCourse
  renderEditCourse=()=>{
    return(
      <form className="edit" onSubmit={this.editCourse}>
        <input type="text" defaultValue={this.props.course} ref={v=>this.input=v} />
        <button type="submit">Update</button>
      </form>
    )
  }
  //function editCourse
  editCourse=(e)=>{
    e.preventDefault()
    this.props.updateCourse(this.props.index, this.input.value)
    this.toggleState()
  }

  render(){
    return(
      <Fragment>
        {this.state.isEdit ? this.renderEditCourse() : this.renderCourseList() }
      </Fragment>
    )
  }
}

export default CourseList