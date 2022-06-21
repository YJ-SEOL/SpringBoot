import axios from "axios";

export default axios.create({
    // http://localhost:8000/api : 백엔드의 포트번호 지정
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-type": "application/json"
    }
});