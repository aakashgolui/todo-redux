import React from 'react';

const Todos = ({ posts, deleteTodo }) => {
    
    const todoList = posts.length 
    ? 
        (
            posts.map((todo)=>{
                return(
                    <li className="collection-item avatar" key={todo.id}>
                        {/* <img src={require('../assets/img/placeholder.jpg')} alt="" className="circle" /> */}
                        <span className="title">#{todo.id}</span>
                        <p>{todo.content}</p>
                        <a href="#!" className={todo.isFav ? 'secondary-content yellow-text' : 'secondary-content grey-text'}>
                            <i className="material-icons">grade</i>
                        </a>
                        <br />
                        <a href="#!" className="red-text" onClick={()=>deleteTodo(todo.id)}>
                            <i className="material-icons">delete</i>
                        </a>
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