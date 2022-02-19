package com.deloitte.readingisgood.controller;

import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.repository.StockRepository;
import com.deloitte.readingisgood.service.StockService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/stocks")
@RequiredArgsConstructor
public class StockController {

    private static final Logger LOG = LoggerFactory.getLogger(BookController.class.getName());

    @Autowired
    StockService stockService;

    @GetMapping()
    public ResponseEntity<ServiceResponse> getAllStocks(){
        LOG.info("get all stocks started");
        ServiceResponse response = stockService.getStockOfBooks();
        LOG.info("get all stocks returned");
        return new ResponseEntity<ServiceResponse>(response,response.getStatus());
    }
}
