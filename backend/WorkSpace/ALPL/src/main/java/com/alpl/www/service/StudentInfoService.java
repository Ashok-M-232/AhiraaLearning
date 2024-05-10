package com.alpl.www.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alpl.www.repository.StudentInfoRepository;

@Service
public class StudentInfoService {

    private final StudentInfoRepository studentInfoRepository;

    @Autowired
    public StudentInfoService(StudentInfoRepository studentInfoRepository) {
        this.studentInfoRepository = studentInfoRepository;
    }

    // Methods for student info related operations
}
