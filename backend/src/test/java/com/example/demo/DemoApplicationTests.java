package com.example.demo;

import com.example.demo.handler.GlobalExceptionHandler;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DemoApplicationTests {

	@Test
	void contextLoads() {
		DemoApplication application = new DemoApplication();
		application.main(new String[0]);
	}

	@Test
	void HandlerTest() {
		GlobalExceptionHandler globalExceptionHandler = new GlobalExceptionHandler();

		globalExceptionHandler.exceptionHandler(new RuntimeException());
	}
}
