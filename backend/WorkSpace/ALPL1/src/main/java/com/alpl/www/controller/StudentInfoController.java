package com.alpl.www.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alpl.www.entity.StudentInfoEntity;
import com.alpl.www.service.StudentInfoService;

@RestController
@RequestMapping("/ALPL")
@CrossOrigin(origins = "http://localhost:3000") // Replace with the origin of your React app
public class StudentInfoController {
    
    @Autowired
    private StudentInfoService studentInfoService;

    public StudentInfoController(StudentInfoService studentInfoService) {
        this.studentInfoService = studentInfoService;
    }

    @GetMapping("/student/{id}")
    public Optional<StudentInfoEntity> getStudentInfo(@PathVariable Long id) {
        return studentInfoService.getStudentInfo(id);

    }
}
