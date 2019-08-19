import React,{Suspense} from 'react';
import { connect } from 'react-redux';
const Todos = React.lazy(() => import('./elements/TodoList'));
const AddForm = React.lazy(() => import('./elements/TodoForm'));
class App extends React.Component{

  deleteTodo = (id) => {
    console.log(id);
    this.props.dispatch({
      type: 'DELETE_POST',
      id:id
    })
  }
  
  render(){
    return(
      <div className="container">
        <h3 className="center blue-text">Todo's</h3>
        <Suspense fallback={<h3 className="center">Loading...</h3>}>
          <Todos posts={this.props.posts} deleteTodo={this.deleteTodo}/>
          <AddForm />
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
