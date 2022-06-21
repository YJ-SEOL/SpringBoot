<template>
  <div class="container mt-5 pt-5">

    <!--    새 회원가입일 경우 submitted = false -->
    <div v-if="!submitted">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input type="text" class="form-control" id="title"
               required name="title" v-model="complain.title">
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">Complain 내용</label>
        <input type="text" class="form-control" id="content"
               required name="content" v-model="complain.content">
      </div>
      <div class="mb-3">
        <label for="target" class="form-label">대상 페이지</label>
        <input type="target" class="form-control" id="target"
               required name="target" v-model="complain.target">
      </div>
      <div class="mb-3">
        <label for="writer" class="form-label">작성자</label>
        <input type="text" class="form-control" id="writer"
               required name="writer" v-model="complain.writer">
      </div>


      <div class="mb-3">
        <button @click="saveComplain" class="btn btn-primary">Submit</button>
      </div>
    </div>

    <div v-else>
      <div class="alert alert-success" role="alert">
        Save complain successfully!
      </div>

      <button @click="newComplain" class="btn btn-primary">Add New Complain</button>
    </div>
  </div>
</template>

<script>
import ComplainDataService from "@/services/ComplainDataService";

/* eslint-disable */
export default {
  name: "add-complain",
  data() {
    // 객체 , 변수 초기화
    return {
      complain: {
        id: null,
        title: "",
        content: "",
        target: "",
        writer: ""
      },
      submitted: false
    }
  },
  methods: {
    // 저장 메소드 호출
    saveComplain() {
      //  회원 임시 객체 만들기
      let data = {
        title: this.complain.title,
        content: this.complain.content,
        target: this.complain.target,
        writer: this.complain.writer
      }
      //  임시 회원 객체를 서버쪽으로 전달해서 DB에 insert 요청
      ComplainDataService.create(data)
          //  성공하면 then으로 들어옴
          .then(response => {
            this.complain.id = response.data.id;
            this.submitted = true; // DB insert 성공
          })
          //  실패하면 catch으로 에러메세지가 들어옴
          .catch(e => {
            alert(e);
          })

    },
    // 새 회원가입을 위한 빈 form을 만드는 메소드(변수 초기화)
    newComplain() {
      this.submitted = false;
      this.complain = {};
    }
  }
}
</script>








