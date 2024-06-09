package br.com.nutrinotes.security;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		
		http.cors(cors -> {
			cors.configurationSource(this.corsConfigurationSource());
		})
		
		//Desabilita a tela de login do SpringBoot
		.csrf( (csrf) -> { 
			csrf.disable();
		})
		
		.authorizeHttpRequests( (auth) -> {
			auth.requestMatchers(new  AntPathRequestMatcher("/user/new", "POST")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/login", "POST")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/business/new", "POST")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/checklist/new", "POST")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/profile/**", "POST")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/question/**", "POST")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/item/**", "POST")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/template/**", "POST")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/reminder/**", "POST")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/department/new", "POST")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/files/**", "POST")).permitAll()
			
			.requestMatchers(new  AntPathRequestMatcher("/profile/**", "GET")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/business/**", "GET")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/checklist/**", "GET")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/reminder/**", "GET")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/item/**", "GET")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/question/**", "GET")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/template/**", "GET")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/department/**", "GET")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/user/**", "GET")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/files/**", "GET")).permitAll()
			
			.requestMatchers(new  AntPathRequestMatcher("/business/{id}", "DELETE")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/checklist/{id}", "DELETE")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/question/{id}", "DELETE")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/item/delete/", "DELETE")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/template/{id}", "DELETE")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/files/**", "DELETE")).permitAll()
			
			.requestMatchers(new  AntPathRequestMatcher("/business/edit/{id}", "PUT")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/checklist/edit/{id}", "PUT")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/question/edit/{id}", "PUT")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/item/edit/", "PUT")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/template/edit/{id}", "PUT")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/user/edit/{id}", "PUT")).permitAll()
			.requestMatchers(new  AntPathRequestMatcher("/files/edit/{id}", "PUT")).permitAll()
		    .anyRequest().authenticated();
	})
		.addFilterBefore(new NutriFilter(), UsernamePasswordAuthenticationFilter.class)
		.headers((header) -> header.frameOptions((iframe) -> iframe.disable()));
		
		return http.build();
	}
	
	public CorsConfigurationSource corsConfigurationSource() {
	    CorsConfiguration configuration = new CorsConfiguration();
	    configuration.setAllowedOrigins(Arrays.asList("*"));
	    configuration.setAllowedMethods(Arrays.asList("*"));
	    configuration.setAllowedHeaders(Arrays.asList("*"));
	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    source.registerCorsConfiguration("/**", configuration);
	    return source;
	}
}
