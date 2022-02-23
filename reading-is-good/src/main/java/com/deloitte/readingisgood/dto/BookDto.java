package com.deloitte.readingisgood.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookDto {
    private String title;
    private String author;
    private String posterUrl;
    private String description;
    private Double price;
    private Integer stock;
}
