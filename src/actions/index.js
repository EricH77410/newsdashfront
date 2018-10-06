import axios from 'axios';

export const FETCH_AF_NEWS  = 'FETCH_AF_NEWS';
export const FETCH_AF_ANNONCES = 'FETCH_AF_ANNONCES';
export const FETCH_DL_NEWS = 'FETCH_DL_NEWS';
export const FETCH_DL_EXCLU = 'FETCH_DL_EXCLU';

const URL_SERVER = 'http://localhost:3100/';

export function fetchAfNews() {
  const url = URL_SERVER+'afnews';
  return function(dispatch){
    axios.get(url)
      .then( (res) => {
        dispatch ( {type: FETCH_AF_NEWS, payload: res.data })
      })
      .catch( (err) => {
        console.log('pas bon: ',err);
      })
  }

}

export function fetchAfAnnonces() {
  const url = URL_SERVER+'afannonces';
  return function(dispatch){
    axios.get(url)
      .then( (res) => {
        dispatch ( {type: FETCH_AF_ANNONCES, payload: res.data })
      })
      .catch( (err) => {
        console.log('pas bon: ',err);
      })
  }

}

export function fetchDlNews(){
  const url = URL_SERVER+'dlnews';
  return function(dispatch){
    axios.get(url)
      .then( (res) => {
        dispatch ( {type: FETCH_DL_NEWS, payload: res.data })
      })
      .catch((err)=>{
        console.log(err)
      })
  }
}

export function fetchDlExclu(){
  const url = URL_SERVER+'dlexclu';
  return function(dispatch){
    axios.get(url)
      .then( (res) => {
        dispatch ( {type: FETCH_DL_EXCLU, payload: res.data })
      })
      .catch((err)=>{
        console.log(err)
      })
  }
}
