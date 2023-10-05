package com.example.newproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
@OpenAPIDefinition(
		info =@Info(
				title = "College Admission Portal",
				version = "1.1.2",
				description = "Backend of College Admission Portal",
				contact = @Contact(
						name = "Mohamed Haaris",
						email = "haaristhere@gmail.com"
						)
				)
		)
@SpringBootApplication
@Configuration
@PropertySource(value="classpath:application.properties")
public class NewprojectApplication{

	public static void main(String[] args) {
		SpringApplication.run(NewprojectApplication.class,args);
	}

}
