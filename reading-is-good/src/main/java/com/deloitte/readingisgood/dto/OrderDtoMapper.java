package com.deloitte.readingisgood.dto;

import com.deloitte.readingisgood.model.Order;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {Order.class})
public interface OrderDtoMapper extends BaseDtoMapper<OrderDto, Order> {
}
