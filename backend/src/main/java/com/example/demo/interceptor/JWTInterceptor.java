package com.example.demo.interceptor;

import com.auth0.jwt.exceptions.AlgorithmMismatchException;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.example.demo.utils.JWTUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.HashMap;
import java.util.Map;

public class JWTInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Map<String, Object> map = new HashMap<>();
        String token = request.getHeader("token");
        try {
            JWTUtils.verify(token);
            return true;
        } catch (SignatureVerificationException e) {
            map.put("msg", "无效签名！");
        } catch (TokenExpiredException e) {
            map.put("msg", "token过期");
        } catch (AlgorithmMismatchException e) {
            map.put("msg", "算法不一致");
        } catch (Exception e) {
            map.put("msg", "token无效！");
        }
        map.put("state", false);
        String json = new ObjectMapper().writeValueAsString(map);
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().println(json);
        return false;
    }
}
