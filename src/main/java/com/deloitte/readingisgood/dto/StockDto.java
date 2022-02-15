package com.deloitte.readingisgood.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
public class StockDto {
    @NotNull
    private String bookId;
    @NotNull
    private Integer stock;
}
