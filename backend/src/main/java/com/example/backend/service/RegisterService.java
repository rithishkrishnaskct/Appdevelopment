package com.example.backend.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.backend.model.Register;
import com.example.backend.repository.RegisterRepo;


@Service
public class RegisterService {
    @Autowired
    RegisterRepo rr;
     public Register create(Register r)
    {
       
        return rr.save(r);
    } 
    public List<Register> fetchDepartmentList() 
    { 
        return (List<Register>) rr.findAll(); 
    } 
    public Register getByid(int userId)
    {
        return rr.findById(userId).orElse(null);
    }
    public List<Register> getbysort(String field)
    {
        return rr.findAll(Sort.by(Sort.Direction.ASC,field));
    }
    public boolean updateDetails(int userId,Register r)
    {
        try{
            rr.save(r);
        }
        catch(Exception e)
        {
            return false;
        }
        return true;
    }
    public boolean deleteEmployee(int userId)
    {
        if(this.getByid(userId) == null)
        {
            return false;
        }
        rr.deleteById(userId);
        return true;
        }
    
}