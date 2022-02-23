package com.deloitte.readingisgood.repository;

import com.deloitte.readingisgood.model.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends MongoRepository<Customer,String> {
    boolean existsByUsername(String username);
    Customer findByUsername(String username);
}
