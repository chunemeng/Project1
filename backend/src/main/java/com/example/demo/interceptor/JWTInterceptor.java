package com.example.demo.interceptor;

import com.auth0.jwt.exceptions.AlgorithmMismatchException;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.demo.utils.JWTUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

@Component
public class JWTInterceptor implements HandlerInterceptor {
    private static final String JWT_TOKEN_HEADER = "Authorization";
    @Resource
    public RedisTemplate<String, String> redisTemplate;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return true;
//        Map<String, Object> map = new HashMap<>();
//        String token = request.getHeader(JWT_TOKEN_HEADER);
//        try {
//            DecodedJWT verify = JWTUtils.verify(token);
//            Long id = Long.valueOf(verify.getClaim("id").asString());
//
//            return token.equals(redisTemplate.boundValueOps("Authentication" + id).get());
//        } catch (Exception e) {
//            map.put("msg", "token无效！");
//        }
//        map.put("state", false);
//        String json = new ObjectMapper().writeValueAsString(map);
//        response.setContentType("application/json;charset=UTF-8");
//        response.getWriter().println(json);
//        return false;
    }
}
