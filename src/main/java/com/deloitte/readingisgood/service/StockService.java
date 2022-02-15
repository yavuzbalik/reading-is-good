package com.deloitte.readingisgood.service;


import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.model.Stock;

public interface StockService {

    ServiceResponse getStockOfBooks();

    ServiceResponse addBookToStock(Stock stock);
}
