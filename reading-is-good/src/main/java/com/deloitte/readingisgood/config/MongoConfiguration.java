package com.deloitte.readingisgood.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "com.deloitte.readingisgood.repository")
@EntityScan(basePackages = "com.deloitte.readingisgood.model")
@EnableMongoAuditing
public class MongoConfiguration {
}
