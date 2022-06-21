<template>
  <div class="container mt-5 pt-5">

    <!--    새 freeboard 일 경우 submitted = false -->
    <div v-if="!submitted">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input type="text" class="form-control" id="title"
               required name="title" v-model="freeboard.title">
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <input type="text" class="form-control" id="content"
               required name="content" v-model="freeboard.content">
      </div>
      <div class="mb-3">
        <label for="writer" class="form-label">작성자</label>
        <input type="text" class="form-control" id="writer"
               required name="writer" v-model="freeboard.writer">
      </div>


      <div class="mb-3">
        <button @click="saveFreeBoard" class="btn btn-primary">Submit</button>
      </div>
    </div>

    <div v-else>
      <div class="alert alert-success" role="alert">
        Save Freeboard successfully!
      </div>

      <button @click="newFreeBoard" class="btn btn-primary">Add New Freeboard</button>
    </div>
  </div>
</template>

<script>
import FreeBoardDataService from "@/services/FreeBoardDataService";

export default {
  name: "AddFreeBoard",
  data() {
    // 객체 , 변수 초기화
    return {
      freeboard: {
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
    saveFreeBoard() {
      //  회원 임시 객체 만들기
      let data = {
        title: this.freeboard.title,
        content: this.freeboard.content,
        writer: this.freeboard.writer
      }
      //  임시 회원 객체를 서버쪽으로 전달해서 DB에 insert 요청
      FreeBoardDataService.create(data)
          //  성공하면 then으로 들어옴
          .then(response => {
            this.freeboard.id = response.data.id;
            this.submitted = true; // DB insert 성공
          })
          //  실패하면 catch으로 에러메세지가 들어옴
          .catch(e => {
            alert(e);
          })

    },
    // 새 회원가입을 위한 빈 form을 만드는 메소드(변수 초기화)
    newFreeBoard() {
      this.submitted = false;
      this.freeboard = {};
    }
  }
}
</script>

<style>

</style>