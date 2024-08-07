package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.backend.model.Payment;
import com.example.backend.repository.PaymentRepo;

@Service
public class PaymentService {
    @Autowired
    PaymentRepo rr;

    public Payment create(Payment r) {
        return rr.save(r);
    } 

    public List<Payment> fetchDepartmentList() { 
        return (List<Payment>) rr.findAll(); 
    } 

    public Payment getByid(int userId) {
        return rr.findById(userId).orElse(null);
    }

    public List<Payment> getbysort(String field) {
        return rr.findAll(Sort.by(Sort.Direction.ASC, field));
    }

    public boolean updateDetails(int userId, Payment r) {
        if (rr.findById(userId).isEmpty()) {
            return false;
        }
        try {
            rr.save(r);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public boolean deleteEmployee(int userId) {
        if (this.getByid(userId) == null) {
            return false;
        }
        rr.deleteById(userId);
        return true;
    }
}