import React,{Suspense} from 'react';
import { connect } from 'react-redux';
const Todos = React.lazy(() => import('./elements/TodoList'));
const AddForm = React.lazy(() => import('./elements/TodoForm'));
class App extends React.Component{
  state={
    content:''
  }
  deleteTodo = (id) => {
    let result = window.confirm("Want to delete?");
    if(result){
      this.props.dispatch({
        type: 'DELETE_POST',
        id:id
      })
    }
  }

  toggleEdit = (id) => {
    console.log(id);
    this.props.dispatch({
      type: 'TOGGLE_EDIT_POST',
      id:id
    })
  }

  handleSubmitEdit = (id) => {
    
    const newContent = this.state.content;
    const data ={
      newContent
    }
    console.log(data)
    this.props.dispatch({ type: 'UPDATE', id:id, data: data })
  }

  handleChange = (e) =>{ 
    this.setState({
        content: e.target.value
    })
  }

  onToggleFav = (id) => {
    this.props.dispatch({ type: 'TOGGLE_FAV', id:id})
  }

  onFocusInput = (e) => {
    this.setState({
      content:e.target.value
    })
  }

  onToggleComplete = (id) => {
    this.props.dispatch({ type: 'TOGGLE_COMPLETE', id:id})
  }

  
  render(){
    return(
      <div className="container">
        
        
        
        <Suspense fallback={<h3 className="center">Loading...</h3>}>
          <h3 className="center blue-text">Todo App</h3>
          <AddForm />
          <p className="grey-text center">Total: ({this.props.posts.length}), Active: ({this.props.posts.filter((post) => !post.isComplete).length}), Complete: ({this.props.posts.filter((post) => post.isComplete).length}), favourite: ({this.props.posts.filter((post) => post.isFav).length})</p>
          {/* <h4 className="center blue-text">Todo's</h4> */}
          
          <Todos posts={this.props.posts} deleteTodo={this.deleteTodo} onToggleFav={this.onToggleFav} onFocusInput={this.onFocusInput} onToggleComplete={this.onToggleComplete} toggleEdit={this.toggleEdit} handleChange={this.handleChange} handleSubmitEdit={this.handleSubmitEdit}/>
          
        </Suspense>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      posts: state
  }
}

export default connect(mapStateToProps)(App);
