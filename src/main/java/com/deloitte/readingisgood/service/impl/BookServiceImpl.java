package com.deloitte.readingisgood.service.impl;

import com.deloitte.readingisgood.dto.BookDto;
import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.model.Book;
import com.deloitte.readingisgood.repository.BookRepository;
import com.deloitte.readingisgood.service.BookService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class BookServiceImpl implements BookService {

    private static final Logger LOG = LoggerFactory.getLogger(BookServiceImpl.class.getName());

    @Autowired
    @Qualifier("bookRepository")
    BookRepository bookRepository;

    @Override
    public ServiceResponse createBook(BookDto bookDto) {
        return null;
    }

    @Override
    public ServiceResponse getAllBooks() {
        LOG.info("get all books started");
        List<Book> allBooks = bookRepository.findAll();
        LOG.info("get all books returned");
        return new ServiceResponse(HttpStatus.OK,"all books returned",allBooks);
    }
}
