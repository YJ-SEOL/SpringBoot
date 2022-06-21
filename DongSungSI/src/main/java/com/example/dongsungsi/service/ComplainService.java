package com.example.dongsungsi.service;

import com.example.dongsungsi.model.Complain;
import com.example.dongsungsi.paging.Criteria;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.complainspring.service
 * fileName : ComplainService
 * author : ds
 * date : 2022-06-07
 * description :
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-06-07         ds          최초 생성
 */
public interface ComplainService {
    //    id로 조회하는 메소드(결과 : 1건)
    Optional<Complain> findById(long id);

    //    모든 회원 조회하는 메소드(결과 : 여러건)
    //    List<Complain> findAll();
    // Todo : 1개 수정 findAll, 1개 추가 findByEmailContaining
    // 모든 회원 조회하는 메소드(결과 : 여러건)
    List<Complain> findAll(Criteria criteria);

    public List<Complain> findByWriterContaining(Criteria criteria);


    //    회원 저장 / 수정하는 메소드( insert / update )
    Optional<Complain> save(Complain complain);

    //    id로 회원 삭제하는 메소드
    boolean deleteById(Long id);

    //    모든 회원 삭제하는 메소드
    boolean deleteAll();
}











