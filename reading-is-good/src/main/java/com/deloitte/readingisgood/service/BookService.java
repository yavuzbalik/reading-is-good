package com.deloitte.readingisgood.service;


import com.deloitte.readingisgood.dto.BookDto;
import com.deloitte.readingisgood.dto.ServiceResponse;

public interface BookService {

    ServiceResponse createBook(BookDto bookDto);

    ServiceResponse getAllBooks();
}
