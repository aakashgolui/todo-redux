const posts = [
    {id:1, content:'Create Store', isFav:false},
    {id:2, content:'Create reducers', isFav:true},
    {id:3, content:'Create actions', isFav:false},
]
const postReducer = (state = posts, action) => {
    switch(action.type) {
        case 'ADD_POST':
          return state.concat([action.data]);
        case 'DELETE_POST':
          return state.filter((post)=>post.id !== action.id);
        default:
          return state;
    }
}
export default postReducer;