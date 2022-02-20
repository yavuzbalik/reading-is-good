package com.deloitte.readingisgood.service.impl;

import com.deloitte.readingisgood.dto.CustomerDto;
import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.exceptions.CustomException;
import com.deloitte.readingisgood.model.Customer;
import com.deloitte.readingisgood.model.Role;
import com.deloitte.readingisgood.repository.CustomerRepository;
import com.deloitte.readingisgood.security.JwtTokenProvider;
import com.deloitte.readingisgood.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
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
    public ServiceResponse signup(CustomerDto customerDto) {
        if (!customerRepository.existsByUsername(customerDto.getUsername())) {

            String encodedPassword = passwordEncoder.encode(customerDto.getPassword());
            customerDto.setPassword(encodedPassword);
            Customer customer = new Customer();
            customer.setUsername(customerDto.getUsername());
            customer.setPassword(encodedPassword);
            customer.setRole(Role.ROLE_CUSTOMER);
            customerRepository.save(customer);
            return new ServiceResponse(HttpStatus.OK,"customer added successfully",true);
        }
        else {
            return new ServiceResponse(HttpStatus.BAD_REQUEST,"username already in use",false);
        }
    }

    @Override
    public ServiceResponse signin(String username, String password) {
        return null;
    }


    @Override
    public ServiceResponse getCustomerOrders() {
        return null;
    }
}
