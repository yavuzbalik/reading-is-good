package com.deloitte.readingisgood.service.impl;

import com.deloitte.readingisgood.dto.StatisticDto;
import com.deloitte.readingisgood.repository.OrderRepository;
import com.deloitte.readingisgood.service.StatisticService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class StatisticServiceImpl implements StatisticService {

    private static final Logger LOG = LoggerFactory.getLogger(StatisticServiceImpl.class.getName());

    @Autowired
    OrderRepository orderRepository;

    public AggregationResults<StatisticDto> getMonthlyStatistics(String customerId){
        AggregationResults<StatisticDto> response = orderRepository.groupMonthlyByCustomerId(customerId);
        return response;
    }
}
