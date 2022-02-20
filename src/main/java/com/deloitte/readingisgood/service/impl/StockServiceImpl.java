package com.deloitte.readingisgood.service.impl;

import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.dto.StockDto;
import com.deloitte.readingisgood.model.Stock;
import com.deloitte.readingisgood.repository.StockRepository;
import com.deloitte.readingisgood.service.StockService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class StockServiceImpl implements StockService {

    private static final Logger LOG = LoggerFactory.getLogger(StockServiceImpl.class.getName());


    @Autowired
    StockRepository stockRepository;


//
//    @Override
//    public List<Stock> getAllStockOfBooks() {
//        LOG.info("add book to stock started");
//        List<Stock> allStocks = stockRepository.findAll();
//        LOG.info("add book to stock finished "+allStocks);
//        return allStocks;
//    }
//
//    @Override
//    public Stock getStockOfABook(String bookId) {
//        LOG.info("add book to stock started");
//        Stock res = stockRepository.findStockByBookId(bookId);
//        LOG.info("add book to stock finished "+res);
//        return res;
//    }

    @Override
    public ServiceResponse getStockOfBooks() {
        return null;
    }

    @Override
    public ServiceResponse getStockOfBooks(String bookId) {
        return null;
    }

    @Override
    public ServiceResponse addBookToStock(Stock stock) {
        LOG.info("add book to stock started");
        Stock res = stockRepository.save(stock);
        LOG.info("add book to stock finished "+res);
        return null;
    }
    @Override
    public boolean updateStockByOrder(String bookId, Integer quantity){
        Stock stock = stockRepository.findStockByBookId(bookId);
        stock.setStock(stock.getStock()-quantity);
        stockRepository.save(stock);

        return true;

    }
    @Override
    public ServiceResponse updateStockByPurchase(StockDto stockDto){
        System.out.println("book id is "+stockDto.getBookId());
        Stock stock = stockRepository.findStockByBookId(stockDto.getBookId());
        System.out.println("stock is "+stock);
        if(stock!=null){
            stock.setStock(stockDto.getStock());
            stockRepository.save(stock);
            return new ServiceResponse(HttpStatus.OK,"stocks updated",true);
        }
        else{
            return new ServiceResponse(HttpStatus.BAD_REQUEST,"book is not in stock",false);
        }



    }
}
