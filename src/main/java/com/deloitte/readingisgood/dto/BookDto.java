package com.deloitte.readingisgood.dto;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Data
public class BookDto {
    @NotNull
    private String title;
    @NotNull
    private String author;
    private String description;
    @NotNull
    private BigDecimal price;
    @NotNull
    private Integer quantity;
}
