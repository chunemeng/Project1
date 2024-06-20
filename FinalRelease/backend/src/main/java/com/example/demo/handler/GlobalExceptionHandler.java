package com.example.demo.handler;

import com.example.demo.result.Result;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler
    public Result exceptionHandler(RuntimeException exception) {
        return Result.error(exception.getMessage());
    }
}
