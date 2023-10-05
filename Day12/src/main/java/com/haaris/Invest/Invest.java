package com.haaris.Invest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
@OpenAPIDefinition(
		info =@Info(
				title = "Investment Platform",
				version = "1.1.2",
				description = "Backend of Investmetn",
				contact = @Contact(
						name = "Mohamed Haaris",
						email = "haaristhere@gmail.com"
						)
				)
		)
@SpringBootApplication
@Configuration
@PropertySource(value="classpath:application.properties")
public class Invest{

	public static void main(String[] args) {
		SpringApplication.run(Invest.class,args);
	}

}
