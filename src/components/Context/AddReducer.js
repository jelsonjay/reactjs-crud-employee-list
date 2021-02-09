export default (state, action) => {
  switch(action.type){
    case 'DELETE_USER':
      return{
      users: state.users.filter(user => {
        return user.id !== action.payload
      })
      }
    case 'ADD_USER':
    return{
    users: [action.payload, ...state.users]
    }
    default:
    return state
  }
}