const initialState = {
  cards: [],
  meta: {},
  isPending: false,
  error: ""
}

export const apiData = (state = initialState, action = {}) =>{
  // console.log(action.payload)
  switch(action.type) {
    case "REQUEST_DATA_PENDING":
      return {
        ...state, 
        isPending: true
      }
      case "REQUEST_DATA_SUCCESS":
        return  {
          ...state, 
          isPending: false, 
          cards: action.payload.data, 
          meta: action.payload.meta
        }
        case "REQUEST_DATA_FAILED":
          return {      
            ...state, 
            isPending: false, 
            error: action.payload
          }
          default: 
          return state;
        }
      }