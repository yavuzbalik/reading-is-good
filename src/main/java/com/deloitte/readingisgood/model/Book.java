package com.deloitte.readingisgood.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.math.BigDecimal;
import java.util.List;


@Document(collection = "books")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Book{
    @Id
    private String id;
    @Indexed(unique = true)
    private String title;
    private String author;
    private String description;
    private Double price;
    @DBRef(lazy = true) Stock stocks;
}
