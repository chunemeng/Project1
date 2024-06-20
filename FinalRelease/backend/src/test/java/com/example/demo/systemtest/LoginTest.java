package com.example.demo.systemtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


public class LoginTest {

    @FunctionalInterface
    public interface RunnableWithArg {
        void run(Long id);
    }

    public static void main(String[] args) throws IOException, InterruptedException {


        testLogin();
    }

    public static void testLogin() throws IOException, InterruptedException {
        EdgeOptions edgeOptions = new EdgeOptions();
        edgeOptions.addArguments("--remote-allow-origins=*");
        List<Thread> threads = new ArrayList<>();
        try {
            // 执行压力测试
            int maxUsers = 10;
            int concurrency = 1;
            long startTime = System.currentTimeMillis();


            for (int i = 0; i < maxUsers; i++) {
                RunnableWithArg task = (Long id) -> {
                    WebDriver userDriver = new EdgeDriver(edgeOptions);
                    userDriver.manage().window().maximize();
                    userDriver.get("http://localhost:3000/login");
                    login(userDriver, "user" + id, "123456"); // 使用随机用户名
                    userDriver.quit();
                };
                Long finalJ = (long) i;
                Thread t = new Thread(() -> task.run(finalJ));
                threads.add(t);
                t.start();
            }

            for (Thread t : threads) {
                t.join();
            }

            long endTime = System.currentTimeMillis();
            long totalTime = endTime - startTime;
            double avgResponseTime = totalTime / (maxUsers * concurrency * 1000.0); // 转换为秒
            System.out.println("平均事务响应时间：" + avgResponseTime + "秒");
        } finally {
        }
    }

    private static void login(WebDriver driver, String username, String password) {
        driver.findElement(By.id("username")).sendKeys(username);
        driver.findElement(By.id("password")).sendKeys(password);
        driver.findElement(By.xpath("//button")).click();
    }
}
