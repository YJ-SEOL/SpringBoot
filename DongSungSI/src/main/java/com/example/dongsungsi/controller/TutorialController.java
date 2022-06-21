package com.example.dongsungsi.controller;

import com.example.dongsungsi.model.Tutorial;
import com.example.dongsungsi.paging.Criteria;
import com.example.dongsungsi.service.TutorialServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * packageName : com.example.dongsungsi.controller
 * fileName : TutorialController
 * author : ds
 * date : 2022-05-25
 * description : 일종의 메뉴 ( URL 정보 )
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2022-05-25         ds          최초 생성
 */
// cors 문제 ? 브라우저 보안상에 문제로 ip같은데 포트가 다를 경우 디폴트 통신 거절
//    허락을 구해야함 : @CrossOrigin(origins = "http://localhost:8080")
//    http://localhost:8080 : 프론트엔드의 포트번호를 지정
@CrossOrigin(origins = "http://localhost:8080")
//@RestController : REST API 호출을 위한 어노테이션 , JSON형태로 들어옴
@RestController
// http://localhost:8000/api
@RequestMapping("/api")
public class TutorialController {

    //    post("/tutorials", data);
//    http.get("/tutorials");
//    http.get(`/tutorials/${id}`);
    @Autowired
    TutorialServiceImpl tutorialService; // 객체 정의 ( null ) => 스프링객체 받기

    Logger logger = LoggerFactory.getLogger(this.getClass());

    //    @PostMapping : insert 문 호출 / update 문 호출
//    ResponseEntity : frontend 요청시 결과를 전달할 객체
    @PostMapping("/tutorials")
    public ResponseEntity<Tutorial>
    createTutorial(@RequestBody Tutorial tutorial) {

        logger.info("createTutorial : tutorial {} : ", tutorial);
//        insert or update 호출 ( id 값을 체크 )
        boolean bSuccess = tutorialService.save(tutorial);

        try {
            if (bSuccess == true) {
//                정상 실행 된 경우
//                ResponseEntity<>(매개변수객체, 상태정보)
                return new ResponseEntity<>(tutorial, HttpStatus.CREATED);
            }
//            정상 실행안된 경우 : NOT_FOUND 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
//            DB 에러가 났을경우 : INTERNAL_SERVER_ERROR 프론트엔드로 전송
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    @GetMapping : Select 문 실행
    @GetMapping("/tutorials/{id}")
    public ResponseEntity<Tutorial>
    getTutorialById(@PathVariable("id") long id) {
//        Optional<Tutorial> : Tutorial 이 null이면 "" 바꿔줌
//                           : 목적 ) null포인트 에러 방지
        Optional<Tutorial> tutorial = tutorialService.findById(id);

//        Optional 메소드 : 값이 있으면
        if (tutorial.isPresent()) {
//            ResponseEntity<>(객체, 상태정보) => 프론트엔드로 전송
            return new ResponseEntity<>(tutorial.get(), HttpStatus.OK);
        } else {
//            프론트엔드로 전송 : NOT_FOUND
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //   @PathVariable : Rest API 호출 :  http://localhost:8000/board/{id}
//   @RequestParam : 전통 호출(쿼리스트링) :http://locahost:8000/board?name=id
    // Todo : 아래 getTitleTutorials 수정 => getAllTitlePage
    @GetMapping("/tutorials")
    public ResponseEntity<Map<String, Object>>
    getAllTitlePage(Criteria criteria) {
        logger.info("criteria {}", criteria); // totalItems, totalPages = null
//        title(제목)을 조회하는 서비스를 호출 : 결과가 여러건이 나옴(List)
        // totalItems, totalPages 계산해서 criteria 객체에 저장
        List<Tutorial> tutorials =
                tutorialService.findByTitleContaining(criteria);
        logger.info("criteria {}", criteria);

        try {
            if (tutorials.isEmpty()) {
//                조회 데이터가 없으면
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            // totalItems, totalPages = 값이 있음
            logger.info("criteria {}", criteria);

            // Todo : Map에 넣어 객체 + 페이지 정보를 Vue로 전송
            Map<String, Object> response = new HashMap<>();
            response.put("tutorials", tutorials);
            // gage : 현재 페이지
            response.put("currentPage", criteria.getPage());
            // totalItems : 총 데이터 건 수
            response.put("totalItems", criteria.getTotalItems());
            // totalPages : 총 페이지 수
            response.put("totalPages", criteria.getTotalPages());

//            조회 데이터가 있으면 : tutorials 전송, 상태정보 (OK ) 전송
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
//            DB에러가 날경우
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    UPDATE : @PutMapping
//    @PathVariable : URL {}
//    @RequestBody : json 객체형태로 데이터 받기
    @PutMapping("/tutorials/{id}")
    public ResponseEntity<Tutorial>
    updateTutorial(@PathVariable("id") long id,
                   @RequestBody Tutorial tutorial) {
//        id에 해당하는 데이터가 있는지 조회
//        Optional<객체> : 객체가 null이면 "" 자동으로 바꿈( 널포인트에러 방지 )
        Optional<Tutorial> tutorialData = tutorialService.findById(id);

        if (tutorialData.isPresent()) {
//            tutorialData 가 있으면 save 호출( id가 있으면 update 가 됨 )
            boolean bSuccess = tutorialService.save(tutorial);
            if (bSuccess == true) {
//                save 호출이 성공하면
                return new ResponseEntity<>(tutorial, HttpStatus.CREATED);
            }
//            save 호출이 실패하면
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        } else {
//            tutorialData 가 없으면
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //    @PutMapping : update 문 실행
//    아래 delete 메소드 호출은 내부적으로 (컬럼 delete_yn = 'Y')
    @PutMapping("/tutorials/deletion/{id}")
    public ResponseEntity<HttpStatus>
    deleteTutorial(@PathVariable("id") long id) {
//        update 문 호출( DELETE_YN = 'Y' )
        boolean bSuccess = tutorialService.deleteById(id);

//        프론트엔드 쪽으로 상태정보를 보내줌
        try {
            if (bSuccess == true) {
//                udpate문이 성공했을 경우
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
//            update문이 실패했을 경우( 0건 수정이 될경우 )
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
//            DB 에러가 날경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    update :  @PutMapping
//    deleteAll : 모두삭제 ( 내부적으로 모든 데이터를 DELETE_YN = 'Y' )
    @PutMapping("/tutorials")
    public ResponseEntity<HttpStatus> deleteAllTutorials() {
//        update 문 실행 : 모든 데이터를 DELETE_YN = 'Y'
        boolean bSuccess = tutorialService.deleteAll();

//        프론트엔드쪽으로 응답정보를 보내줌
        try {
            if (bSuccess == true) {
//                성공했을 때 프론트엔드로 NO_CONTENT 로 보냄
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
//            실패했을 때(0건 update 되었을때 )
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
//            DB 에러가 났을 경우
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    //    @GetMapping : Select 문 호출 : 결과가 여러건이 나옴(List<>)
    @GetMapping("/tutorials/published")
    public ResponseEntity<List<Tutorial>> findByPublished() {

//        테이블 컬럼중에 published 가 'Y'인 데이터만 조회
        List<Tutorial> tutorials = tutorialService.findByPublished("Y");

//        프론트엔드쪽에 상태정보를 전송
        try {
            if (tutorials.isEmpty()) {
//                tutorials가 없으면
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
//            tutorials가 있으면 객체정보, 상태정보 전송
            return new ResponseEntity<>(tutorials, HttpStatus.OK);
        } catch (Exception e) {
//            DB 가 에러가 나면
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}








