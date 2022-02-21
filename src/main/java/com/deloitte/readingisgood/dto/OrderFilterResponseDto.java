package com.deloitte.readingisgood.dto;

import com.deloitte.readingisgood.enums.OrderStatusEnum;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
@Data
public class OrderFilterResponseDto {
    private List<OrderDto> books;
    private OrderStatusEnum status;
    private BigDecimal amount;
    private Date createdDate;
}
