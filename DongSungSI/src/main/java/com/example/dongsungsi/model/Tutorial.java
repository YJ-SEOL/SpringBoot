package com.example.dongsungsi.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * packageName : com.example.dongsungsi.model
 * fileName : Tutorial
 * author : ds
 * date : 2022-05-25
 * description :
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-05-25         ds          최초 생성
 */
@Getter
@Setter
// 아래가 롬북 라이브러리에서 제공하는 객체 정보를 보여주는 어노테이션
// tutorial@fdsafds => tutorial 객체의 멤버변수 값을 모두 보여줌
// 용어 : 스네이크 표기법 = 언더바 표기법
@ToString
//@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class Tutorial {
    private Long id;
    private String title;
    private String description;
    private String published;
    private String deleteYn;
    private String insertTime;
    private String updateTime;
    private String deleteTime;
}







