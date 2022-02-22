package com.deloitte.readingisgood.controller;

import com.deloitte.readingisgood.dto.StatisticDto;
import com.deloitte.readingisgood.service.StatisticService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/statistics")
@RequiredArgsConstructor
public class StatisticController {

    private static final Logger LOG = LoggerFactory.getLogger(StatisticController.class.getName());

    @Autowired
    StatisticService statisticService;

    @CrossOrigin("*")
    @GetMapping()
    public ResponseEntity<AggregationResults> getMonthlyStatistics(@RequestBody String customerId){
        LOG.info("get monthly statistics started");
        AggregationResults<StatisticDto> response = statisticService.getMonthlyStatistics(customerId);
        LOG.info("get monthly statistics returned");
        return new ResponseEntity<AggregationResults>(response, HttpStatus.OK);
    }
}
