package com.deloitte.readingisgood.service;


import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.model.Book;

public interface BookService {

    ServiceResponse createBook(Book book);

    ServiceResponse getAllBooks();
}
