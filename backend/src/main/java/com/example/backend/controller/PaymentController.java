package com.example.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Payment;
import com.example.backend.service.PaymentService;

@RestController
@RequestMapping("/pay")
public class PaymentController {
    @Autowired
    PaymentService paymentService;

    @PostMapping("/payment")
    public ResponseEntity<Payment> adddata(@RequestBody Payment payment) {
        Payment createdPayment = paymentService.create(payment);
        return new ResponseEntity<>(createdPayment, HttpStatus.CREATED);
    }

    @GetMapping("/payments")
    public List<Payment> fetchDepartmentList() {
        return paymentService.fetchDepartmentList();
    }

    
    @GetMapping("/payment/{userId}")
    public ResponseEntity<Payment> getById(@PathVariable("userId") int userId) {
        try {
            return new ResponseEntity<>(paymentService.getByid(userId), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/sort/payment/{field}")
    public ResponseEntity<List<Payment>> get(@PathVariable String field) {
        try {
            return new ResponseEntity<>(paymentService.getbysort(field), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/payment/{userId}")
    public ResponseEntity<Payment> putMethod(@PathVariable("userId") int userId, @RequestBody Payment payment) {
        if (paymentService.updateDetails(userId, payment)) {
            return new ResponseEntity<>(payment, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/payment/{userId}")
    public ResponseEntity<Boolean> delete(@PathVariable("userId") int userId) {
        if (paymentService.deleteEmployee(userId)) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }
}