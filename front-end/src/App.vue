<template>
  <div id="app">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand ml-0" href="/home">
          <img src="@/assets/image/navbar-logo.svg" alt="..."/>
        </a>

        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
          Menu
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mr-0" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                About
              </a>
              <div class="dropdown">
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link to="/home" class="dropdown-item">
                    Home
                  </router-link>
                  <router-link to="/complain" class="dropdown-item">
                    Complain
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #1 끝 -->

            <!-- dropdown #2 시작 -->
            <li class="nav-item">
              <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                Tutorial Menu
              </a>
              <div class="dropdown">
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link to="/tutorials" class="dropdown-item">
                    Tutorials
                  </router-link>
                  <router-link to="/add" class="dropdown-item">
                    Add
                  </router-link>
                  <router-link to="/upload" class="dropdown-item">
                    Upload Image
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #2 끝 -->

            <!-- dropdown #3 시작 -->
            <li class="nav-item">
              <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                Customer Manager
              </a>
              <div class="dropdown">
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link to="/customers" class="dropdown-item">
                    Customer List
                  </router-link>
                  <router-link to="/add_customer" class="dropdown-item">
                    Customer Add
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #3 끝 -->

            <!-- dropdown #4 시작 -->
            <li class="nav-item">
              <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                Complain Manager
              </a>
              <div class="dropdown">
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link to="/complain" class="dropdown-item">
                    Complain List
                  </router-link>
                  <router-link to="/addcomplain" class="dropdown-item">
                    Add New Complain
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #4 끝 -->

            <!-- dropdown #5 시작 -->
            <li class="nav-item">
              <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                자유게시판
              </a>
              <div class="dropdown">
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link to="/freeboard" class="dropdown-item">
                    자유게시판 목록
                  </router-link>
                  <router-link to="/add_freeboard" class="dropdown-item">
                    글쓰기
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #5 끝 -->

            <!-- dropdown #6 시작 -->
            <li class="nav-item">
              <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                FAQ 게시판
              </a>
              <div class="dropdown">
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link to="/faq" class="dropdown-item">
                    FAQ List
                  </router-link>
                  <router-link to="/add_faq" class="dropdown-item">
                    FAQ Add
                  </router-link>
                </div>
              </div>
            </li>
            <!-- dropdown #6 끝 -->

          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
    <div class="container">

    </div>

  </div>
</template>


<script>

export default {
  name: "app",
};
</script>

<style>
</style>
