package com.deloitte.readingisgood.service;


import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.model.Order;

import java.time.LocalDate;

public interface OrderService {

    ServiceResponse getOrderDetails(String orderId);

//    ServiceResponse getOrdersByFilter(LocalDate from, LocalDate to, Integer page, Integer size);

    ServiceResponse getCustomerOrders(String customerId);

    ServiceResponse createOrder(Order order);
}
