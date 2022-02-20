package com.deloitte.readingisgood.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Getter
@Setter
public class BookDto {
    private String title;
    private String author;
    private String description;
    private Double price;
    private Integer stock;
}
