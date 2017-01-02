export default (state = [], action:any) => {
  switch (action.type){
    case 'CREATE_BOOK':
        //state.push(action.book);
        //return state;
        return [
          ...state,
          Object.assign({}, action.book)
        ];
    default:
          return state;
  }
};