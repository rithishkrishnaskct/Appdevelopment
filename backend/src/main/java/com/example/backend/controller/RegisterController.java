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

import com.example.backend.model.Register;
import com.example.backend.service.RegisterService;
@RestController
@RequestMapping("/reg")
public class RegisterController {
    @Autowired
    RegisterService rs;
    @PostMapping("/register")
    public ResponseEntity<Register> adddata(@RequestBody Register r)
    {
        Register obj=rs.create(r);
        return new ResponseEntity<>(obj,HttpStatus.CREATED);
    }
    @GetMapping("/registers") 
    public List<Register> fetchDepartmentList() 
    { 
        return rs.fetchDepartmentList(); 
    }
    @SuppressWarnings("null")
    @GetMapping("/register/{userId}")
    public ResponseEntity<Register> getById(@PathVariable("userId")int userId)
    {
        try
        {
            return new ResponseEntity<>(rs.getByid(userId),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/sort/{field}")
    public ResponseEntity<List<Register>> get(@PathVariable String field)
    {
        try{
            return new ResponseEntity<>(rs.getbysort(field),HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @PutMapping("/register/{userId}")
    public ResponseEntity<Register> putMethod(@PathVariable("userId") int userId,@RequestBody Register pd)
    {
        if(rs.updateDetails(userId,pd) == true)
        {
            return new ResponseEntity<>(pd,HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }
    @DeleteMapping("/register/{userId}")
    public ResponseEntity<Boolean> delete(@PathVariable("userId") int userId)
    {
        if(rs.deleteEmployee(userId) == true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}