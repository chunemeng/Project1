package com.example.demo.service.impl;

import com.example.demo.dao.OrderRepository;
import com.example.demo.dto.OrderDto;
import com.example.demo.result.Result;
import com.example.demo.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    OrderRepository orderRepository;

//    @Override
//    public Result updateOrder(OrderDto orderDto) {
//        if(orderDto == null || orderDto.getId() == null) {
//
//        }
//    }
}
