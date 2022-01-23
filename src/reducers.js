const initialState = {
  cards: []
}

export const apiData = (state = initialState, action = {}) =>{
  switch(action.type) {
    case "GET_API_DATA":
      return {...state, cards: action.payload};
    default: 
      return state;
  }
}