package com.example.demo;

import com.example.demo.controller.UserController;
import com.example.demo.result.Result;
import com.example.demo.service.impl.UserServiceImpl;
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

import static org.hamcrest.MatcherAssert.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {
    private static final String AUTHORIZATION = "Authorization";

    private MockMvc mvc;

    @Mock
    private UserServiceImpl serviceImpl;

    @InjectMocks
    @Autowired
    private UserController controller;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
        mvc = MockMvcBuilders.standaloneSetup(controller).build();
    }

    @Test
    public void testLogin() throws Exception {
        doReturn(null).when(serviceImpl).login(any(), any());

        MvcResult mvcResult = this.mvc.perform(post("/user/login")
                        .header(AUTHORIZATION, "123")
                        .content("{}")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    public void testChangePassword() throws Exception {
        doReturn(null).when(serviceImpl).changePassword(any(),any());

        MvcResult mvcResult = this.mvc.perform(put("/user/password")
                        .header(AUTHORIZATION, "123")
                        .content("{}")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    public void testLogout() throws Exception {
        doReturn(null).when(serviceImpl).logout(any());

        MvcResult mvcResult = this.mvc.perform(put("/user/logout")
                        .header(AUTHORIZATION, "123")
                        .content("{}")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    public void testRegister() throws Exception {
        doReturn(null).when(serviceImpl).register(any());

        MvcResult mvcResult = this.mvc.perform(post("/user/register")
                        .header(AUTHORIZATION, "123")
                        .content("{}")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    public void testGetMe() throws Exception {
        doReturn(null).when(serviceImpl).getMe(any());

        MvcResult mvcResult = this.mvc.perform(get("/user/me")
                        .header(AUTHORIZATION, "123")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
    }

}
