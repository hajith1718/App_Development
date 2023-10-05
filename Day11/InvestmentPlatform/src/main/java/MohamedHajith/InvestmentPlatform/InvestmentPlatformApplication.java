package MohamedHajith.InvestmentPlatform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
		info =@Info(
				title = "Investment Platform",
				version = "1.1.2",
				description = "Investment Application Backend",
				contact = @Contact(
						name = "Hajith",
						email = "mohamedhajith717@gmail.com"
						)
				)
		)

@SpringBootApplication
public class InvestmentPlatformApplication {

	public static void main(String[] args) {
		SpringApplication.run(InvestmentPlatformApplication.class, args);
	}

}
