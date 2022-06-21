import http from '../http-common'

// springboot 연결하기 위한 메소드 정의
class ComplainDataService {
    // 모든 컴플레인 조회
    // Todo : getAll() -> getAll(params)
    getAll(params) {
        // http://localhost:8080/complains
        return http.get("/complains", { params });
    }

//    id로 컴플레인 조회
    get(id) {
        return http.get(`/complains/${id}`);
    }

//    컴플레인 데이터를 생성(insert 문 호출)
    create(data) {
        return http.post("/complains", data);
    }

//    컴플레인 데이터를 수정 요청(update 문 호출)
    update(id, data) {
        return http.put(`/complains/${id}`, data);
    }

//    컴플레인 데이터를 삭제 요청(update 문 호출)
    delete(id) {
        return http.put(`/complains/deletion/${id}`);
    }

    // 컴플레인 모든 데이터 삭제 메소드
    deleteAll() {
        return http.put(`/complains`);
    }
}

export default new ComplainDataService()







