package com.deloitte.readingisgood.service.impl;

import com.deloitte.readingisgood.dto.CustomerDto;
import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.model.Customer;
import com.deloitte.readingisgood.repository.CustomerRepository;
import com.deloitte.readingisgood.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    private static final Logger LOG = LoggerFactory.getLogger(CustomerServiceImpl.class.getName());

    @Autowired
    private CustomerRepository customerRepository;


    @Autowired
    private ModelMapper modelMapper;


    @Override
    public ServiceResponse getCustomerOrders() {
        return null;
    }

}


