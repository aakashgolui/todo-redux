import React from 'react';

const Todos = ({ posts, deleteTodo, toggleEdit, handleSubmitEdit, handleChange, onToggleFav , onFocusInput }) => {
    
    const todoList = posts.length 
    ? 
        (
            posts.map((todo)=>{
                return(
                    !todo.editing
                    ?
                        <li className="collection-item avatar" key={todo.id}>
                            <span className="title">#{todo.id}</span>
                            <p>{todo.content}</p>
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
                            <img  alt="" className="circle" />
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