package com.example.demo;

import com.example.demo.dto.*;
import com.example.demo.entity.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class EntityTest {
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    public void testAll() throws JsonProcessingException {
        User user = new User();
        Worker worker = new Worker();
        Task task = new Task();
        Waiter waiter = new Waiter();
        objectMapper.writeValueAsString(waiter);
        objectMapper.writeValueAsString(user);
        objectMapper.writeValueAsString(worker);
        objectMapper.writeValueAsString(task);
    }
}
