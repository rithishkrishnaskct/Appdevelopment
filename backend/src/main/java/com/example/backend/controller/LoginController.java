package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.model.Login;
import com.example.backend.service.LoginService;

import java.util.List;

@RestController
public class LoginController {
    
    @Autowired
    LoginService ls;

    @PostMapping("/login/add")
    public ResponseEntity<Login> addLogin(@RequestBody Login l) {
        Login obj = ls.create(l);
        String username = obj.getUsername();
        return new ResponseEntity<>(obj, HttpStatus.CREATED);
    }
    
    @GetMapping("/login/getId/{loginId}")
    public ResponseEntity<Login> get(@PathVariable("loginId") int loginId) {
        try {
            Login obj = ls.getById(loginId);
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/login/getAll")
    public ResponseEntity<List<Login>> getAll() {
        try {
            List<Login> obj = ls.getAll();
            return new ResponseEntity<>(obj, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/login/update/{loginId}")
    public ResponseEntity<Login> putMethod(@PathVariable("loginId") int loginId, @RequestBody Login l) {
        if (ls.updateLogin(loginId, l) == null) {
            return new ResponseEntity<>(l, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @DeleteMapping("/login/delete/{loginId}")
    public ResponseEntity<Boolean> deleteMethod(@PathVariable("loginId") int loginId) {
        if (ls.deleteLogin(loginId) == true) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }
}