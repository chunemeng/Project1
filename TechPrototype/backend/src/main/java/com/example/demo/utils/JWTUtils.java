package com.example.demo.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Map;


@Component
public class JWTUtils {
    private static final Long EXPIRE_TIME = 1000 * 60 * 30L;
    private static final String SIGNATURE = "CROWD-SOURCING";

    public static String createToken(Map<String, String> map) {

        Calendar instance = Calendar.getInstance();

        JWTCreator.Builder builder = JWT.create();

        map.forEach(builder::withClaim);
        return builder.withExpiresAt(instance.getTime())
                .sign(Algorithm.HMAC256(SIGNATURE));

    }

    public static Long getExpireTime() {
        return EXPIRE_TIME;
    }

    public static DecodedJWT verify(String token) {
        DecodedJWT jwt;
        try {
            jwt = JWT.require(Algorithm.HMAC256(SIGNATURE)).build().verify(token);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
            return null;
        }
        return jwt;
    }
}
