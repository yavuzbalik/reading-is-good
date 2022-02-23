package com.deloitte.readingisgood.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


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
    private String posterUrl;
    private String description;
    private Double price;
}
