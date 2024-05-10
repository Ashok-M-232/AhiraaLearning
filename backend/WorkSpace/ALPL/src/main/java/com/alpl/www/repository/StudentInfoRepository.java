package com.alpl.www.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alpl.www.entity.StudentInfoEntity;

public interface StudentInfoRepository extends JpaRepository<StudentInfoEntity, Long> {
    // Custom queries if needed
}
