package com.example.demo;

import com.example.demo.utils.BeanCopyUtil;
import com.example.demo.utils.JWTUtils;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SpringBootTest
public class UtilsTest {
    @Test
    void JwtUtilsTest() {
        Map<String, String> map = new HashMap<>();
        map.put("username", "admin");
        String s = JWTUtils.createToken(map);
        JWTUtils.getExpireTime();
        JWTUtils.verify("token");
        JWTUtils.verify(s);
    }

    @Test
    void CopyUtilsTest() {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        List<String> list1 = BeanCopyUtil.copyListProperties(list, String::new);
    }

}
