package com.deloitte.readingisgood.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
public class BookOrder {
    private Book book;
    private Integer quantity;
}
