package com.deloitte.readingisgood.service;


import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.model.Stock;

public interface StockService {

    ServiceResponse getStockOfBooks();

    ServiceResponse getStockOfBooks(String bookId);

    ServiceResponse addBookToStock(Stock stock);

    boolean updateStockByOrder(String bookId,Integer quantity);

    boolean updateStockByPurchase(String bookId,Integer quantity);
}
