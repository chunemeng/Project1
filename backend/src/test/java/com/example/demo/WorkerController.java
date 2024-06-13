package com.example.demo;

import com.example.demo.controller.UserController;
import com.example.demo.result.Result;
import com.example.demo.service.impl.UserServiceImpl;
import com.example.demo.service.impl.WorkerServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class WorkerController {
    private static final String AUTHORIZATION = "Authorization";

    private MockMvc mvc;

    @Mock
    private WorkerServiceImpl serviceImpl;

    @InjectMocks
    @Autowired
    private com.example.demo.controller.WorkerController controller;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        mvc = MockMvcBuilders.standaloneSetup(controller).build();
    }

    @Test
    public void testGetWorkers() throws Exception {
        doReturn(null).when(serviceImpl).getWorkers(any());

        MvcResult mvcResult = this.mvc.perform(get("/worker/get")
                        .header(AUTHORIZATION, "123")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
    }

}
