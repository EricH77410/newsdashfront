import { FETCH_DL } from '../actions/index'

export default function(state = [], action){
  switch (action.type) {
    case FETCH_DL:
      return [action.payload, ...state];

      default:
        return state;
    }

  }
