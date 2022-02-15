package com.deloitte.readingisgood.service.impl;

import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.repository.CustomerRepository;
import com.deloitte.readingisgood.service.CustomerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    private static final Logger LOG = LoggerFactory.getLogger(CustomerServiceImpl.class.getName());

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public ServiceResponse addCustomer() {
        return null;
    }

    @Override
    public ServiceResponse getCustomerOrders() {
        return null;
    }
}
