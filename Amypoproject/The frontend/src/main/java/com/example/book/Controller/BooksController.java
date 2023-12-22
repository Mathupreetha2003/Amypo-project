package com.example.book.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.book.Model.BooksModel;
import com.example.book.Service.BooksService;

@RestController
@CrossOrigin("*")
public class BooksController {
    
    @Autowired 
    private BooksService fas;

    @GetMapping("/getbooks")
    public List<BooksModel> getdata(){
        return fas.getdata();
    }
    @GetMapping("/getbooksbyid/{id}")
    public BooksModel getdatabyid(@PathVariable int id){
        return fas.getdatabyid(id);
    }

    @PostMapping("/savebooks")
    public BooksModel savedata(@RequestBody BooksModel fam){
        return fas.savedata(fam);
    }

    @PutMapping("/updatebooks/{id}")
    public BooksModel updatedata(@RequestBody BooksModel fam,@PathVariable int id){
        return fas.updatedata(fam, id);
    }

    @DeleteMapping("/deletebooks/{id}")
    public void deletedata(@PathVariable int id){
        fas.deletedata(id);
    }
}
