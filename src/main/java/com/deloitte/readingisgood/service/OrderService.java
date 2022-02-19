package com.deloitte.readingisgood.service;


import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.model.Order;

public interface OrderService {

    ServiceResponse getOrderDetails(String customerId);

    ServiceResponse getCustomerOrders(String customerId);

    ServiceResponse createOrder(Order order);
}
