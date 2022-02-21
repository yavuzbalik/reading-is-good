package com.deloitte.readingisgood.repository;


import com.deloitte.readingisgood.model.JwtUser;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JwtUserRepository extends MongoRepository<JwtUser, String> {

    List<JwtUser> findAll();

    JwtUser findByUsername(String username);

    JwtUser findUserByUsername(String username);
}
