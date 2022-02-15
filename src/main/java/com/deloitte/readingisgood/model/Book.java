package com.deloitte.readingisgood.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;


@Document(collection = "books")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Book{
    @Id
    private String id;
    @Indexed(unique = true)
    private String title;
    private String author;
    private String about;
    private BigDecimal price;
}
