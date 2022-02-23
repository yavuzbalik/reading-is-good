package com.deloitte.readingisgood.service;


import com.deloitte.readingisgood.dto.OrderDto;
import com.deloitte.readingisgood.dto.PageResponse;
import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.model.Order;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.List;

public interface OrderService {

    ServiceResponse getOrderDetails(String orderId);

    List<Order> getOrdersByFilter(LocalDate from, LocalDate to, Integer page, Integer size);

    ServiceResponse getCustomerOrders();

    ServiceResponse createOrder(Order order);
}
