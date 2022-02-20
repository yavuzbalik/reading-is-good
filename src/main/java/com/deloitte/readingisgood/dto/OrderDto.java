package com.deloitte.readingisgood.dto;

import com.deloitte.readingisgood.model.BookOrder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class OrderDto {
    String customerId;
    List<BookOrder> books;
}
