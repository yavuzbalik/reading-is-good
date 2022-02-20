package com.deloitte.readingisgood.controller;

import com.deloitte.readingisgood.dto.ServiceResponse;
import com.deloitte.readingisgood.service.StatisticService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/statistics")
@RequiredArgsConstructor
public class StatisticController {

    private static final Logger LOG = LoggerFactory.getLogger(StatisticController.class.getName());

    @Autowired
    StatisticService statisticService;

    @GetMapping()
    public ResponseEntity<ServiceResponse> getMonthlyStatistics(){
        LOG.info("get monthly statistics started");
        ServiceResponse response = statisticService.getMonthlyStatistics();
        LOG.info("get monthly statistics returned");
        return new ResponseEntity<ServiceResponse>(response,response.getStatus());
    }
}
