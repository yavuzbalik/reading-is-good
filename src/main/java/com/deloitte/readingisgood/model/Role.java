package com.deloitte.readingisgood.model;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
  ROLE_CUSTOMER;



  public String getAuthority() {
    return name();
  }

}
