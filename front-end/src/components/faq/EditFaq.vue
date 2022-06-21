<template>
  <!--    기존 회원이 있을 경우 currentFaq != null -->
  <div class="container mt-5 pt-5" v-if="currentFaq">
    <!--    mb-3 : m(margin), p(padding) : l(left), r(right), b(bottom) , 1 : 25px, 2 50px -->
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input type="text" class="form-control" id="title"
             required name="title" v-model="currentFaq.title">
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">FAQ 내용</label>
      <input type="text" class="form-control" id="content"
             required name="content" v-model="currentFaq.content">
    </div>

    <div class="mb-3">
      <button @click="updateFaq"
              class="btn btn-primary me-3">Update
      </button>
      <button @click="deleteFaq"
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
import FaqDataService from "@/services/FaqDataService";

export default {
  name: "edit_faq",
  data() {
    return {
      // 객체 ( 컴플레인정보 )
      currentFaq: null,
      message: ''
    }
  },
  methods: {
    // id에 해당하는 회원정보를 조회하는 서비스를 요청(springboot)
    getFaq(id) {
      // axios 통신이용 서비스 호출( springboot )
      FaqDataService.get(id)
          // 성공하면 then으로 결과 데이터가 들어옴( response.data )
          .then(response => {
            this.currentFaq = response.data;
          })
          //  실패하면 catch로 에러 데이터가 들어옴
          .catch(e => {
            alert(e);
          })
    },
    //  회원정보 수정 서비스 요청( springboot )
    updateFaq() {
      //  axios 통신으로 수정 서비스 요청( springboot )
      FaqDataService
          .update(this.currentFaq.id, this.currentFaq)
          //  성공하면 then 으로 결과 데이터가 들어옴
          .then(() => {
            this.message = 'The FAQ was updated successfully!';
          })
          //  실패하면 catch 로 에러 데이터가 들어옴
          .catch(e => {
            alert(e);
          })
    },
    //  회원삭제 서비스 요청(springboot)
    deleteFaq() {
      //  axios 이용해서 회원 삭제 요청( springboot )
      FaqDataService.delete(this.currentFaq.id)
          //  성공하면 then으로 결과 데이터가 들어옴
          .then(() => {
            // router/index.js 안에 name
            // 화면 이동 : Faq 화면으로 이동됨
            this.$router.push({name: 'Faq'});
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
    this.getFaq(this.$route.params.id);
  }
}
</script>