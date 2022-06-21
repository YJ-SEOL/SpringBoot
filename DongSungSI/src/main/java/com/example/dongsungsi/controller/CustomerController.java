package com.example.dongsungsi.controller;

import com.example.dongsungsi.model.Customer;
import com.example.dongsungsi.model.Tutorial;
import com.example.dongsungsi.paging.Criteria;
import com.example.dongsungsi.service.CustomerServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * packageName : com.example.customerspring.controller
 * fileName : CustomerController
 * author : ds
 * date : 2022-06-07
 * description :
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-06-07         ds          최초 생성
 */
// 기본 보안 주소 허용 : http://localhost:8080
//@CrossOrigin(origins = "http://localhost:8080")
// @RestController : 통신을 json형태로 주고받고 싶을때 사용
@RestController
// @RequestMapping("/api") : http://localhost:8000/api
@RequestMapping("/api")
public class CustomerController {

    //    logger 찍기를 위한 객체 만듬
    Logger logger = LoggerFactory.getLogger(this.getClass());

    //  @Autowired : 스프링 객체 하나 받아오기
    @Autowired
    private CustomerServiceImpl customerService; // 객체정의(null => 스프링객체)


    //    모든 회원 조회 메뉴
    @GetMapping("/customers")
    public ResponseEntity<Map<String, Object>> getAllCustomersPage(Criteria criteria) {

        logger.info("criteria(Vue에서 전송됨) {}", criteria);

        // 모든 회원 조회 서비스 호출 : findByEmailContaining
        // email 없으면 findAll, 있으면 findByEmailContaining
        List<Customer> customers = customerService.findByEmailContaining(criteria);
        logger.info("criteria {}", criteria);

        try {
            if (customers.isEmpty()) {
            // Vue로 내용물 없다고 전송(HttpStatus.NO_CONTENT)
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            logger.info("실행 후 criteria {}", criteria);

            // Todo : Map에 넣어 객체 + 페이지 정보를 Vue로 전송
            Map<String, Object> response = new HashMap<>();
            response.put("customers", customers);
            // page : 현재 페이지
            response.put("currentPage", criteria.getPage());
            // totalItems : 총 데이터 건 수
            response.put("totalItems", criteria.getTotalItems());
            // totalPages : 총 페이지 수
            response.put("totalPages", criteria.getTotalPages());


//            Vue에 성공메세지 + 객체를 전송
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception ex) {
            logger.error(ex.getMessage(), ex);
//            Vue 에 에러메세지 전송
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    회원 생성 메뉴
    @PostMapping("/customers")
    public ResponseEntity<Object> createCustomer(@RequestBody Customer customer) {

//        save 리턴값 Optional<Customer> => save(customer).get() 객체를 꺼냄
        Customer savedCustomer = customerService.save(customer).get();
        try {
//            Vue에 객체 + 성공메세지 전송
            return new ResponseEntity<Object>(savedCustomer, HttpStatus.OK);
        } catch (Exception ex) {
            logger.error(ex.getMessage(), ex);
//            Vue에 보낼 에러 메세지 전송
            return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
        }
    }

    //    id로 회원 조회 메뉴
    @GetMapping("/customers/{id}")
    public ResponseEntity<Object> getCustomerById(@PathVariable("id") Long id) {
//        id로 회원 조회 하는 서비스를 호출 ( Optional 떼내기 : get() )
        Customer customer = customerService.findById(id).get();

        try {
            if (customer != null) {
//                성공시 Vue에 객체 + 성공메세지 전송
                return new ResponseEntity<Object>(customer, HttpStatus.OK);
            } else {
//                Vue에 데이터가 없을 경우 Not found 전송
                return new ResponseEntity<Object>(HttpStatus.NOT_FOUND);
            }

        } catch (Exception ex) {
            logger.error(ex.getMessage(), ex);
//            Vue에 에러 메세지 전송
            return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
        }
    }

    // id 회원 수정 메뉴
    // Vue에서 전송 : url 매개변수 + 객체
    // @PathVariable : url 매개변수를 받는 어노테이션
    // @RequestBody : 객체를 받는 어노테이션
    @PutMapping("/customers/{id}")
    public ResponseEntity<Object> updateCustomer(@PathVariable("id") Long id, @RequestBody Customer customer) {
        try {
            // customer에 id값 저장
            customer.setId(id);
            // save : id가 null일 경우 insert, id가 null이 아닐 경우 update
            // Optional<Customer> => Customer 객체를 꺼내려면 .get()메소드 호출
            Customer savedCustomer = customerService.save(customer).get();
            // Vue에 DB에 저장된 객체 + 상태메세지(OK) 전송
            return new ResponseEntity<Object>(savedCustomer, HttpStatus.OK);
        } catch (Exception ex) {
            logger.error(ex.getMessage(), ex);
            // Vue 에러 메세지 전송
            return new ResponseEntity<Object>(HttpStatus.BAD_REQUEST);
        }
    }

    // id로 회원 삭제 메뉴
    // /customers/deletion/${id}
    @PutMapping("/customers/deletion/{id}")
    public ResponseEntity<HttpStatus> deleteCustomer(@PathVariable("id") Long id) {

        try {
            // id로 삭제 서비스 호출(내부적으로 update문 실행됨)
            customerService.deleteById(id);
            return new ResponseEntity<HttpStatus>(HttpStatus.OK);
        } catch (Exception ex) {
            logger.error(ex.getMessage(), ex);
            // 웹 애플리케이션 개발: 클라이언트(Vue, React, HTML) <-> 서버(SpringBoot, Node)
            // Vue(클라이언트)에 에러메세지 전송
            return new ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST);
        }
    }
}










