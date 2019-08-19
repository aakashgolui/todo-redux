
const postReducer = (state = posts, action) => {
    switch(action.type) {
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post)=>post.id !== action.id);
        case 'TOGGLE_EDIT_POST':
            return state.map((post) => post.id === action.id ? {...post, editing: !post.editing} : post)
        case 'UPDATE':
            return state.map((post)=>{
                if(post.id === action.id) {
                  return {
                     ...post,
                     content:action.data.newContent,
                     editing: !post.editing
                  }
                } else return post;
              })
        case 'TOGGLE_FAV':
            return state.map((post) => post.id === action.id ? {...post, isFav: !post.isFav} : post)
        case 'TOGGLE_COMPLETE':
            return state.map((post) => post.id === action.id ? {...post, isComplete: !post.isComplete} : post)
        default:
          return state;
    }
}
export default postReducer;


const posts = [
    {id:1, content:'delectus aut autem', isFav:false, editing:false, isComplete:false},
    {id:2, content:'quis ut nam facilis et officia qui', isFav:true, editing:false, isComplete:false},
    {id:3, content:'fugiat veniam minus', isFav:false, editing:false, isComplete:false},
    {id:4, content:'laboriosam mollitia et enim quasi adipisci quia provident illum', isFav:false, editing:false, isComplete:false},
    {id:5, content:'illo expedita consequatur quia in', isFav:false, editing:false, isComplete:false}
]