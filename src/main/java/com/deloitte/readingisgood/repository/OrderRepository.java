package com.deloitte.readingisgood.repository;

import com.deloitte.readingisgood.dto.StatisticDto;
import com.deloitte.readingisgood.model.Order;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends MongoRepository<Order,String> {
    List<Order> findAllByCustomerId(String customerId);


    @Aggregation(pipeline = {
//            "{ $match: { 'customerId' : ?0 } } ," +
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
}
