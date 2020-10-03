import axios from 'axios';

export const sortBy = (key) => {
    return {
      type: "SORT",
      key:key
    };
  };
  
export const fetchAction = (data) => {
    return {
      type: "FETCH",
      data:data
    };
  };

export function fetchData() {
    return (dispatch) => {
      return axios.get("https://raw.githubusercontent.com/dhruvpateldp96/StackLine/main/stackline/src/utils/apis/Webdev_data2.json")
        .then(res => {
          const data = JSON.parse(res.request.response)[0];
          return dispatch(fetchAction(data));
        })
        .catch(err => {
          return dispatch(fetchAction({}));
        });
    };
}