package com.example.book.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.book.Model.BooksModel;
import com.example.book.Repo.BooksRepoInt;

@Service
public class BooksService  {
    
    @Autowired
    private BooksRepoInt fari;

    public List<BooksModel> getdata(){
        return fari.findAll();
    }

    public BooksModel getdatabyid(int id){
        return fari.findById(id).get();
    }

    public BooksModel savedata(BooksModel fam){
        return fari.save(fam);
    }

    public BooksModel updatedata(BooksModel fam,int id){
        fam.setId(id);
        return fari.save(fam);
    }

    public void deletedata(int id){
        fari.deleteById(id);
    }
}
