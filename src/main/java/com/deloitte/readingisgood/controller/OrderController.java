package com.deloitte.readingisgood.controller;

import com.deloitte.readingisgood.dto.OrderDto;
import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.model.JwtUser;
import com.deloitte.readingisgood.model.Order;
import com.deloitte.readingisgood.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController()
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

    private static final Logger LOG = LoggerFactory.getLogger(OrderController.class.getName());

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private OrderService orderService;


    @CrossOrigin("*")
    @GetMapping("/customer")
    public ResponseEntity<ServiceResponse> getCustomerOrders(){
        LOG.info("get all books started");

        ServiceResponse response = orderService.getCustomerOrders();
        LOG.info("get all books returned");
        return new ResponseEntity<ServiceResponse>(response,response.getStatus());
    }

//    @GetMapping("/filter")
//    public ResponseEntity<ServiceResponse> getOrdersByFilter(@RequestParam("from") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
//                                                             @RequestParam("to") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
//                                                             @RequestParam(value = "page", required = false, defaultValue = "0") Integer page,
//                                                             @RequestParam(value = "size", required = false, defaultValue = "10") Integer size){
//        LOG.info("get all books started");
//        ServiceResponse response = orderService.getOrdersByFilter(from,to,page,size);
//        LOG.info("get all books returned");
//        return new ResponseEntity<ServiceResponse>(response,response.getStatus());
//    }

    @CrossOrigin("*")
    @GetMapping("/{orderId}")
    public ResponseEntity<ServiceResponse> getOrderDetails(@PathVariable String orderId){
        LOG.info("get order details started");
        ServiceResponse response = orderService.getOrderDetails(orderId);
        LOG.info("get order details returned");
        return new ResponseEntity<ServiceResponse>(response,response.getStatus());
    }
    @CrossOrigin("*")
    @PostMapping()
    public ResponseEntity<ServiceResponse> createOrder(@RequestBody OrderDto orderDto){
        LOG.info("create order started");
        System.out.println(orderDto.getBooks());
        ServiceResponse response = orderService.createOrder(modelMapper.map(orderDto, Order.class));
        LOG.info("create order returned");
        return new ResponseEntity<ServiceResponse>(response,response.getStatus());
    }

}
