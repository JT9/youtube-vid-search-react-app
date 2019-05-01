import axios from 'axios';

const KEY = 'AIzaSyAgfNrKr3gxPoIrgV3Uubfqa9o_C9aVUnQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

