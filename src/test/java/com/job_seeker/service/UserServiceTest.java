package com.job_seeker.service;

import com.job_seeker.dto.LogInDTO;
import com.job_seeker.dto.UserDTO;
import com.job_seeker.model.User;
import com.job_seeker.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mindrot.jbcrypt.BCrypt;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testSignUpSuccess() throws Exception {
        UserDTO userDTO = new UserDTO("Test User", "test@example.com", "password123");
        when(userRepository.findByEmail(userDTO.getEmail())).thenReturn(Optional.empty());
        
        userService.signUp(userDTO);
        
        verify(userRepository).save(any(User.class));
    }

    @Test
    void testSignUpWithExistingEmail() {
        UserDTO userDTO = new UserDTO("Test User", "existing@example.com", "password123");
        when(userRepository.findByEmail(userDTO.getEmail())).thenReturn(Optional.of(new User()));
        
        Exception exception = assertThrows(Exception.class, () -> {
            userService.signUp(userDTO);
        });
        
        assertEquals("Email already registered", exception.getMessage());
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    void testSignInSuccess() throws Exception {
        String password = "password123";
        String hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
        
        User user = new User();
        user.setEmail("test@example.com");
        user.setPassword(hashedPassword);
        
        LogInDTO loginDTO = new LogInDTO();
        loginDTO.setEmail("test@example.com");
        loginDTO.setPassword(password);
        
        when(userRepository.findByEmail(loginDTO.getEmail())).thenReturn(Optional.of(user));
        
        User result = userService.signIn(loginDTO);
        
        assertNotNull(result);
    }

    @Test
    void testSignInWithInvalidEmail() {
        LogInDTO loginDTO = new LogInDTO();
        loginDTO.setEmail("nonexistent@example.com");
        loginDTO.setPassword("password123");
        
        when(userRepository.findByEmail(loginDTO.getEmail())).thenReturn(Optional.empty());
        
        Exception exception = assertThrows(Exception.class, () -> {
            userService.signIn(loginDTO);
        });
        
        assertEquals("Invalid email or password", exception.getMessage());
    }
}