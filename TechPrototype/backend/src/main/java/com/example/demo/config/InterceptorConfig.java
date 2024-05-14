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
    @Resource
    private RedisTemplate<String, Object> redisTemplate;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        JWTInterceptor jwtInterceptor = new JWTInterceptor();
        // todo 添加对众包任务首页和任务详情页以及众包者信息页请求的排除
        List<String> excludePath = Arrays.asList("/api/user/login", "/api/user/register");
        registry.addInterceptor(jwtInterceptor).addPathPatterns("/").excludePathPatterns(excludePath);
    }
}
