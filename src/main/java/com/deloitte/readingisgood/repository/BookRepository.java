package com.deloitte.readingisgood.repository;

import com.deloitte.readingisgood.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends MongoRepository<Book,Integer> {
}
