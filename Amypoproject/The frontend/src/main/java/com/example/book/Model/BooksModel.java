package com.example.book.Model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="books")
public class  BooksModel{
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String bookname;
    private String username;
    private String category;
    private int availability;
    private String entrydate;
    private int price;
}
