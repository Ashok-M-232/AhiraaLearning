package com.alpl.www.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alpl.www.entity.StudentInfoEntity;
import com.alpl.www.repository.StudentInfoRepository;

@Service
public class StudentInfoService {

	@Autowired
    StudentInfoRepository studentInfoRepository;

   
    public StudentInfoService(StudentInfoRepository studentInfoRepository) {
        this.studentInfoRepository = studentInfoRepository;
    }

    
   
    public Optional<StudentInfoEntity> getStudentInfo( Long id) {
        return studentInfoRepository.findById(id);
    }
}
