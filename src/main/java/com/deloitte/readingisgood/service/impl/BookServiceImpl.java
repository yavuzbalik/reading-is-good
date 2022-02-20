package com.deloitte.readingisgood.service.impl;

import com.deloitte.readingisgood.common.PersistenceAdapter;
import com.deloitte.readingisgood.dto.BookDto;
import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.dto.StockDto;
import com.deloitte.readingisgood.model.Book;
import com.deloitte.readingisgood.model.Stock;
import com.deloitte.readingisgood.repository.BookRepository;
import com.deloitte.readingisgood.repository.StockRepository;
import com.deloitte.readingisgood.service.BookService;
import com.deloitte.readingisgood.service.StockService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@PersistenceAdapter
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private static final Logger LOG = LoggerFactory.getLogger(BookServiceImpl.class.getName());

    @Autowired
    private final BookRepository bookRepository;

    @Autowired
    private final StockRepository stockRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private StockService stockService;

    @Override
    public ServiceResponse createBook(BookDto bookDto) {
        LOG.info("add book to db started");
        Book book = modelMapper.map(bookDto,Book.class);
        Book response = bookRepository.save(book);

        StockDto stockDto = new StockDto(response.getId(),bookDto.getStock());
        Stock stock = modelMapper.map(stockDto,Stock.class);
        ServiceResponse response1 = stockService.addBookToStock(stock);
        LOG.info("book added to db ");

        return new ServiceResponse(HttpStatus.OK,"book added",response);
    }

    @Override
    public ServiceResponse getAllBooks() {
        LOG.info("get all books from db started");
        List<Book> allBooks = bookRepository.findAll();
        LOG.info("get all books from db returned");
        return new ServiceResponse(HttpStatus.OK,"all books returned",allBooks);
    }

}
