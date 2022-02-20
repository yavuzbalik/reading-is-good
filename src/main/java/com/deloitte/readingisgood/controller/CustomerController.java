package com.deloitte.readingisgood.controller;

import com.deloitte.readingisgood.dto.CustomerDto;
import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;

import javax.validation.Valid;

@RestController()
@RequestMapping("/customer")
@RequiredArgsConstructor
public class CustomerController {

    private static final Logger LOG = LoggerFactory.getLogger(CustomerController.class.getName());

    @Autowired
    CustomerService customerService;

    @Autowired
    ModelMapper modelMapper;


    @PostMapping("/signup")
    public ResponseEntity<ServiceResponse> signup(@RequestBody CustomerDto customerDto){
        LOG.info("add customer started");
        ServiceResponse response = customerService.signup(customerDto);
        LOG.info("add customer finished");
        return new ResponseEntity<ServiceResponse>(response,response.getStatus());
    }


}
