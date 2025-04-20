package com.example.demo;

import com.auth0.jwt.JWT;
import com.auth0.jwt.exceptions.AlgorithmMismatchException;
import com.auth0.jwt.exceptions.JWTDecodeException;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.demo.interceptor.JWTInterceptor;
import com.example.demo.service.impl.TaskServiceImpl;
import com.example.demo.utils.JWTUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.kafka.common.protocol.types.Field;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.BoundValueOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.servlet.HandlerInterceptor;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class InterceptionTest {

    @Mock
    private HttpServletRequest request;

    @Mock
    private HttpServletResponse response;

    @Mock
    private DecodedJWT decodedJWT;



    @Mock
    private Claim claim;

    @Mock
    private RedisTemplate<String, String> redisTemplate;


    @InjectMocks
    @Autowired
    private JWTInterceptor jwtInterceptor;


    @Mock
    private BoundValueOperations<String, String> boundValueOps;
    @Test
    public void testPreHandleValidToken() throws Exception {
        when(request.getHeader("Authorization")).thenReturn("validToken");
        when(JWTUtils.verify(any())).thenReturn(decodedJWT);
        doReturn(claim).when(decodedJWT).getClaim("id");
        doReturn(boundValueOps).when(redisTemplate).boundValueOps("Authentication1");
        doReturn("validToken").when(boundValueOps).get();


        StringWriter stringWriter = new StringWriter();
        PrintWriter writer = new PrintWriter(stringWriter);
        when(response.getWriter()).thenReturn(writer);

        boolean result = jwtInterceptor.preHandle(request, response, new Object());

        when(request.getHeader("Authorization")).thenReturn("validToken");
        when(JWTUtils.verify("validToken")).thenReturn(decodedJWT);

        when(redisTemplate.boundValueOps("Authentication1")).thenReturn(boundValueOps);
        when(boundValueOps.get()).thenReturn(null);

        stringWriter = new StringWriter();
        writer = new PrintWriter(stringWriter);
        when(response.getWriter()).thenReturn(writer);

        result = jwtInterceptor.preHandle(request, response, new Object());

    }



    @BeforeEach
    public void setUpBeforeClass() {
        // 此处不测试会覆盖UtilsTest的测试
        try {
            if (!Mockito.mockingDetails(JWTUtils.class).isMock()) {
                Map<String, String> map = new HashMap<>();
                map.put("username", "admin");
                String s = JWTUtils.createToken(map);
                JWTUtils.getExpireTime();
                JWTUtils.verify("token");
                JWTUtils.verify(s);
                mockStatic(JWTUtils.class);
            }
            MockitoAnnotations.openMocks(this);
        } catch (JWTDecodeException e) {

        }



    }

}
