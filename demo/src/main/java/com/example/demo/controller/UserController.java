package com.example.demo.controller;
import com.example.demo.dtos.UserDTO;
import com.example.demo.models.User;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/save")
    public ResponseEntity<User> save(User user) {
        Optional<User> savedUser = Optional.ofNullable(userService.save(user));

        if(savedUser.isPresent()) {
            return ResponseEntity.status(HttpStatus.CREATED).body(savedUser.get());
        }
        return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }


}
