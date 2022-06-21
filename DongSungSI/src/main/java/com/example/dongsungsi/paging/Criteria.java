package com.example.dongsungsi.paging;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * packageName : com.example.dongsungsi.paging
 * fileName : Criteria
 * author : ds
 * date : 2022-06-10
 * description :
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-06-10         ds          최초 생성
 */
@Getter
@Setter
@ToString
public class Criteria {
    // 현재 페이지 번호
    // Long(객체) long(기본형)
    // Integer(객체) int(기본형)
    private Integer page;

    // 페이지 당 출력할 데이터 개수
    private Integer size;

    // Todo: 아래 1개 추가 ( Customer Vue에서 사용)
    private String email; // 검색 email

    // Todo: Tutorial Vue에서 사용
    private String title; // 검색 제목

    // Todo: Complain Writer 추가
    private String writer; // 작성자 검색

    // 테이블 총 데이터 개수
    private Integer totalItems;

    // 계산 공식 : totalItems(테이블 총 데이터 개수)/size(페이지 당 출력할 데이터 개수)
    private Integer totalPages; // 총 페이지 수


    // 기본 페이지 정보 저장
    public Criteria() {
        this.page = 0; // 현제 페이지번호
        this.size = 3; // 페이지 당 데이터 건수
    }
}
