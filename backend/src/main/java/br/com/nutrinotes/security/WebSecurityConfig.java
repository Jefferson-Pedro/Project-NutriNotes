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
		.requestMatchers(HttpMethod.POST, "/user").permitAll()
		.requestMatchers(HttpMethod.POST, "/login").permitAll()
		.requestMatchers(HttpMethod.GET, "/profile").permitAll()
		.requestMatchers(HttpMethod.GET, "/profile/{id}").permitAll()
		.requestMatchers(HttpMethod.GET, "/business").permitAll()
		.requestMatchers(HttpMethod.GET, "/business/{id}").permitAll()
		.requestMatchers(HttpMethod.POST, "/business").permitAll()
		.requestMatchers(HttpMethod.DELETE, "/business/{id}").permitAll()
		.anyRequest().authenticated().and().cors();
		
		http.addFilterBefore(new MyFilter(), UsernamePasswordAuthenticationFilter.class);
		
		return http.build();
		
	}
}
