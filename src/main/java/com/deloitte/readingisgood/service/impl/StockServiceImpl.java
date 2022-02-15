package com.deloitte.readingisgood.service.impl;

import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.dto.StockDto;
import com.deloitte.readingisgood.model.Stock;
import com.deloitte.readingisgood.repository.StockRepository;
import com.deloitte.readingisgood.service.StockService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class StockServiceImpl implements StockService {

    private static final Logger LOG = LoggerFactory.getLogger(StockServiceImpl.class.getName());


    @Autowired
    StockRepository stockRepository;



    @Override
    public ServiceResponse getStockOfBooks() {
        return null;
    }

    @Override
    public ServiceResponse addBookToStock(Stock stock) {
        LOG.info("add book to stock started");
        Stock res = stockRepository.save(stock);
        LOG.info("add book to stock finished "+res);
        return null;
    }
}
