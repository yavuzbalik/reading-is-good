package com.deloitte.readingisgood.controller;

import com.deloitte.readingisgood.dto.CustomerDto;
import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/customer")
@RequiredArgsConstructor
public class CustomerController {

    private static final Logger LOG = LoggerFactory.getLogger(CustomerController.class.getName());

    CustomerService customerService;

    @PostMapping()
    public ResponseEntity<ServiceResponse> addCustomer(CustomerDto customerDto){
        LOG.info("add customer started");
        ServiceResponse response = customerService.addCustomer(customerDto);
        LOG.info("add customer finished");
        return new ResponseEntity<ServiceResponse>(response,response.getStatus());
    }

}
