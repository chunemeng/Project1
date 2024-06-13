package com.example.demo;

import com.example.demo.dto.*;
import com.example.demo.entity.Task;
import com.example.demo.entity.Union;
import com.example.demo.entity.User;
import com.example.demo.entity.Worker;
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
        Union union = new Union();
        Worker worker = new Worker();
        Task task = new Task();
        objectMapper.writeValueAsString(user);
        objectMapper.writeValueAsString(union);
        objectMapper.writeValueAsString(worker);
        objectMapper.writeValueAsString(task);
    }
}
