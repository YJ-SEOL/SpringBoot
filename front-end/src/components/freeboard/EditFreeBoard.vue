<template>
  <!--    기존 회원이 있을 경우 currentFreeBoard != null -->
  <div class="container mt-5 pt-5" v-if="currentFreeBoard">
    <!--    mb-3 : m(margin), p(padding) : l(left), r(right), b(bottom) , 1 : 25px, 2 50px -->
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input type="text" class="form-control" id="title"
             required name="title" v-model="currentFreeBoard.title">
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">FreeBoard 내용</label>
      <input type="text" class="form-control" id="content"
             required name="content" v-model="currentFreeBoard.content">
    </div>
    <div class="mb-3">
      <label for="writer" class="form-label">작성자</label>
      <input type="text" class="form-control" id="writer"
             required name="writer" v-model="currentFreeBoard.writer">
    </div>
    <div class="mb-3">
      <button @click="updateFreeBoard"
              class="btn btn-primary me-3">Update
      </button>
      <button @click="deleteFreeBoard"
              class="btn btn-danger">Delete
      </button>
    </div>
    <!--    수정버튼을 클릭후 성공했을때 아래가 보임 -->
    <div class="alert alert-success"
         role="alert"
         v-if="message"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
import FreeBoardDataService from "@/services/FreeBoardDataService";

export default {
  name: "edit-freeboard",
  data() {
    return {
      // 객체 ( 컴플레인정보 )
      currentFreeBoard: null,
      message: ''
    }
  },
  methods: {
    // id에 해당하는 회원정보를 조회하는 서비스를 요청(springboot)
    getFreeBoard(id) {
      // axios 통신이용 서비스 호출( springboot )
      FreeBoardDataService.get(id)
          // 성공하면 then으로 결과 데이터가 들어옴( response.data )
          .then(response => {
            this.currentFreeBoard = response.data;
          })
          //  실패하면 catch로 에러 데이터가 들어옴
          .catch(e => {
            alert(e);
          })
    },
    //  회원정보 수정 서비스 요청( springboot )
    updateFreeBoard() {
      //  axios 통신으로 수정 서비스 요청( springboot )
      FreeBoardDataService
          .update(this.currentFreeBoard.id, this.currentFreeBoard)
          //  성공하면 then 으로 결과 데이터가 들어옴
          .then(() => {
            this.message = 'The FreeBoard was updated successfully!';
          })
          //  실패하면 catch 로 에러 데이터가 들어옴
          .catch(e => {
            alert(e);
          })
    },
    //  회원삭제 서비스 요청(springboot)
    deleteFreeBoard() {
      //  axios 이용해서 회원 삭제 요청( springboot )
      FreeBoardDataService.delete(this.currentFreeBoard.id)
          //  성공하면 then으로 결과 데이터가 들어옴
          .then(() => {
            // router/index.js 안에 name
            // 화면 이동 : FreeBoards 화면으로 이동됨
            this.$router.push({name: 'FreeBoard'});
          })
          //  실패하면 catch로 에러 데이터가 들어옴
          .catch(e => {
            alert(e);
            //  console.log(e)
          })
    }
  },
//  화면이 뜨면 실행되는 이벤트
//  http://localhost:8080/:id
//  $route : router/index.js , params.id
  mounted() {
    this.getFreeBoard(this.$route.params.id);
  }
}
</script>