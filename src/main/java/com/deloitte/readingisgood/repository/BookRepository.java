package com.deloitte.readingisgood.repository;

import com.deloitte.readingisgood.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends MongoRepository<Book,String> {
    Book findBookById(String bookId);
}
