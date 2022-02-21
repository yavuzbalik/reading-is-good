package com.deloitte.readingisgood.model;

import lombok.*;

@Getter
@Setter
@Builder
public class BookOrder {
    private Book book;
    private Integer quantity;
}
