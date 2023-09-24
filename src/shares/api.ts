import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // เปลี่ยน URL ตามที่คุณต้องการ
});

export default instance;