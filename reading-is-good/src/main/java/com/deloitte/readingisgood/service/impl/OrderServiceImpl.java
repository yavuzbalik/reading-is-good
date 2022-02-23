package com.deloitte.readingisgood.service.impl;

import com.deloitte.readingisgood.dto.OrderDto;
import com.deloitte.readingisgood.dto.OrderDtoMapper;
import com.deloitte.readingisgood.dto.PageResponse;
import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.enums.OrderStatusEnum;
import com.deloitte.readingisgood.model.*;
import com.deloitte.readingisgood.repository.*;
import com.deloitte.readingisgood.service.OrderService;
import com.deloitte.readingisgood.service.StockService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.parameters.P;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class OrderServiceImpl implements OrderService {

    private static final Logger LOG = LoggerFactory.getLogger(OrderServiceImpl.class.getName());


    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private StockRepository stockRepository;

    @Autowired
    private StockService stockService;

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private JwtUserRepository jwtUserRepository;

//    @Autowired
//    private OrderDtoMapper mapper;

    @Override
    public ServiceResponse getOrderDetails(String orderId) {
        Optional<Order> order = orderRepository.findById(orderId);
        return new ServiceResponse(HttpStatus.OK,"get order returned",order);

    }

//    @Override
//    public PageResponse<Order> getOrdersByFilter(LocalDate from, LocalDate to, Integer page, Integer size) {
//        Pageable pageable = PageRequest.of(page, size);
//
//        List<Order> pageOrderEntity = orderRepository.findByCreatedDateBetween(from, to, pageable);
//
//        return PageResponse.<Order>builder()
//                .list(pageOrderEntity.toList())
//                .page(page)
//                .size(pageOrderEntity.getSize())
//                .totalContent(pageOrderEntity.getTotalElements())
//                .totalPages(pageOrderEntity.getTotalPages())
//                .build();
//    }

    @Override
    public List<Order> getOrdersByFilter(LocalDate from, LocalDate to, Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);

        //Page<Order> pageableOrder1 = orderRepository.findOrderByCreatedDateBetween(from, to, pageable);
        List<Order> pageableOrder = orderRepository.findByCreatedDateBetween(from, to);

        List<Order> pageableOrder2 = orderRepository.findAll();

        return pageableOrder;
    }

//    @Override
//    public PageResponse<Order> getOrdersByFilter(LocalDate from, LocalDate to, int page, int size) {
//        Pageable pageable = PageRequest.of(page, size);
//
//        Page<OrderDto> pageOrderEntity = orderRepository.findOrderByCreatedDateBetween(from, to, pageable);
//
//        return PageResponse.<Order>builder()
//                .list(mapper.toListDomainObject(pageOrderEntity.toList()))
//                .page(page)
//                .size(pageOrderEntity.getSize())
//                .totalContent(pageOrderEntity.getTotalElements())
//                .totalPages(pageOrderEntity.getTotalPages())
//                .build();
//    }

    @Override
    public ServiceResponse getCustomerOrders() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String customerName = user.getUsername();
        JwtUser user1 = jwtUserRepository.findUserByUsername(customerName);
        String customerId = user1.getId();
        System.out.println("customer id is "+customerId);
        List<Order> orders = orderRepository.getAllByCustomerId(customerId);
        for(Order order :orders){

            System.out.println("order books "+order.toString());
        }


        return new ServiceResponse(HttpStatus.OK,"get customer all orders returned",orders);
    }

    @Override
    public ServiceResponse createOrder(Order order) {
        List<BookOrder> books = order.getBooks();
        Order order2 = new Order();
        order2.setAmount(0.0);
        List<BookOrder> bookList = new ArrayList();


        for(BookOrder book:books){
            Book book1 = book.getBook();
            Book book2 = bookRepository.findBookById(book1.getId());

            Stock stock = stockRepository.findStockByBookId(book1.getId());
            int stockQuantity = stock.getStock();
            int orderQuantity = book.getQuantity();


            if(stockQuantity>0&&stockQuantity>=orderQuantity){
                System.out.println("book 2 is "+book2);
                boolean updateStock = stockService.updateStockByOrder(book1.getId(),orderQuantity);
                if(updateStock){
                    bookList.add(BookOrder.builder().book(book2).quantity(orderQuantity).build());
                    order2.setAmount(order2.getAmount()+(book2.getPrice()*book.getQuantity()));
                }
            }
        }
        if(bookList.size()>0){
            User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            String customerName = user.getUsername();
            JwtUser user1 = jwtUserRepository.findUserByUsername(customerName);
            String customerId = user1.getId();
            System.out.println("customer id is "+customerId);
            order2.setCustomerId(customerId);
            order2.setStatus(OrderStatusEnum.IN_PROGRESS);
            order2.setBooks(bookList);
            System.out.println("order2 "+order2);
            Order order1 = orderRepository.save(order2);
            return new ServiceResponse(HttpStatus.OK,"order added",order1);
        }
        else{
            return new ServiceResponse(HttpStatus.NOT_FOUND,"book(s) out of stock",false);
        }
    }
}
