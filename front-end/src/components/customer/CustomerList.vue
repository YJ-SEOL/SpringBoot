<template>
  <div class="container mt-5 pt-5">

    <!-- search 관련 div 시작 -->
    <div class="col-md-8">
      <div class="input-group mb-3">
        <!-- Todo: 수정 시작 #1 -->
        <!-- 검색 입력 박스 -->
        <input type="text"
               class="form-control"
               placeholder="Search by Email"
               v-model="searchEmail"
        >
        <!-- 검색 버튼 -->
        <div class="input-group-append">
          <button class="btn btn-outline-secondary"
                  type="button"
                  @click="page = 1; retrieveCustomers();"
          >
            Search
          </button>
        </div>
        <!-- Todo: 수정 끝 #1-->
      </div>
    </div>
    <!-- search 관련 div 끝 -->

    <!-- Todo: page-bar 태그 추가 -->
    <div class="col-md-12">
      <div class="mb-3">
        Items per Page:
        <select v-model="pageSize"
                @change="handlePageSizeChange($event)">
          <!-- pageSizes : [3, 6, 9] -->
          <option v-for="size in pageSizes"
                  :key="size"
                  :value="size">
            {{ size }}
          </option>
        </select>
      </div>
      <!-- Todo : page bar 추가-->
      <!--   page : 현재페이지, count : 총 데이터 건 수   -->
      <!--   pageSize : 1페이지 당 개수(건 수)   -->
      <b-pagination v-model="page"
                    :total-rows="count"
                    :per-page="pageSize"
                    prev-text="Prev"
                    next-text="Next"
                    @change="handlePageChange">
      </b-pagination>
    </div>

    <!-- Todo: page-bar 끝 -->

    <table class="table">
      <thead>
      <tr>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <!--      조회 데이터 생성 부분-->
      <tbody v-for="(customer, index) in customers"
             :key="index"
      >
      <tr>
        <td>{{ customer.firstName }}</td>
        <td>{{ customer.lastName }}</td>
        <td>{{ customer.email }}</td>
        <td>{{ customer.phone }}</td>
        <td>
          <a :href="'/customers/' + customer.id" class="btn btn-primary">
            Edit
          </a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CustomerDataService from "@/services/CustomerDataService";

/* eslint-disable */
export default {
  name: "customers",
  data() {
    return {
      customers: [],
      currentCustomer: null,
      currentIndex: -1,
      // Todo : title -> searchEmail 변경
      searchEmail: "",
      // Todo : 아래 변수 4개 추가
      // page: 페이지 번호
      page: 1,
      count: 0,
      // pageSize : 페이지 당 노출될 건 수
      pageSize: 3,
      // pageSizes : 한 페이지당 3, 6, 9 노출될 건 수
      pageSizes: [3, 6, 9]

    }
  },
  methods: {
    // Todo : getRequestParams 추가
    // getRequestParams: springboot 쪽으로 URL params(매개변수들) 전송하여,
    //      => ex) http://localhost:8000/api/tutorials?title=''&page=1&size=3
    // 'title=''&page=1&size=3'을 만들기 위한 메소드
    getRequestParams(searchEmail, page, pageSize) {
      let params = {};

      // searchEmail 값이 있으면 params 객체에 email로 저장
      if (searchEmail) {
        params["email"] = searchEmail;
      }
      // page 값이 있으면 params 객체에 page에 저장
      if (page) {
        params["page"] = page - 1;
      }
      // pageSize 값이 있으면 params 객체에 size로 저장
      if (pageSize) {
        params["size"] = pageSize;
      }

      // 매개변수 3개가 다 들어왔다면, 아래의 형태로 springboot로 전송
      // params {
      // "email" : "forbob@naver.com",
      // "page" : "0",
      // "size" : "3"
      // }
      return params;

    },
    // Todo : 아래 메소드 수정
    // Todo : getAll() => getAll(params)
    // 전체 목록 조회 메소드
    retrieveCustomers() {
      // Todo : getRequestParams 호출 추가
      const params = this.getRequestParams(
          this.searchEmail,
          this.page,
          this.pageSize
      );
      // Todo: 백엔드 쪽으로 전체 데이터 요청(페이징 처리)
      // 백엔드(spring)쪽으로 전체 데이터 요청
      CustomerDataService.getAll(params)
          // 성공하면 then으로 들어옴
          // response : 헤더(상태정보,쿠키등), 바디(json)
          // data : customer 객체(백엔드에서 전송됨)
          .then(response => {
            // Todo : 아래 수정
            // 임시변수 customers, totalItems(서버의 결과데이터가 들어옴)
            const {customers, totalItems} = response.data;
            // springboot 받은 객체 정보
            this.customers = customers; // 객체
            // springboot에서 받은 총 데이터 건 수
            this.count = totalItems; // 총 건수

            // 데이터 잘 들어왔는지 로그 확인
            console.log(response.data);
          })
          // 실패하면 에러 출력
          .catch(e => {
            console.log(e);
          });
    },
    // Todo: 메소드 2개 추가: handlePageChange, handlePageSizeChange
    handlePageChange(value) {
      // handlePageChange : 현재 페이지 번호에 해당하는 데이터 다시 조회하는 메소드
      // 페이지 번호 저장
      this.page = value;
      // 다시 데이터 조회
      this.retrieveCustomers();
    },
    handlePageSizeChange(event) {
      // handlePageSizeChange : 페이지 사이즈(3, 6, 9) 변경시 호출되는 메소드
      this.pageSize = event.target.value; // select 박스의 값
      this.page = 1;
      // 다시 데이터 조회
      this.retrieveCustomers();
    },
    // 목록 삭제 후 화면 다시 로딩할때 사용할 메소드
    // 새로고침 메소드
    refreshList() {
      this.currentCustomer = null;
      this.currentIndex = -1;
      this.retrieveCustomers();
    },
    // vue의 data 변수에 값을 저장하는 메소드
    // 클릭했을때 현재값을 저장함
    setActiveCustomer(customer, index) {
      this.currentCustomer = customer;
      this.currentIndex = index;
    },
    // 모든 목록 삭제 메소드
    removeAllCustomers() {
      // 백엔드쪽으로(spring) 전체 데이터 삭제 요청
      CustomerDataService.deleteAll()
          // 성공하면 then 으로 들어옴
          .then(response => {
            console.log(response.data);
            // 모든 데이터 삭제했으므로 새로고침 메소드 호출
            this.refreshList();
          })
          // 실패하면 catch로 들어옴
          .catch(e => {
            console.log(e);
          })
    },
  },
  //화면이 뜨자마자 실행되는 이벤트(모든 회원조회가 실행됨)
  mounted() {
    this.retrieveCustomers();
  }
}
</script>