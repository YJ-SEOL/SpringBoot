package com.example.dongsungsi.service;

import com.example.dongsungsi.dao.CustomerDao;
import com.example.dongsungsi.model.Customer;
import com.example.dongsungsi.paging.Criteria;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.customerspring.service
 * fileName : CustomerServiceImpl
 * author : ds
 * date : 2022-06-07
 * description :
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-06-07         ds          최초 생성
 */
// @Service : 스프링에 객체로 생성
@Service
public class CustomerServiceImpl implements CustomerService {

    //    스프링에 customerDao 이미 생성되어 있음
    //    생성된 객체를 받아오는 어노테이션 : @Autowired
    @Autowired
    private CustomerDao customerDao; // 객체 정의 ( null => 스프링 객체 )

    //    나중에 에러 로그 추적을 위해 하나 만들어둠
    Logger logger = LoggerFactory.getLogger(this.getClass());

    //    id로 회원 조회 하는 메소드
    @Override
    public Optional<Customer> findById(long id) {

        return customerDao.findById(id);
    }

    // Todo : 1개 수정 findAll, 1개 추가 findByEmailContaining
    // 모든 회원 조회 서비스
    @Override
    public List<Customer> findAll(Criteria criteria) {

        return customerDao.findAll(criteria);
    }

    // id로 회원 조회 하는 메소드
    @Override
    public List<Customer> findByEmailContaining(Criteria criteria) {

        // emptyList: List, 빈 객체로 초기화
        List<Customer> customers = Collections.emptyList();

        // Email이 Null인지 체크
        // Null 이면 => " "으로 바꿈
        Optional<String> optionalCriteria = Optional.ofNullable(criteria.getEmail());

        // 테이블의 총 데이터 건 수
        int totalCount = customerDao.selectTotalCount(optionalCriteria.orElse(""));

        // Criteria 객체의 변에 저장: 페이지정보(totalCount, totalPages)
        criteria.setTotalItems(totalCount);

        // 총 페이지 개수 : 테이블 총 건수(totalCount) / 페이지 당 출력할 데이터 개수(size)
        criteria.setTotalPages(totalCount / criteria.getSize());

        if (criteria.getEmail() == null)
            // email이 null 이면 findAll 호출(전체 검색)
            customers = customerDao.findAll(criteria);
        else
            // 아니면 제목 검색
            customers = customerDao.findByEmailContaining(criteria);

        return customers;
    }


    //    회원 생성 / 수정 서비스 ( insert / update )
    @Override
    public Optional<Customer> save(Customer customer) {
//        db 시퀀스 번호 저장을 위한 변수
        long seqId = 0;

//        매개변수 customer 정보 출력
        logger.info("customer {}", customer);

//        customer.getId() 없으면 insert 문 호출( 새로운 회원 생성 )
        if (customer.getId() == null) {
            customerDao.insertCustomer(customer);
        }
        //                         있으면 update 문 호출
        else {
            customerDao.updateCustomer(customer);
        }

//        insert 문 후에는 customer의 id속성에 값이 저장됨(<selectkey>)
        seqId = customer.getId();
        logger.info("seqId {}", seqId);

        return customerDao.findById(seqId);
    }

    @Override
    public boolean deleteById(Long id) {
        int queryResult = 0;

        queryResult = customerDao.deleteCustomer(id);

        return (queryResult >= 1) ? true : false;
    }

    @Override
    public boolean deleteAll() {
        int queryResult = 0;

//        delete / update / insert 문은 결과 실행 후
//        정상 실행되면 건수(삭제/수정/생성)가 결과로 리턴(반환)
        queryResult = customerDao.deleteAll();

        return (queryResult >= 1) ? true : false;
    }
}











