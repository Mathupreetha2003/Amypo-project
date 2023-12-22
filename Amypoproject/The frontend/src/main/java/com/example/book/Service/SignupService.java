package com.example.book.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.book.Model.SignupModel;

import com.example.book.Repo.SignupRepoInt;

@Service
public class SignupService  {
    
    @Autowired
    private SignupRepoInt sri;

    public List<SignupModel> getdata(){
        return sri.findAll();
    }

    public SignupModel getdatabyid(int id){
        return sri.findById(id).get();
    }

    public SignupModel savedata(SignupModel sm){
        return sri.save(sm);
    }

    public SignupModel updatedata(SignupModel sm,int id){
        sm.setId(id);
        return sri.save(sm);
    }

    public void deletedata(int id){
        sri.deleteById(id);
    }
}
