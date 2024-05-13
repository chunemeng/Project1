package com.example.demo.config;

import com.example.demo.interceptor.JWTInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Configuration
public class InterceptorConfig implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        JWTInterceptor jwtInterceptor = new JWTInterceptor();
        // todo 添加对众包任务首页和任务详情页以及众包者信息页请求的排除
        List<String> excludePath = Arrays.asList("/user/login", "/user/register");
        registry.addInterceptor(jwtInterceptor).addPathPatterns("/").excludePathPatterns(excludePath);
    }
}
