package com.alpl.www.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alpl.www.entity.StudentInfoEntity;

@Repository
public interface StudentInfoRepository extends JpaRepository<StudentInfoEntity, Long> {
    // Custom queries if needed
}