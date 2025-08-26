package com.example.demo.services;
import com.example.demo.dtos.UserDTO;
import com.example.demo.models.User;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User save(User user) {
        return userRepository.save(user);
    }

    //public UserDTO getUser(String email) {
    //    User user = userRepository.findByEmail(String email);
    //}

}
