package com.job_seeker.controller;

import com.job_seeker.dto.LogInDTO;
import com.job_seeker.dto.UserDTO;
import com.job_seeker.model.User;
import com.job_seeker.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody UserDTO userDTO) {
        try {
            userService.signUp(userDTO);
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<String> signIn(@RequestBody LogInDTO logInDTO) throws Exception {
        try {
            userService.signIn(logInDTO);
            return ResponseEntity.ok("Sign in successful");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}

