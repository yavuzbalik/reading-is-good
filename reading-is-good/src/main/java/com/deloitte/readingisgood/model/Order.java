package com.deloitte.readingisgood.model;

import com.deloitte.readingisgood.enums.OrderStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document(collection = "orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Order {
    @Id
    private String id;
    private String customerId;
    private List<BookOrder> books = new ArrayList<>();
    private OrderStatusEnum status;
    private Double amount;
    @CreatedDate
    private Date createdDate;
}
