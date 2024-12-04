package com.job_seeker.service;

import com.job_seeker.dto.LogInDTO;
import com.job_seeker.dto.UserDTO;
import com.job_seeker.model.User;
import com.job_seeker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;


    // Sign-up logic
    public void signUp(UserDTO userDto) throws Exception {
        if (userRepository.findByEmail(userDto.getEmail()).isPresent()) {
            throw new Exception("Email already registered");
        }

        User user = new User();

        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(BCrypt.hashpw(userDto.getPassword(), BCrypt.gensalt())); // Encrypt the password

        userRepository.save(user);
    }

    // Sign-in logic
    public User signIn(LogInDTO logInDTO) throws Exception {
        User user = userRepository.findByEmail(logInDTO.getEmail())
                .orElseThrow(() -> new Exception("Invalid email or password"));

        if (!BCrypt.checkpw(logInDTO.getPassword(), user.getPassword())) {
            throw new Exception("Invalid email or password");
        }

        return user;
    }
}
