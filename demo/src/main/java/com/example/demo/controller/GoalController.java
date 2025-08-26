package com.example.demo.controller;

import com.example.demo.models.Goal;
import org.apache.coyote.Response;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/goal")
public class GoalController {

    @RequestMapping("/save")
    public ResponseEntity<Goal> save(@RequestBody GoalDTO goal) {
        return null;
    }

}
