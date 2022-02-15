package com.deloitte.readingisgood.service.impl;

import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.service.StatisticService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class StatisticServiceImpl implements StatisticService {

    private static final Logger LOG = LoggerFactory.getLogger(StatisticServiceImpl.class.getName());


    public ServiceResponse getMonthlyStatistics(){
        return null;
    }
}
