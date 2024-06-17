package com.example.demo.config;

import com.example.demo.interceptor.JWTInterceptor;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {
    @Autowired
    private JWTInterceptor jwtInterceptor;
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
//        List<String> excludePath = Arrays.asList("/api/user/login", "/user/login", "/api/user/register", "/user/logout");
//        registry.addInterceptor(jwtInterceptor).addPathPatterns("/**").excludePathPatterns(excludePath);
    }
}
