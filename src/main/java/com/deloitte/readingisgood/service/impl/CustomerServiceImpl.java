package com.deloitte.readingisgood.service.impl;

import com.deloitte.readingisgood.dto.CustomerDto;
import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.exceptions.CustomException;
import com.deloitte.readingisgood.model.Customer;
import com.deloitte.readingisgood.repository.CustomerRepository;
import com.deloitte.readingisgood.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    private static final Logger LOG = LoggerFactory.getLogger(CustomerServiceImpl.class.getName());

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ServiceResponse addCustomer(CustomerDto customerDto) {
        if (!customerRepository.existsByUsername(customerDto.getUsername())) {
            customerDto.setPassword(passwordEncoder.encode(customerDto.getPassword()));
            Customer newCustomer= modelMapper.map(customerDto, Customer.class);
            customerRepository.save(newCustomer);
            return new ServiceResponse(HttpStatus.OK,"customer added successfully",true);
        }
        else {
            return new ServiceResponse(HttpStatus.BAD_REQUEST,"username already in use",false);
        }
    }

    @Override
    public ServiceResponse getCustomerOrders() {
        return null;
    }
}
