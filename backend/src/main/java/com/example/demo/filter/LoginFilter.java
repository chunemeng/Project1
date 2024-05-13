package com.example.demo.filter;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class LoginFilter extends UsernamePasswordAuthenticationFilter {
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;
}
