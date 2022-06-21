<template>
  <div class="container mt-5 pt-5">

    <!--    새 회원가입일 경우 submitted = false -->
    <div v-if="!submitted">
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input type="text" class="form-control" id="firstName" required name="firstName" v-model="customer.firstName">
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="lastName" required name="lastName" v-model="customer.lastName">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" required name="email" v-model="customer.email">
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Phone</label>
        <input type="text" class="form-control" id="phone" required name="phone" v-model="customer.phone">
      </div>
      <div class="mb-3">
        <button @click="saveCustomer" class="btn btn-primary">Submit</button>
      </div>
    </div>

    <div v-else>
      <div class="alert alert-success" role="alert">
        Save customer successfully!
      </div>
      <button @click="newCustomer" class="btn btn-primary">Add New Customer</button>
    </div>
  </div>
</template>

<script>
import CustomerDataService from "@/services/CustomerDataService";

export default {
  name: "add-customer",
  data() {
    // 객체 , 변수 초기화
    return {
      customer: {
        id: null,
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      },
      submitted: false
    }
  },
  methods: {
    // 저장 메소드 호출
    saveCustomer() {
      //  회원 임시 객체 만들기
      var data = {
        firstName: this.customer.firstName,
        lastName: this.customer.lastName,
        email: this.customer.email,
        phone: this.customer.phone
      }
      //  임시 회원 객체를 서버쪽으로 전달해서 DB에 insert 요청
      CustomerDataService.create(data)
          //  성공하면 then으로 들어옴
          .then(response => {
            this.customer.id = response.data.id;
            this.submitted = true; // DB insert 성공
          })
          //  실패하면 catch으로 에러메세지가 들어옴
          .catch(e => {
            alert(e);
          })

    },
    // 새 회원가입을 위한 빈 form을 만드는 메소드(변수 초기화)
    newCustomer() {
      this.submitted = false;
      this.customer = {};
    }
  }
}
</script>








