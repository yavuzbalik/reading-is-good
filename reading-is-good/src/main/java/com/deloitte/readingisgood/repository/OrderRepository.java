package com.deloitte.readingisgood.repository;

import com.deloitte.readingisgood.dto.OrderDto;
import com.deloitte.readingisgood.dto.StatisticDto;
import com.deloitte.readingisgood.model.Order;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.awt.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Repository
public interface OrderRepository extends MongoRepository<Order,String>  {
//    List<Order> findByCustomerId(String customerId);

    @Query("db.getCollection(\"orders\").find({})")
    List<Order>  findByCustomerId(String customerId);

    List<Order> getAllByCustomerId(String customerId);





    @Aggregation(pipeline = {
            "{ $match: { 'customerId' : ?0 } } ," +
            "{ $group: {"
                    + " _id: { month: { $month: $createdDate } }, "
                    + " totalOrder: {$sum: 1},"
                    + " customerId: {$first: '$customerId'},"
                    + " month: {$first: { $month: $createdDate }},"
                    + " totalPurchaseBookCount: {$sum: { $size:'$books' }},"
                    + " totalAmount:{ $sum: {$toDecimal:'$amount'} }"
                    + "}}," +
                    "{ $project: {"
                    + " month: '$month',"
                    + " _id: 0,"
                    + " customerId: '$customerId',"
                    + " totalOrder: '$totalOrder',"
                    + " totalPurchaseBookCount: '$totalPurchaseBookCount',"
                    + " totalAmount: '$totalAmount'"
                    + "}}," + "{ $sort : { 'createdDate' : 1}} "

    })
    AggregationResults<StatisticDto> groupMonthlyByCustomerId(String customerId);


    Page<Order> findOrderByCreatedDateBetween(LocalDate from, LocalDate to, Pageable pageable);


    List<Order> findByCreatedDateBetween(LocalDate from, LocalDate to);


}
