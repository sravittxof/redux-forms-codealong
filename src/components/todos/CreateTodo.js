import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor(){
    super();
    this.state = {
      text: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input 
              type="text"
              placeholder="add todo" 
              onChange={this.handleChange}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
          {this.state.text}
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: "ADD_TODO", payload: formData }),
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
