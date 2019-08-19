const posts = [
    {id:1, content:'Create Store', isFav:false, editing:false},
    {id:2, content:'Create reducers', isFav:true, editing:false},
    {id:3, content:'Create actions', isFav:false, editing:false},
]
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
        default:
          return state;
    }
}
export default postReducer;