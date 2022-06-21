package com.example.dongsungsi.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * packageName : com.example.faqspring.model
 * fileName : Customer
 * author : ds
 * date : 2022-06-07
 * description :
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-06-07         ds          최초 생성
 */
@Getter
@Setter
@ToString
public class Faq {
//    Long(객체), long(일반자료형) => 8byte 정수형
    private Long id; // 회원아이디
    private String title; // 컴플레인 title
    private String content;  // 컴플레인 내용
    private String writer;  // 작성자
    private String deleteYn; // 삭제 여부
    private String insertTime; // 생성날짜
    private String updateTime; // 수정날짜
    private String deleteTime; // 삭제날짜
}











