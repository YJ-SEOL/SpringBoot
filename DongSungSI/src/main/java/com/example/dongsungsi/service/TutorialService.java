package com.example.dongsungsi.service;

import com.example.dongsungsi.model.Tutorial;
import com.example.dongsungsi.paging.Criteria;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.dongsungsi.service
 * fileName : TutorialService
 * author : ds
 * date : 2022-05-25
 * description : DAO, Model 이용해서 업무로직을 구성하는 클래스
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-05-25         ds          최초 생성
 */
public interface TutorialService {

    public Optional<Tutorial> findById(long id);

    public List<Tutorial> findByPublished(String published);

    // Todo : 2개 수정 -> findByTitleContaining, findAll
    public List<Tutorial> findByTitleContaining(Criteria criteria);
    public List<Tutorial> findAll(Criteria criteria);

//    insert / update 같이 구성되는 메소드
    public boolean save(Tutorial tutorial);

    public boolean deleteById(Long id);
    public boolean deleteAll();
}








