import axios from 'axios';

let myUrl = 'http://localhost:5050/api/'; //development

if (process.env.NODE_ENV === 'production') {
  myUrl = 'api';
}
export const Api = axios.create({
  baseURL: myUrl,
});
