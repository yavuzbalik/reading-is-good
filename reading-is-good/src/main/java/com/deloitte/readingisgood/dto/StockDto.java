package com.deloitte.readingisgood.dto;

import lombok.*;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class StockDto {
    @NotNull
    private String bookId;
    @NotNull
    private Integer stock;

    public void updateStockOfBook(Integer orderQuantity) {
        this.stock -= orderQuantity;
    }
}
