package com.example.dongsungsi.dao;

import com.example.dongsungsi.model.FreeBoard;
import com.example.dongsungsi.paging.Criteria;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

/**
 * packageName : com.example.FreeBoardspring.dao
 * fileName : FreeBoardDao
 * author : ds
 * date : 2022-06-07
 * description :
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-06-07         ds          최초 생성
 */
// mybatis 사용시 아래 어노테이션을 붙임
//    인터페이스 구현 => .xml에서 함(스프링에 자동 객체 생성)
@Mapper
public interface FreeBoardDao {
    // Todo : 1개 수정(findAll), 2개 추가(findByEmailContaining, selectTotalCount)
    // 전체 컴플레인 조회 메소드
    // Todo: findAll() -> findAll(Criteria criteria)
    List<FreeBoard> findAll(Criteria criteria);

    // Email 검색 메소드
    List<FreeBoard> findByWriterContaining(Criteria criteria);

    // Email 검색 시 총 건 수 메소드
    int selectTotalCount(String email);

    //    id로 컴플레인 조회 메소드
    Optional<FreeBoard> findById(Long id);

    //    컴플레인 생성 메소드
    long insertFreeBoard(FreeBoard freeboard);

    //    컴플레인 수정 메소드
    long updateFreeBoard(FreeBoard freeboard);

    //   id로 컴플레인 삭제 메소드
    int deleteFreeBoard(Long id);

    //    전체 컴플레인 삭제 메소드
    int deleteAll();
}












