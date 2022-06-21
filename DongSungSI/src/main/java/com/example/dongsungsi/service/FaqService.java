package com.example.dongsungsi.service;

import com.example.dongsungsi.model.Faq;
import com.example.dongsungsi.paging.Criteria;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.Faqspring.service
 * fileName : FaqService
 * author : ds
 * date : 2022-06-07
 * description :
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-06-07         ds          최초 생성
 */
public interface FaqService {
    //    id로 조회하는 메소드(결과 : 1건)
    Optional<Faq> findById(long id);

    //    모든 회원 조회하는 메소드(결과 : 여러건)
    //    List<Faq> findAll();
    // Todo : 1개 수정 findAll, 1개 추가 findByEmailContaining
    // 모든 회원 조회하는 메소드(결과 : 여러건)
    List<Faq> findAll(Criteria criteria);

    public List<Faq> findByWriterContaining(Criteria criteria);


    //    회원 저장 / 수정하는 메소드( insert / update )
    Optional<Faq> save(Faq faq);

    //    id로 회원 삭제하는 메소드
    boolean deleteById(Long id);

    //    모든 회원 삭제하는 메소드
    boolean deleteAll();
}











