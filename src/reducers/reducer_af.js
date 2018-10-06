import { FETCH_AF_NEWS, FETCH_AF_ANNONCES } from '../actions/index'

export default function(state = [], action){
  switch (action.type) {
    case FETCH_AF_NEWS:

      return {news: action.payload, ...state};
    
    case FETCH_AF_ANNONCES: {
      return {annonces: action.payload, ...state};
    }

      default:
        return state;
    }

  }
