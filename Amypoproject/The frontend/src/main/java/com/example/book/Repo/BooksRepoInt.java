package com.example.book.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.book.Model.BooksModel;

@Repository
public interface BooksRepoInt extends JpaRepository<BooksModel,Integer> {
    
}
