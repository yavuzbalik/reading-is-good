package com.deloitte.readingisgood.service;


import com.deloitte.readingisgood.dto.CustomerDto;
import com.deloitte.readingisgood.dto.ServiceResponse;

public interface CustomerService {

    ServiceResponse signup(CustomerDto customerDto);

    ServiceResponse signin(String username, String password);


    ServiceResponse getCustomerOrders();
}
