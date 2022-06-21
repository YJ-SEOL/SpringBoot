<template>
  <!--    기존 회원이 있을 경우 currentComplain != null -->
  <div class="container mt-5 pt-5" v-if="currentComplain">
    <!--    mb-3 : m(margin), p(padding) : l(left), r(right), b(bottom) , 1 : 25px, 2 50px -->
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input type="text" class="form-control" id="title"
             required name="title" v-model="currentComplain.title">
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">Complain 내용</label>
      <input type="text" class="form-control" id="content"
             required name="content" v-model="currentComplain.content">
    </div>
    <div class="mb-3">
      <label for="target" class="form-label">대상 페이지</label>
      <input type="target" class="form-control" id="target"
             required name="target" v-model="currentComplain.target">
    </div>
    <div class="mb-3">
      <label for="writer" class="form-label">작성자</label>
      <input type="text" class="form-control" id="writer"
             required name="writer" v-model="currentComplain.writer">
    </div>
    <div class="mb-3">
      <button @click="updateComplain"
              class="btn btn-primary me-3">Update
      </button>
      <button @click="deleteComplain"
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
import ComplainDataService from "@/services/ComplainDataService";

export default {
  name: "edit-complain",
  data() {
    return {
      // 객체 ( 컴플레인정보 )
      currentComplain: null,
      message: ''
    }
  },
  methods: {
    // id에 해당하는 회원정보를 조회하는 서비스를 요청(springboot)
    getComplain(id) {
      // axios 통신이용 서비스 호출( springboot )
      ComplainDataService.get(id)
          // 성공하면 then으로 결과 데이터가 들어옴( response.data )
          .then(response => {
            this.currentComplain = response.data;
          })
          //  실패하면 catch로 에러 데이터가 들어옴
          .catch(e => {
            alert(e);
          })
    },
    //  회원정보 수정 서비스 요청( springboot )
    updateComplain() {
      //  axios 통신으로 수정 서비스 요청( springboot )
      ComplainDataService
          .update(this.currentComplain.id, this.currentComplain)
          //  성공하면 then 으로 결과 데이터가 들어옴
          .then(() => {
            this.message = 'The complain was updated successfully!';
          })
          //  실패하면 catch 로 에러 데이터가 들어옴
          .catch(e => {
            alert(e);
          })
    },
    //  회원삭제 서비스 요청(springboot)
    deleteComplain() {
      //  axios 이용해서 회원 삭제 요청( springboot )
      ComplainDataService.delete(this.currentComplain.id)
          //  성공하면 then으로 결과 데이터가 들어옴
          .then(() => {
            // router/index.js 안에 name
            // 화면 이동 : complains 화면으로 이동됨
            this.$router.push({name: 'complains'});
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
    this.getComplain(this.$route.params.id);
  }
}
</script>