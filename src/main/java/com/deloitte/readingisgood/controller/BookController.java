package com.deloitte.readingisgood.controller;

import com.deloitte.readingisgood.dto.BookDto;
import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.dto.StockDto;
import com.deloitte.readingisgood.model.Book;
import com.deloitte.readingisgood.model.Stock;
import com.deloitte.readingisgood.service.BookService;
import com.deloitte.readingisgood.service.StockService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController()
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {

    private static final Logger LOG = LoggerFactory.getLogger(BookController.class.getName());

    @Autowired
    BookService bookService;

    @Autowired
    StockService stockService;


    @GetMapping()
    public ResponseEntity<ServiceResponse> getAllBooks(){
        LOG.info("get all books started");
        ServiceResponse response = bookService.getAllBooks();
        LOG.info("get all books returned");
        return new ResponseEntity<ServiceResponse>(response,response.getStatus());
    }

    @PostMapping()
    public ResponseEntity<ServiceResponse> createBook(@RequestBody BookDto bookDto){
        LOG.info("add book started");
        ServiceResponse response = bookService.createBook(bookDto);
        LOG.info("add book returned");
        return new ResponseEntity<ServiceResponse>(response,response.getStatus());
    }

}
