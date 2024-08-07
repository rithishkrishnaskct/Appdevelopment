package com.example.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.Register;


@Repository
public interface RegisterRepo extends JpaRepository<Register,Integer> {
    
}