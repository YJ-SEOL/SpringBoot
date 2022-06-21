<template>
  <div class="container mt-5 pt-5">
    <div class="list">
      <!-- search 관련 div 시작 -->
      <div class="col-md-8">
        <div class="input-group mb-3">
          <!-- Todo: 수정 시작 #1 -->
          <!-- 검색 입력 박스 -->
          <input type="text"
                 class="form-control"
                 placeholder="Search by title"
                 v-model="searchTitle"
          >
          <!-- 검색 버튼 -->
          <div class="input-group-append">
            <button class="btn btn-outline-secondary"
                    type="button"
                    @click="page = 1; retrieveTutorials();"
            >
              Search
            </button>
          </div>
          <!-- Todo: 수정 끝 #1-->
        </div>
      </div>
      <!-- search 관련 div 끝 -->

      <!--      Todo: page-bar 태그 추가-->
      <div class="col-md-12" style="margin: auto;">
        <div class="mb-3">
          Item per Page:
          <select v-model="pageSize"
                  @change="handlePageSizeChange($event)">
            <option v-for="size in pageSizes"
                    :key="size"
                    :value="size">
              {{ size }}
            </option>
          </select>
        </div>
        <!--      Todo : page bar 추가-->
        <b-pagination v-model="page"
                      :total-rows="count"
                      :per-page="pageSize"
                      prev-text="Prev"
                      next-text="Next"
                      @change="handlePageChange">
        </b-pagination>
      </div>

      <!-- Todo: page-bar 끝 -->


      <!-- 목록을 보여주는 div 시작 -->
      <div class="col-md-6">
        <h4>Tutorials List</h4>
        <!-- 제목(title) 목록 -->
        <ul class="list-group">
          <li class="list-group-item"
              :class="{ active: index == currentIndex }"
              v-for="(tutorial, index) in tutorials"
              :key="index"
              @click="setActiveTutorial(tutorial,index)"
          >
            {{ tutorial.title }}
          </li>
        </ul>
        <!-- 모든 목록 삭제 버튼 -->
        <button class="m-3 btn btn-sm btn-danger"
                @click="removeAllTutorials">
          Remove All
        </button>
      </div>
      <!-- 목록을 보여주는 div 끝 -->

      <!-- 상세 정보를 보여주는 div 시작 -->
      <div class="col-md-6">
        <!-- currentTutorial != null 이면 -->
        <div v-if="currentTutorial">
          <h4>Tutorial</h4>
          <div>
            <label><strong>Title:</strong></label>
            {{ currentTutorial.title }}
          </div>

          <div>
            <label><strong>Description:</strong></label>
            {{ currentTutorial.description }}
          </div>

          <div>
            <label><strong>Status:</strong></label>
            {{
              (currentTutorial.published == "Y") ?
                  "Published" : "Pending"
            }}
          </div>

          <!-- link 추가 -->
          <router-link :to="'/tutorials/' + currentTutorial.id"
                       class="badge badge-primary"
          >
            Edit
          </router-link>
        </div>
        <!-- currentTutorial == null 이면 -->
        <div v-else>
          <br>
          <p>Please click on a Tutorial...</p>
        </div>
      </div>
      <!-- 상세 정보를 보여주는 div 끝 -->
    </div>
  </div>
</template>

<script>
import TutorialDataService from '@/services/TutorialDataService';

export default {
  // 첫화면 : http://localhost:8080
  // 전체목록 화면 표시
  name: "tutorials-list",
  data() {
    //tutorials 객체, 변수들 초기화
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      // Todo : title -> searchTitle 변경
      searchTitle: "",
      // Todo : 아래 변수 4개 추가
      // page: 페이지 번호
      page: 1,
      count: 0,
      // pageSize : 페이지 당 노출될 건 수
      pageSize: 3,
      // pageSizes : 한 페이지당 3, 6, 9 노출될 건 수
      pageSizes: [3, 6, 9]
    };
  },
  methods: {
    // Todo : getRequestParams 추가
    // getRequestParams: springboot 쪽으로 URL params 전송하여,
    //      => ex) http://localhost:8000/api/tutorials?title=''&page=1&size=3
    // 'title=''&page=1&size=3'을 만들기 위한 메소드
    getRequestParams(searchTitle, page, pageSize) {
      let params = {};

      // searchTitle 값이 있으면 params 객체에 title로 저장
      if(searchTitle){
        params["title"] = searchTitle;
      }
      // page 값이 있으면 params 객체에 page에 저장
      if(page){
        params["page"] = page - 1;
      }
      // pageSize 값이 있으면 params 객체에 size로 저장
      if(pageSize){
        params["size"] = pageSize;
      }

      return params;
    },
    // Todo : 아래 메소드 수정
    // Todo : getAll() => getAll(params)
    // 전체 목록 조회 메소드
    retrieveTutorials() {
      const params = this.getRequestParams(
          this.searchTitle,
          this.page,
          this.pageSize
      );
      // Todo: 백엔드 쪽으로 전체 데이터 요청(페이징 처리)
      // 백엔드(spring)쪽으로 전체 데이터 요청
      TutorialDataService.getAll(params)
          // 성공하면 then으로 들어옴
          // response : 헤더(상태정보,쿠키등), 바디(json)
          // data : tutorial 객체(백엔드에서 전송됨)
          .then(response => {
            // Todo : 아래 수정
            // 임시변수 tutorials, totalItems(서버의 결과데이터가 들어옴)
            const {tutorials, totalItems} = response.data;
            this.tutorials = tutorials; // 객체
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
    handlePageChange(value){
      // handlePageChange : 현재 페이지 번호에 해당하는 데이터 다시 조회하는 메소드
      // 페이지 번호 저장
      this.page = value;
      // 다시 데이터 조회
      this.retrieveTutorials();
    },
    handlePageSizeChange(event){
      // handlePageSizeChange : 페이지 당 건수가 건수가 변경되면 다시 조회하는 메소드
      // 셀렉트박스 변경 시 값 가져옴
      // 한 페이지 당 해당 건수 저장
      this.pageSize = event.target.value;
      // 다시 데이터 조회
      this.retrieveTutorials();
    },
    // 목록 삭제 후 화면 다시 로딩할때 사용할 메소드
    // 새로고침 메소드
    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
      this.retrieveTutorials();
    },
    // vue의 data 변수에 값을 저장하는 메소드
    // 클릭했을때 현재값을 저장함
    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },
    // 모든 목록 삭제 메소드
    removeAllTutorials() {
      // 백엔드쪽으로(spring) 전체 데이터 삭제 요청
      TutorialDataService.deleteAll()
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
    // 제목 검색을 위한 메소드
    // searchTitle() {
    //   // 백엔드(spring)쪽으로 제목(title) 데이터를 요청
    //   TutorialDataService.findByTitle(this.title)
    //       // 성공하면 then으로 들어옴
    //       .then(response => {
    //         // 백엔드(spring)쪽에서 받은 데이터를
    //         // vue의 data 변수(tutorials)에 넣음
    //         this.tutorials = response.data;
    //         console.log(response.data);
    //       })
    // }
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트
  mounted() {
    // 전체 목록 가져오기 메소드 호출
    this.retrieveTutorials();
  }
}
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>










