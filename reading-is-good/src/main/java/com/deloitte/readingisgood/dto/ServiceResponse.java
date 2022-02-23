package com.deloitte.readingisgood.dto;

import lombok.*;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
public class ServiceResponse {
    HttpStatus status;
    String message;
    Object response;
}
