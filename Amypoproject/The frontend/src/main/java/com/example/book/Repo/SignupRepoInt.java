package com.example.book.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.book.Model.SignupModel;

@Repository
public interface SignupRepoInt extends JpaRepository<SignupModel,Integer> {
    
}
