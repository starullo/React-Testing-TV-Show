import axios from 'axios';
export const fetchShow = async() => {
   const response =  await axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
        return res.data;
      });
      return response;
  };