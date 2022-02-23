package com.deloitte.readingisgood.service;

import com.deloitte.readingisgood.dto.StatisticDto;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;

public interface StatisticService {

AggregationResults<StatisticDto> getMonthlyStatistics(String customerId);
}
