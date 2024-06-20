package com.example.demo.result;

import lombok.Data;

import java.io.Serializable;

@Data
public class Result<T> implements Serializable {

    private Boolean ok;
    private String message;
    private T data;

    public static <T> Result<T> success() {
        Result<T> result = new Result<T>();
        result.ok = true;
        return result;
    }

    public static <T> Result<T> success(String msg, T object) {
        Result<T> result = new Result<T>();
        result.ok = true;
        result.message = msg;
        return result;
    }

    public static <T> Result<T> success(T object) {
        Result<T> result = new Result<T>();
        result.data = object;
        result.ok = true;
        return result;
    }

    public static <T> Result<T> error(String msg) {
        Result<T> result = new Result<T>();
        result.message = msg;
        result.ok = false;
        return result;
    }
}
