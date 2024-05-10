package com.alpl.www.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.alpl.www.entity.StudentInfoEntity;
import com.alpl.www.service.StudentInfoService;

@RestController
public class StudentInfoController {

    private final StudentInfoService studentInfoService;

    @Autowired
    public StudentInfoController(StudentInfoService studentInfoService) {
        this.studentInfoService = studentInfoService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody StudentInfoEntity studentInfoEntity) {
        // Logic for student info authentication
        // Return appropriate response or token
    }
}
