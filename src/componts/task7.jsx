import React from 'react'


class Task7 extends React.Component {
 
    render() {
     
return (
    <div>
        <button onClick={this.props.onClick}>{this.props.label}</button>
    </div>
  )
  }}
export default Task7