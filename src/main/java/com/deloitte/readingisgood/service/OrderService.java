package com.deloitte.readingisgood.service;


import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.model.Order;

public interface OrderService {

    ServiceResponse getOrderDetails(String orderId);

//    ServiceResponse getOrdersByFilter(LocalDate from, LocalDate to, Integer page, Integer size);

    ServiceResponse getCustomerOrders();

    ServiceResponse createOrder(Order order);
}
