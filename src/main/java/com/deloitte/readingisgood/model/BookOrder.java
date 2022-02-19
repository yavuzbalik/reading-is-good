package com.deloitte.readingisgood.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookOrder {
    private Book book;
    private Integer quantity;
    private boolean isAdded;
}
