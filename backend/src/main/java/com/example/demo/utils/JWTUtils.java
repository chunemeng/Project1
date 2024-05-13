package com.example.demo.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

import java.util.Calendar;
import java.util.Map;

public class JWTUtils {
    private static final String SIGNATURE = "CROWD-SOURCING";

    public static String createToken(Map<String, String> map) {

        Calendar instance = Calendar.getInstance();

        instance.add(Calendar.MINUTE, 30);

        JWTCreator.Builder builder = JWT.create();

        map.forEach(builder::withClaim);
        return builder.withExpiresAt(instance.getTime())
                .sign(Algorithm.HMAC256(SIGNATURE));
    }

    public static DecodedJWT verify(String token) {
        return JWT.require(Algorithm.HMAC256(SIGNATURE)).build().verify(token);
    }
}
