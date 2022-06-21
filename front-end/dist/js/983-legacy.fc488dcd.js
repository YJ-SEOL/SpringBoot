"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[983],{8983:function(t,s,a){a.r(s),a.d(s,{default:function(){return B}});var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"page-top"}},[t._m(0),t._m(1),a("HeaderCom"),a("SectionCom"),a("FooterCom"),a("PortCom")],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"menu-toggle rounded mt-5",attrs:{href:"#",id:"sidemenu"}},[a("i",{staticClass:"fas fa-bars"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{attrs:{id:"sidebar-wrapper"}},[a("ul",{staticClass:"sidebar-nav"},[a("li",{staticClass:"sidebar-brand"},[a("a",{attrs:{href:"#page-top"}},[t._v("Start Bootstrap")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#services"}},[t._v("Services")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#portfolio"}},[t._v("Portfolio")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#about"}},[t._v("About")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#team"}},[t._v("Team")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#contact"}},[t._v("Contact")])])])])}];a(7042),a(1249);
/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
function o(){var t=function(){var t=document.body.querySelector("#mainNav");t&&(0===window.scrollY?t.classList.remove("navbar-shrink"):t.classList.add("navbar-shrink"))};t(),document.addEventListener("scroll",t);var s=document.body.querySelector("#mainNav");s&&new bootstrap.ScrollSpy(document.body,{target:"#mainNav",offset:74});var a=document.body.querySelector(".navbar-toggler"),i=[].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));i.map((function(t){t.addEventListener("click",(function(){"none"!==window.getComputedStyle(a).display&&a.click()}))}))}var l=o;
/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
function r(){var t=document.getElementById("sidebar-wrapper"),s=!1,a=document.body.querySelector(".menu-toggle");a.addEventListener("click",(function(s){s.preventDefault(),t.classList.toggle("active"),e(),a.classList.toggle("active")}));var i=[].slice.call(document.querySelectorAll("#sidebar-wrapper .js-scroll-trigger"));function e(){var t=document.body.querySelector(".menu-toggle > .fa-bars"),s=document.body.querySelector(".menu-toggle > .fa-xmark");t&&(t.classList.remove("fa-bars"),t.classList.add("fa-xmark")),s&&(s.classList.remove("fa-xmark"),s.classList.add("fa-bars"))}i.map((function(s){s.addEventListener("click",(function(){t.classList.remove("active"),a.classList.remove("active"),e()}))})),document.addEventListener("scroll",(function(){var t=document.body.querySelector(".scroll-to-top");document.documentElement.scrollTop>100?s||(n(t),s=!0):s&&(c(t),s=!1)}))}function c(t){t.style.opacity=1,function s(){(t.style.opacity-=.1)<0?t.style.display="none":requestAnimationFrame(s)}()}function n(t,s){t.style.opacity=0,t.style.display=s||"block",function s(){var a=parseFloat(t.style.opacity);(a+=.1)>1||(t.style.opacity=a,requestAnimationFrame(s))}()}var d=r,m=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("header",{staticClass:"masthead"},[a("div",{staticClass:"container mt-5 pt-5"},[a("div",{staticClass:"masthead-subheading"},[t._v("Welcome To Our Studio!")]),a("div",{staticClass:"masthead-heading text-uppercase"},[t._v("It's Nice To Meet You")]),a("a",{staticClass:"btn btn-primary btn-xl text-uppercase",attrs:{href:"#services"}},[t._v("Tell Me More")])])])])}],p={name:"HeaderCom"},v=p,C=a(1001),f=(0,C.Z)(v,m,u,!1,null,"291c68fa",null),g=f.exports,b=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("footer",{staticClass:"footer py-4"},[a("div",{staticClass:"container mt-5 pt-5"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-4 text-lg-start"},[t._v("Copyright © Your Website 2022")]),a("div",{staticClass:"col-lg-4 my-3 my-lg-0"},[a("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!","aria-label":"Twitter"}},[a("i",{staticClass:"fab fa-twitter"})]),a("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!","aria-label":"Facebook"}},[a("i",{staticClass:"fab fa-facebook-f"})]),a("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!","aria-label":"LinkedIn"}},[a("i",{staticClass:"fab fa-linkedin-in"})])]),a("div",{staticClass:"col-lg-4 text-lg-end"},[a("a",{staticClass:"link-dark text-decoration-none me-3",attrs:{href:"#!"}},[t._v("Privacy Policy")]),a("a",{staticClass:"link-dark text-decoration-none",attrs:{href:"#!"}},[t._v("Terms of Use")])])])])])])}],x={name:"FooterCom"},_=x,y=(0,C.Z)(_,b,h,!1,null,"6d7e571b",null),k=y.exports,L=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("section",{staticClass:"page-section",attrs:{id:"services"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-center"},[i("h2",{staticClass:"section-heading text-uppercase"},[t._v("Services")]),i("h3",{staticClass:"section-subheading text-muted"},[t._v("Lorem ipsum dolor sit amet consectetur.")])]),i("div",{staticClass:"row text-center"},[i("div",{staticClass:"col-md-4"},[i("span",{staticClass:"fa-stack fa-4x"},[i("i",{staticClass:"fas fa-circle fa-stack-2x text-primary"}),i("i",{staticClass:"fas fa-shopping-cart fa-stack-1x fa-inverse"})]),i("h4",{staticClass:"my-3"},[t._v("E-Commerce")]),i("p",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.")])]),i("div",{staticClass:"col-md-4"},[i("span",{staticClass:"fa-stack fa-4x"},[i("i",{staticClass:"fas fa-circle fa-stack-2x text-primary"}),i("i",{staticClass:"fas fa-laptop fa-stack-1x fa-inverse"})]),i("h4",{staticClass:"my-3"},[t._v("Responsive Design")]),i("p",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.")])]),i("div",{staticClass:"col-md-4"},[i("span",{staticClass:"fa-stack fa-4x"},[i("i",{staticClass:"fas fa-circle fa-stack-2x text-primary"}),i("i",{staticClass:"fas fa-lock fa-stack-1x fa-inverse"})]),i("h4",{staticClass:"my-3"},[t._v("Web Security")]),i("p",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.")])])])])]),i("section",{staticClass:"page-section bg-light",attrs:{id:"portfolio"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-center"},[i("h2",{staticClass:"section-heading text-uppercase"},[t._v("Portfolio")]),i("h3",{staticClass:"section-subheading text-muted"},[t._v("Lorem ipsum dolor sit amet consectetur.")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4 col-sm-6 mb-4"},[i("div",{staticClass:"portfolio-item"},[i("a",{staticClass:"portfolio-link",attrs:{"data-bs-toggle":"modal",href:"#portfolioModal1"}},[i("div",{staticClass:"portfolio-hover"},[i("div",{staticClass:"portfolio-hover-content"},[i("i",{staticClass:"fas fa-plus fa-3x"})])]),i("img",{staticClass:"img-fluid",attrs:{src:a(5375),alt:"..."}})]),i("div",{staticClass:"portfolio-caption"},[i("div",{staticClass:"portfolio-caption-heading"},[t._v("Threads")]),i("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("Illustration")])])])]),i("div",{staticClass:"col-lg-4 col-sm-6 mb-4"},[i("div",{staticClass:"portfolio-item"},[i("a",{staticClass:"portfolio-link",attrs:{"data-bs-toggle":"modal",href:"#portfolioModal2"}},[i("div",{staticClass:"portfolio-hover"},[i("div",{staticClass:"portfolio-hover-content"},[i("i",{staticClass:"fas fa-plus fa-3x"})])]),i("img",{staticClass:"img-fluid",attrs:{src:a(4726),alt:"..."}})]),i("div",{staticClass:"portfolio-caption"},[i("div",{staticClass:"portfolio-caption-heading"},[t._v("Explore")]),i("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("Graphic Design")])])])]),i("div",{staticClass:"col-lg-4 col-sm-6 mb-4"},[i("div",{staticClass:"portfolio-item"},[i("a",{staticClass:"portfolio-link",attrs:{"data-bs-toggle":"modal",href:"#portfolioModal3"}},[i("div",{staticClass:"portfolio-hover"},[i("div",{staticClass:"portfolio-hover-content"},[i("i",{staticClass:"fas fa-plus fa-3x"})])]),i("img",{staticClass:"img-fluid",attrs:{src:a(1518),alt:"..."}})]),i("div",{staticClass:"portfolio-caption"},[i("div",{staticClass:"portfolio-caption-heading"},[t._v("Finish")]),i("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("Identity")])])])]),i("div",{staticClass:"col-lg-4 col-sm-6 mb-4 mb-lg-0"},[i("div",{staticClass:"portfolio-item"},[i("a",{staticClass:"portfolio-link",attrs:{"data-bs-toggle":"modal",href:"#portfolioModal4"}},[i("div",{staticClass:"portfolio-hover"},[i("div",{staticClass:"portfolio-hover-content"},[i("i",{staticClass:"fas fa-plus fa-3x"})])]),i("img",{staticClass:"img-fluid",attrs:{src:a(1487),alt:"..."}})]),i("div",{staticClass:"portfolio-caption"},[i("div",{staticClass:"portfolio-caption-heading"},[t._v("Lines")]),i("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("Branding")])])])]),i("div",{staticClass:"col-lg-4 col-sm-6 mb-4 mb-sm-0"},[i("div",{staticClass:"portfolio-item"},[i("a",{staticClass:"portfolio-link",attrs:{"data-bs-toggle":"modal",href:"#portfolioModal5"}},[i("div",{staticClass:"portfolio-hover"},[i("div",{staticClass:"portfolio-hover-content"},[i("i",{staticClass:"fas fa-plus fa-3x"})])]),i("img",{staticClass:"img-fluid",attrs:{src:a(7350),alt:"..."}})]),i("div",{staticClass:"portfolio-caption"},[i("div",{staticClass:"portfolio-caption-heading"},[t._v("Southwest")]),i("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("Website Design")])])])]),i("div",{staticClass:"col-lg-4 col-sm-6"},[i("div",{staticClass:"portfolio-item"},[i("a",{staticClass:"portfolio-link",attrs:{"data-bs-toggle":"modal",href:"#portfolioModal6"}},[i("div",{staticClass:"portfolio-hover"},[i("div",{staticClass:"portfolio-hover-content"},[i("i",{staticClass:"fas fa-plus fa-3x"})])]),i("img",{staticClass:"img-fluid",attrs:{src:a(3794),alt:"..."}})]),i("div",{staticClass:"portfolio-caption"},[i("div",{staticClass:"portfolio-caption-heading"},[t._v("Window")]),i("div",{staticClass:"portfolio-caption-subheading text-muted"},[t._v("Photography")])])])])])])]),i("section",{staticClass:"page-section",attrs:{id:"about"}},[i("div",{staticClass:"container mt-5 pt-5"},[i("div",{staticClass:"text-center"},[i("h2",{staticClass:"section-heading text-uppercase"},[t._v("About")]),i("h3",{staticClass:"section-subheading text-muted"},[t._v("Lorem ipsum dolor sit amet consectetur.")])]),i("ul",{staticClass:"timeline"},[i("li",[i("div",{staticClass:"timeline-image"},[i("img",{staticClass:"rounded-circle img-fluid",attrs:{src:a(6746),alt:"..."}})]),i("div",{staticClass:"timeline-panel"},[i("div",{staticClass:"timeline-heading"},[i("h4",[t._v("2009-2011")]),i("h4",{staticClass:"subheading"},[t._v("Our Humble Beginnings")])]),i("div",{staticClass:"timeline-body"},[i("p",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!")])])])]),i("li",{staticClass:"timeline-inverted"},[i("div",{staticClass:"timeline-image"},[i("img",{staticClass:"rounded-circle img-fluid",attrs:{src:a(1047),alt:"..."}})]),i("div",{staticClass:"timeline-panel"},[i("div",{staticClass:"timeline-heading"},[i("h4",[t._v("March 2011")]),i("h4",{staticClass:"subheading"},[t._v("An Agency is Born")])]),i("div",{staticClass:"timeline-body"},[i("p",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!")])])])]),i("li",[i("div",{staticClass:"timeline-image"},[i("img",{staticClass:"rounded-circle img-fluid",attrs:{src:a(5670),alt:"..."}})]),i("div",{staticClass:"timeline-panel"},[i("div",{staticClass:"timeline-heading"},[i("h4",[t._v("December 2015")]),i("h4",{staticClass:"subheading"},[t._v("Transition to Full Service")])]),i("div",{staticClass:"timeline-body"},[i("p",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!")])])])]),i("li",{staticClass:"timeline-inverted"},[i("div",{staticClass:"timeline-image"},[i("img",{staticClass:"rounded-circle img-fluid",attrs:{src:a(5852),alt:"..."}})]),i("div",{staticClass:"timeline-panel"},[i("div",{staticClass:"timeline-heading"},[i("h4",[t._v("July 2020")]),i("h4",{staticClass:"subheading"},[t._v("Phase Two Expansion")])]),i("div",{staticClass:"timeline-body"},[i("p",{staticClass:"text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!")])])])]),i("li",{staticClass:"timeline-inverted"},[i("div",{staticClass:"timeline-image"},[i("h4",[t._v(" Be Part "),i("br"),t._v(" Of Our "),i("br"),t._v(" Story! ")])])])])])]),i("section",{staticClass:"page-section bg-light",attrs:{id:"team"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-center"},[i("h2",{staticClass:"section-heading text-uppercase"},[t._v("Our Amazing Team")]),i("h3",{staticClass:"section-subheading text-muted"},[t._v("Lorem ipsum dolor sit amet consectetur.")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"team-member"},[i("img",{staticClass:"mx-auto rounded-circle",attrs:{src:a(1604),alt:"..."}}),i("h4",[t._v("Parveen Anand")]),i("p",{staticClass:"text-muted"},[t._v("Lead Designer")]),i("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!","aria-label":"Parveen Anand Twitter Profile"}},[i("i",{staticClass:"fab fa-twitter"})]),i("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!","aria-label":"Parveen Anand Facebook Profile"}},[i("i",{staticClass:"fab fa-facebook-f"})]),i("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!","aria-label":"Parveen Anand LinkedIn Profile"}},[i("i",{staticClass:"fab fa-linkedin-in"})])])]),i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"team-member"},[i("img",{staticClass:"mx-auto rounded-circle",attrs:{src:a(2399),alt:"..."}}),i("h4",[t._v("Diana Petersen")]),i("p",{staticClass:"text-muted"},[t._v("Lead Marketer")]),i("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!","aria-label":"Diana Petersen Twitter Profile"}},[i("i",{staticClass:"fab fa-twitter"})]),i("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!","aria-label":"Diana Petersen Facebook Profile"}},[i("i",{staticClass:"fab fa-facebook-f"})]),i("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!","aria-label":"Diana Petersen LinkedIn Profile"}},[i("i",{staticClass:"fab fa-linkedin-in"})])])]),i("div",{staticClass:"col-lg-4"},[i("div",{staticClass:"team-member"},[i("img",{staticClass:"mx-auto rounded-circle",attrs:{src:a(5783),alt:"..."}}),i("h4",[t._v("Larry Parker")]),i("p",{staticClass:"text-muted"},[t._v("Lead Developer")]),i("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!","aria-label":"Larry Parker Twitter Profile"}},[i("i",{staticClass:"fab fa-twitter"})]),i("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!","aria-label":"Larry Parker Facebook Profile"}},[i("i",{staticClass:"fab fa-facebook-f"})]),i("a",{staticClass:"btn btn-dark btn-social mx-2",attrs:{href:"#!","aria-label":"Larry Parker LinkedIn Profile"}},[i("i",{staticClass:"fab fa-linkedin-in"})])])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-8 mx-auto text-center"},[i("p",{staticClass:"large text-muted"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.")])])])])]),i("div",{staticClass:"py-5"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row align-items-center"},[i("div",{staticClass:"col-md-3 col-sm-6 my-3"},[i("a",{attrs:{href:"#!"}},[i("img",{staticClass:"img-fluid img-brand d-block mx-auto",attrs:{src:a(1094),alt:"...","aria-label":"Microsoft Logo"}})])]),i("div",{staticClass:"col-md-3 col-sm-6 my-3"},[i("a",{attrs:{href:"#!"}},[i("img",{staticClass:"img-fluid img-brand d-block mx-auto",attrs:{src:a(2838),alt:"...","aria-label":"Google Logo"}})])]),i("div",{staticClass:"col-md-3 col-sm-6 my-3"},[i("a",{attrs:{href:"#!"}},[i("img",{staticClass:"img-fluid img-brand d-block mx-auto",attrs:{src:a(8333),alt:"...","aria-label":"Facebook Logo"}})])]),i("div",{staticClass:"col-md-3 col-sm-6 my-3"},[i("a",{attrs:{href:"#!"}},[i("img",{staticClass:"img-fluid img-brand d-block mx-auto",attrs:{src:a(7820),alt:"...","aria-label":"IBM Logo"}})])])])])]),i("section",{staticClass:"page-section",attrs:{id:"contact"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"text-center"},[i("h2",{staticClass:"section-heading text-uppercase"},[t._v("Contact Us")]),i("h3",{staticClass:"section-subheading text-muted"},[t._v("Lorem ipsum dolor sit amet consectetur.")])]),i("form",{attrs:{id:"contactForm","data-sb-form-api-token":"API_TOKEN"}},[i("div",{staticClass:"row align-items-stretch mb-5"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("input",{staticClass:"form-control",attrs:{id:"name",type:"text",placeholder:"Your Name *","data-sb-validations":"required"}}),i("div",{staticClass:"invalid-feedback",attrs:{"data-sb-feedback":"name:required"}},[t._v("A name is required.")])]),i("div",{staticClass:"form-group"},[i("input",{staticClass:"form-control",attrs:{id:"email",type:"email",placeholder:"Your Email *","data-sb-validations":"required,email"}}),i("div",{staticClass:"invalid-feedback",attrs:{"data-sb-feedback":"email:required"}},[t._v("An email is required.")]),i("div",{staticClass:"invalid-feedback",attrs:{"data-sb-feedback":"email:email"}},[t._v("Email is not valid.")])]),i("div",{staticClass:"form-group mb-md-0"},[i("input",{staticClass:"form-control",attrs:{id:"phone",type:"tel",placeholder:"Your Phone *","data-sb-validations":"required"}}),i("div",{staticClass:"invalid-feedback",attrs:{"data-sb-feedback":"phone:required"}},[t._v("A phone number is required.")])])]),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group form-group-textarea mb-md-0"},[i("textarea",{staticClass:"form-control",attrs:{id:"message",placeholder:"Your Message *","data-sb-validations":"required"}}),i("div",{staticClass:"invalid-feedback",attrs:{"data-sb-feedback":"message:required"}},[t._v("A message is required.")])])])]),i("div",{staticClass:"d-none",attrs:{id:"submitSuccessMessage"}},[i("div",{staticClass:"text-center text-white mb-3"},[i("div",{staticClass:"fw-bolder"},[t._v("Form submission successful!")]),t._v(" To activate this form, sign up at "),i("br"),i("a",{attrs:{href:"https://startbootstrap.com/solution/contact-forms"}},[t._v("https://startbootstrap.com/solution/contact-forms")])])]),i("div",{staticClass:"d-none",attrs:{id:"submitErrorMessage"}},[i("div",{staticClass:"text-center text-danger mb-3"},[t._v("Error sending message!")])]),i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn btn-primary btn-xl text-uppercase disabled",attrs:{id:"submitButton",type:"submit"}},[t._v("Send Message ")])])])])])])}],P={name:"SectionCom"},j=P,w=(0,C.Z)(j,L,q,!1,null,"551832ce",null),E=w.exports,S=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"page-top"}},[a("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal1",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"close-modal",attrs:{"data-bs-dismiss":"modal"}},[a("img",{attrs:{src:"assets/image/close-icon.svg",alt:"Close modal"}})]),a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"modal-body"},[a("h2",{staticClass:"text-uppercase"},[t._v("Project Name")]),a("p",{staticClass:"item-intro text-muted"},[t._v("Lorem ipsum dolor sit amet consectetur.")]),a("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"assets/image/portfolio/1.jpg",alt:"..."}}),a("p",[t._v("Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!")]),a("ul",{staticClass:"list-inline"},[a("li",[a("strong",[t._v("Client:")]),t._v(" Threads ")]),a("li",[a("strong",[t._v("Category:")]),t._v(" Illustration ")])]),a("button",{staticClass:"btn btn-primary btn-xl text-uppercase",attrs:{"data-bs-dismiss":"modal",type:"button"}},[a("i",{staticClass:"fas fa-xmark me-1"}),t._v(" Close Project ")])])])])])])])]),a("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal2",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"close-modal",attrs:{"data-bs-dismiss":"modal"}},[a("img",{attrs:{src:"assets/image/close-icon.svg",alt:"Close modal"}})]),a("div",{staticClass:"container mt-5 pt-5"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"modal-body"},[a("h2",{staticClass:"text-uppercase"},[t._v("Project Name")]),a("p",{staticClass:"item-intro text-muted"},[t._v("Lorem ipsum dolor sit amet consectetur.")]),a("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"assets/image/portfolio/2.jpg",alt:"..."}}),a("p",[t._v("Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!")]),a("ul",{staticClass:"list-inline"},[a("li",[a("strong",[t._v("Client:")]),t._v(" Explore ")]),a("li",[a("strong",[t._v("Category:")]),t._v(" Graphic Design ")])]),a("button",{staticClass:"btn btn-primary btn-xl text-uppercase",attrs:{"data-bs-dismiss":"modal",type:"button"}},[a("i",{staticClass:"fas fa-xmark me-1"}),t._v(" Close Project ")])])])])])])])]),a("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal3",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"close-modal",attrs:{"data-bs-dismiss":"modal"}},[a("img",{attrs:{src:"assets/image/close-icon.svg",alt:"Close modal"}})]),a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"modal-body"},[a("h2",{staticClass:"text-uppercase"},[t._v("Project Name")]),a("p",{staticClass:"item-intro text-muted"},[t._v("Lorem ipsum dolor sit amet consectetur.")]),a("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"assets/image/portfolio/3.jpg",alt:"..."}}),a("p",[t._v("Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!")]),a("ul",{staticClass:"list-inline"},[a("li",[a("strong",[t._v("Client:")]),t._v(" Finish ")]),a("li",[a("strong",[t._v("Category:")]),t._v(" Identity ")])]),a("button",{staticClass:"btn btn-primary btn-xl text-uppercase",attrs:{"data-bs-dismiss":"modal",type:"button"}},[a("i",{staticClass:"fas fa-xmark me-1"}),t._v(" Close Project ")])])])])])])])]),a("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal4",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"close-modal",attrs:{"data-bs-dismiss":"modal"}},[a("img",{attrs:{src:"assets/image/close-icon.svg",alt:"Close modal"}})]),a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"modal-body"},[a("h2",{staticClass:"text-uppercase"},[t._v("Project Name")]),a("p",{staticClass:"item-intro text-muted"},[t._v("Lorem ipsum dolor sit amet consectetur.")]),a("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"assets/image/portfolio/4.jpg",alt:"..."}}),a("p",[t._v("Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!")]),a("ul",{staticClass:"list-inline"},[a("li",[a("strong",[t._v("Client:")]),t._v(" Lines ")]),a("li",[a("strong",[t._v("Category:")]),t._v(" Branding ")])]),a("button",{staticClass:"btn btn-primary btn-xl text-uppercase",attrs:{"data-bs-dismiss":"modal",type:"button"}},[a("i",{staticClass:"fas fa-xmark me-1"}),t._v(" Close Project ")])])])])])])])]),a("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal5",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"close-modal",attrs:{"data-bs-dismiss":"modal"}},[a("img",{attrs:{src:"assets/image/close-icon.svg",alt:"Close modal"}})]),a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"modal-body"},[a("h2",{staticClass:"text-uppercase"},[t._v("Project Name")]),a("p",{staticClass:"item-intro text-muted"},[t._v("Lorem ipsum dolor sit amet consectetur.")]),a("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"assets/image/portfolio/5.jpg",alt:"..."}}),a("p",[t._v("Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!")]),a("ul",{staticClass:"list-inline"},[a("li",[a("strong",[t._v("Client:")]),t._v(" Southwest ")]),a("li",[a("strong",[t._v("Category:")]),t._v(" Website Design ")])]),a("button",{staticClass:"btn btn-primary btn-xl text-uppercase",attrs:{"data-bs-dismiss":"modal",type:"button"}},[a("i",{staticClass:"fas fa-xmark me-1"}),t._v(" Close Project ")])])])])])])])]),a("div",{staticClass:"portfolio-modal modal fade",attrs:{id:"portfolioModal6",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"close-modal",attrs:{"data-bs-dismiss":"modal"}},[a("img",{attrs:{src:"assets/image/close-icon.svg",alt:"Close modal"}})]),a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"modal-body"},[a("h2",{staticClass:"text-uppercase"},[t._v("Project Name")]),a("p",{staticClass:"item-intro text-muted"},[t._v("Lorem ipsum dolor sit amet consectetur.")]),a("img",{staticClass:"img-fluid d-block mx-auto",attrs:{src:"assets/image/portfolio/6.jpg",alt:"..."}}),a("p",[t._v("Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!")]),a("ul",{staticClass:"list-inline"},[a("li",[a("strong",[t._v("Client:")]),t._v(" Window ")]),a("li",[a("strong",[t._v("Category:")]),t._v(" Photography ")])]),a("button",{staticClass:"btn btn-primary btn-xl text-uppercase",attrs:{"data-bs-dismiss":"modal",type:"button"}},[a("i",{staticClass:"fas fa-xmark me-1"}),t._v(" Close Project ")])])])])])])])])])}],A={name:"PortCom"},T=A,F=(0,C.Z)(T,S,M,!1,null,"2b6711d6",null),D=F.exports,I={name:"HomeView",components:{PortCom:D,SectionCom:E,FooterCom:k,HeaderCom:g},mounted:function(){d(),l()}},N=I,$=(0,C.Z)(N,i,e,!1,null,null,null),B=$.exports},8333:function(t,s,a){t.exports=a.p+"img/facebook.3b8c552c.svg"},2838:function(t,s,a){t.exports=a.p+"img/google.9c094b57.svg"},7820:function(t,s,a){t.exports=a.p+"img/ibm.3043a9cc.svg"},1094:function(t,s,a){t.exports=a.p+"img/microsoft.63e7c021.svg"},6746:function(t,s,a){t.exports=a.p+"img/1.04a2afb5.jpg"},1047:function(t,s,a){t.exports=a.p+"img/2.dc4cfa0f.jpg"},5670:function(t,s,a){t.exports=a.p+"img/3.823115f9.jpg"},5852:function(t,s,a){t.exports=a.p+"img/4.bd24351f.jpg"},5375:function(t,s,a){t.exports=a.p+"img/1.91d14ba9.jpg"},4726:function(t,s,a){t.exports=a.p+"img/2.a3c52658.jpg"},1518:function(t,s,a){t.exports=a.p+"img/3.96ef0ae4.jpg"},1487:function(t,s,a){t.exports=a.p+"img/4.b3c072a4.jpg"},7350:function(t,s,a){t.exports=a.p+"img/5.a6476c55.jpg"},3794:function(t,s,a){t.exports=a.p+"img/6.cb3af9d0.jpg"},1604:function(t,s,a){t.exports=a.p+"img/1.9726722a.jpg"},2399:function(t,s,a){t.exports=a.p+"img/2.e4e30a21.jpg"},5783:function(t,s,a){t.exports=a.p+"img/3.5cdf3460.jpg"}}]);
//# sourceMappingURL=983-legacy.fc488dcd.js.map