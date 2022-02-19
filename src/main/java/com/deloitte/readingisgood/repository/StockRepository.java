package com.deloitte.readingisgood.repository;

import com.deloitte.readingisgood.model.Stock;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepository extends MongoRepository<Stock,String> {
    Stock findStockByBookId(String bookId);
}
