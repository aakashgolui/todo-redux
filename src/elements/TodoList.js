import React from 'react';

const Todos = ({ posts, deleteTodo, toggleEdit, handleSubmitEdit, handleChange, onToggleFav , onFocusInput, onToggleComplete }) => {
    
    const todoList = posts.length 
    ? 
        (
            posts.map((todo, index)=>{
                return(
                    !todo.editing
                    ?
                        <li className="collection-item avatar" key={todo.id}>

                            {
                                todo.isComplete
                                ?
                                <a href="#!" onClick={()=>onToggleComplete(todo.id)}>
                                    <i class="material-icons circle green">verified_user</i>
                                </a>
                                :
                                <a href="#!" onClick={()=>onToggleComplete(todo.id)}>
                                    <i class="material-icons circle orange">indeterminate_check_box</i>
                                </a>
                            }
                            <span className="title"># {index + 1}</span>
                            {
                                todo.isComplete
                                ?
                                <p><strike>{todo.content}</strike></p>
                                :
                                <p>{todo.content}</p>
                            }
                            <a href="#!" onClick={()=> onToggleFav(todo.id)} className={todo.isFav ? 'secondary-content yellow-text' : 'secondary-content grey-text'}>
                                <i className="material-icons">grade</i>
                            </a>
                            <br />
                            <a href="#!" className="red-text" onClick={()=>deleteTodo(todo.id)}>
                                <i className="material-icons">delete</i>
                            </a>
                            <a href="#!" className="blue-text" onClick={()=>toggleEdit(todo.id)}>
                                <i className="material-icons">edit</i>
                            </a>
                        </li>
                    :
                        <li className="collection-item avatar" key={todo.id}>
                            <i class="material-icons circle red">cancel</i>
                            <span className="title">#{todo.id}</span>
                            <form onSubmit={()=>handleSubmitEdit(todo.id)}>
                                <label>Todo content:</label>
                                <input type="text" defaultValue={todo.content} onFocus={(text) => onFocusInput(text)} onChange={(input) => handleChange(input)}/>
                            </form>
                        </li>
                ) 
                
            })
        ) 
    : 
        (
            <p className="center">You have no todo's left, Yay.</p>
        )

    return (
        <ul className=" collection">
            {todoList}
        </ul>
        );
}

export default Todos;