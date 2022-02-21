package com.deloitte.readingisgood.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class BookOrder {
    private Book book;
    private Integer quantity;
}
