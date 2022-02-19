package com.deloitte.readingisgood.service.impl;

import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.enums.OrderStatusEnum;
import com.deloitte.readingisgood.model.Book;
import com.deloitte.readingisgood.model.BookOrder;
import com.deloitte.readingisgood.model.Order;
import com.deloitte.readingisgood.model.Stock;
import com.deloitte.readingisgood.repository.OrderRepository;
import com.deloitte.readingisgood.repository.StockRepository;
import com.deloitte.readingisgood.service.OrderService;
import com.deloitte.readingisgood.service.StockService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
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

    @Override
    public ServiceResponse getOrderDetails(String customerId) {
        Optional<Order> order = orderRepository.findById(customerId);
        return new ServiceResponse(HttpStatus.OK,"get order returned",order);

    }

    @Override
    public ServiceResponse getCustomerOrders(String customerId) {
        List<Order> orders = orderRepository.findAllByCustomerId(customerId);
        return new ServiceResponse(HttpStatus.OK,"get customer all orders returned",orders);
    }

    @Override
    public ServiceResponse createOrder(Order order) {
        List<BookOrder> books = order.getBooks();
        Order order2 = new Order();
        order2.setAmount(0.0);
        ArrayList bookList = new ArrayList();
        for(BookOrder book:books){
            Book book1 = book.getBook();
            Stock stock= stockRepository.findStockByBookId(book1.getId());
            int stockQuantity = stock.getStock();
            int orderQuantity = book.getQuantity();

            if(stockQuantity>0&&stockQuantity>=orderQuantity){
                boolean updateStock = stockService.updateStockByOrder(book1.getId(),orderQuantity);
                if(updateStock){
                    book.setAdded(true);
                    bookList.add(book);
                    order2.setAmount(order2.getAmount()+book1.getPrice());
                }
            }
        }

        if(bookList.size()>0){
            order2.setCustomerId(order.getCustomerId());
            order2.setStatus(OrderStatusEnum.IN_PROGRESS);
            order2.setBooks(bookList);
            Order order1 = orderRepository.save(order2);
            return new ServiceResponse(HttpStatus.OK,"order added",order1);
        }
        else{
            return new ServiceResponse(HttpStatus.NOT_FOUND,"book(s) out of stock",false);
        }
    }
}
