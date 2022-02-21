package com.deloitte.readingisgood.dto;

import com.deloitte.readingisgood.enums.OrderStatusEnum;
import com.deloitte.readingisgood.model.Book;
import com.deloitte.readingisgood.model.BookOrder;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class OrderFilterDto {
    private String id;
    private String customerId;
    private List<BookOrder> books;
    private OrderStatusEnum status;
    private BigDecimal amount;
    private Date createdDate;

    public OrderFilterDto() {
        this.books = new ArrayList<>();
        this.status = OrderStatusEnum.IN_PROGRESS;
        this.amount = BigDecimal.ZERO;
    }

    public OrderFilterDto(String customerId) {
        this.customerId = customerId;
        this.books = new ArrayList<>();
        this.amount = BigDecimal.ZERO;
        this.status = OrderStatusEnum.IN_PROGRESS;
    }

}
