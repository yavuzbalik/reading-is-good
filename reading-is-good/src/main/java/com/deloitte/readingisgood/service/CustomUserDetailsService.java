package com.deloitte.readingisgood.service;


import com.deloitte.readingisgood.model.JwtUser;
import com.deloitte.readingisgood.repository.JwtUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    JwtUserRepository jwtUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        JwtUser jwtUser = jwtUserRepository.findUserByUsername(username);
        if (jwtUser == null) {
            throw new UsernameNotFoundException("username Not found" + username);
        }
        return new User(jwtUser.getUsername(), jwtUser.getPassword(), new ArrayList<>());
    }
}
