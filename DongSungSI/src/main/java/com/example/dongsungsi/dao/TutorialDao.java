package com.example.dongsungsi.dao;

import com.example.dongsungsi.model.Tutorial;
import com.example.dongsungsi.paging.Criteria;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.dongsungsi.dao
 * fileName : TutoriaDao
 * author : ds
 * date : 2022-05-25
 * description : DB CRUD를 위한 인터페이스 ( xml 마이바이티 연동 )
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-05-25         ds          최초 생성
 */
@Mapper
public interface TutorialDao {

//    화면에서 publish 버튼을 클릭할 때 적용되는 메소드
    List<Tutorial> findByPublished(String published);

    // Todo: 2개 수정(findByTitleContaining, findAll), 1개 추가(selectTotalCount)
//    제목 검색을 위한 메소드
    List<Tutorial> findByTitleContaining(Criteria criteria);
//  모든 데이터 목록 조회
    List<Tutorial> findAll(Criteria criteria);

    // 제목에 따른 데이터 건수를 세는 메소드
    int selectTotalCount(String title);

//    id에 해당하는 값을 조회
//    Optional : null 을 방지하는 클래스
    Optional<Tutorial> findById(Long id);

//    Tutorial 테이블에 데이터 넣기 메소드
    int insertTutorial(Tutorial tutorial);
//    Tutorial 테이블에 데이터 수정 메소드
    int updateTutorial(Tutorial tutorial);
//    Tutorial 테이블에 데이터 삭제 메소드 ( deleteYn = 'Y' )
    int deleteTutorial(Long id);
//    Tutorial 테이블에 데이터 모두 삭제 메소드 ( deleteYn = 'Y' )
    int deleteAll();
}











