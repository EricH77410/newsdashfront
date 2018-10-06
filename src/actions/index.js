import axios from 'axios';

export const FETCH_AF  = 'FETCH_AF';
export const FETCH_DL = 'FETCH_DL';

const URL_SERVER = 'http://localhost:3100/';

export function fetchAf() {
  const url = URL_SERVER+'af';
  return function(dispatch){
    axios.get(url)
      .then( (res) => {
        dispatch ( {type: FETCH_AF, payload: res.data })
      })
      .catch( (err) => {
        console.log('pas bon: ',err);
      })
  }

}

export function fetchDl(){
  const url = URL_SERVER+'dl';
  return function(dispatch){
    axios.get(url)
      .then( (res) => {
        dispatch ( {type: FETCH_DL, payload: res.data })
      })
      .catch((err)=>{
        console.log(err)
      })
  }
}
