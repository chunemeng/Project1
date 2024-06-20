package com.example.demo;


import com.example.demo.result.PageResult;
import com.example.demo.result.Result;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;

@SpringBootTest
public class ResultTest {
    @Test
    public void AllResultTest() {
        Result r = new Result();
        r = Result.success();
        r = Result.success("ad");
        r = Result.success("ad", null);
        r = Result.error("ad");
        PageResult pr = new PageResult(10, new ArrayList<>());
    }
}
