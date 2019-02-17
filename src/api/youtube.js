import axios from 'axios';

const KEY = 'AIzaSyDmKsxNQ_I76c0TY_LTGgiU30ygx3SpuWw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
