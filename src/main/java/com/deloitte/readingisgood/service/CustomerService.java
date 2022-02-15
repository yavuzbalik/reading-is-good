package com.deloitte.readingisgood.service;


import com.deloitte.readingisgood.dto.ServiceResponse;

public interface CustomerService {

    ServiceResponse addCustomer();

    ServiceResponse getCustomerOrders();
}
