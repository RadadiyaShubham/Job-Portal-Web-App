package com.jobportal;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;



@Configuration
public class SecurityConfig {
	
//	@Autowired
//	private JwtAuthenticationEntryPoint point;
//	@Autowired
//	private JwtAuthenticationFilter filter;
	
	@Bean
	public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration builder) throws Exception {
		return builder.getAuthenticationManager();
	}
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests((req)->req.requestMatchers("/**").permitAll().anyRequest().authenticated());
		http.csrf(csrf->csrf.disable());
		return http.build();
//		http.csrf(csrf->csrf.disable())
//		.authorizeHttpRequests()
//		.requestMatchers("/auth/login", "users/register", "/users/verifyOtp/**", "/uers/sendOtp/**").permitAll()
//		.anyRequest()
//		.authenticated()
//		.and().exceptionHandling(ex->ex.authenticationEntryPoint(point))
//		.sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
//		http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
//		return http.build();
}
}