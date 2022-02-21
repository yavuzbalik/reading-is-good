package com.deloitte.readingisgood.controller;


import com.deloitte.readingisgood.dto.CustomerDto;
import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.exceptions.CustomException;
import com.deloitte.readingisgood.model.Customer;
import com.deloitte.readingisgood.model.Role;
import com.deloitte.readingisgood.repository.CustomerRepository;
import com.deloitte.readingisgood.security.JwtTokenProvider;
import com.deloitte.readingisgood.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController @RequestMapping(path = "api/public")
@CrossOrigin(origins = "*", maxAge = 3600)
@RequiredArgsConstructor
public class AuthApi {

    private static final Logger LOG = LoggerFactory.getLogger(CustomerController.class.getName());

    private final AuthenticationManager authenticationManager;


    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    CustomerService customerService;

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @CrossOrigin("*")
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody CustomerDto loginRequest) {

        System.out.println("username "+loginRequest.getUsername());
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        CustomerDto userDetails = customerRepository.findByUsername(loginRequest.getUsername());

        final String jwt = jwtUtil.generateToken(userDetails);
        ServiceResponse response = new ServiceResponse(HttpStatus.OK,"login success",jwt);


        return new ResponseEntity<ServiceResponse>(response.getStatus(),response);
    }
    @CrossOrigin("*")
    @PostMapping("/signup")
    public ResponseEntity<ServiceResponse> register(@RequestBody @Valid CustomerDto request) {
        LOG.info("signup calisti");
        ServiceResponse response = customerService.signup(request);
        return new ResponseEntity<ServiceResponse> (response, HttpStatus.OK);
    }

}
