import { FETCH_DL_EXCLU, FETCH_DL_NEWS } from '../actions/index'

export default function(state = [], action){
  switch (action.type) {
    case FETCH_DL_NEWS:
      return {dlnews:action.payload, ...state};
    case FETCH_DL_EXCLU:
      return {dlexclu:action.payload, ...state};
      default:
        return state;
    }

  }
