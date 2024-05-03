package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
public class BlockPlacementController {

    @GetMapping("/block")
    public String checkBlockPlacement() {
        Random random = new Random();
        int row = random.nextInt(17); // 블럭이 격자에서 넘어가지 않도록 하기 위해 17로 제한
        int col = random.nextInt(7); // 7로 제한하여 넘어가지 않도록
        if (row >= 0 && col >= 0) {
            return "블럭이 (" + row + ", " + col + ") 위치에 삽입되었습니다.";
        } else {
            return "블럭 삽입 위치 생성 오류";
        }
    }
}