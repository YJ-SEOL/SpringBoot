<template>
  <div class="container mt-5 pt-5">

    <div v-if="!submitted">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input type="text" class="form-control" id="title"
               required name="title" v-model="faq.title">
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <input type="text" class="form-control" id="content"
               required name="content" v-model="faq.content">
      </div>


      <div class="mb-3">
        <button @click="saveFaq" class="btn btn-primary">Submit</button>
      </div>
    </div>

    <div v-else>
      <div class="alert alert-success" role="alert">
        Save FAQ successfully!
      </div>

      <button @click="newFaq" class="btn btn-primary">Add New FAQ</button>
    </div>
  </div>
</template>

<script>
import FaqDataService from "@/services/FaqDataService";

export default {
  name: "AddFaq",
  data() {
    // 객체 , 변수 초기화
    return {
      faq: {
        id: null,
        title: "",
        content: "",
        writer: ""
      },
      submitted: false
    }
  },
  methods: {
    // 저장 메소드 호출
    saveFaq() {
      //  회원 임시 객체 만들기
      let data = {
        title: this.faq.title,
        content: this.faq.content,
        writer: this.faq.writer
      }
      //  임시 회원 객체를 서버쪽으로 전달해서 DB에 insert 요청
      FaqDataService.create(data)
          //  성공하면 then으로 들어옴
          .then(response => {
            this.faq.id = response.data.id;
            this.submitted = true; // DB insert 성공
          })
          //  실패하면 catch으로 에러메세지가 들어옴
          .catch(e => {
            alert(e);
          })

    },
    // 새 회원가입을 위한 빈 form을 만드는 메소드(변수 초기화)
    newFaq() {
      this.submitted = false;
      this.faq = {};
    }
  }

}
</script>

<style scoped>

</style>