const initialState = {
  cards: [],
  meta: {},
  isPending: true,
  currentNumber: 1,
  error: ""
}

export const apiData = (state = initialState, action = {}) => {
  switch(action.type) {
    case "SEND_PAGE_NUMBER":
      return {
        ...state,
        currentNumber: action.payload
      }
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
            isPending: true, 
            error: action.payload
          }
    default: 
    return state;
  }
}


