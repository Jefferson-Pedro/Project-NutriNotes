package br.com.nutrinotes.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		
		http.csrf().disable()
		 .authorizeHttpRequests()
		 .requestMatchers(HttpMethod.POST, "/user", "/login").permitAll()
		 
		 .requestMatchers(HttpMethod.POST, "/business/new", "/checklist/new", "/profile/**", 
				 							"question/**", "/item/**", "template/**").permitAll()
		 
		 .requestMatchers(HttpMethod.GET, "/profile/**", "/business/**", "/checklist/**", 
				 						  "/reminder/**", "/item/**", "question/**", "template/**" ).permitAll()
		 
		 .requestMatchers(HttpMethod.DELETE, "/business/{id}", "/checklist/{id}", "question/{id}", 
				 							"/item/delete/", "template/{id}"  ).permitAll()
		 
		 .requestMatchers(HttpMethod.PUT, "/business/edit/{id}", "/checklist/edit/{id}", 
				 						 "question/edit/{id}","/item/edit/", "template/edit/{id}"  ).permitAll()
	
		 .anyRequest().authenticated().and().cors();

		http.addFilterBefore(new MyFilter(), UsernamePasswordAuthenticationFilter.class);
		
		return http.build();
		
	}
}
