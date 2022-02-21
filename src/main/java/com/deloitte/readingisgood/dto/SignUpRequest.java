package com.deloitte.readingisgood.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.*;

@Getter
@Setter
public class SignUpRequest {

    @NotBlank
    @Size(max = 40)
    private String username;

    @NotBlank
    @Size(min = 6, max = 20)
    private String password;

}
