import { FETCH_AF } from '../actions/index'

export default function(state = [], action){
  switch (action.type) {
    case FETCH_AF:

      return [action.payload, ...state];

      default:
        return state;
    }

  }
