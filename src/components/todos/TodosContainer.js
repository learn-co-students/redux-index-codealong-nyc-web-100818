import React from 'react'
import { connect } from 'react-redux'

class TodosContainer extends React.Component {

  render() {
    return(
      <ul>
        {this.props.todos.map((todo,id) => (<li key={id}>{todo}</li>))}
      </ul>
    )
  }
}

const mapState = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapState)(TodosContainer)
