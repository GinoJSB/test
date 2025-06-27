package com.example.demo.service.user;

import com.example.demo.model.Entity.User;
import java.util.Optional;

public interface IUserService {
    User register(String username, String password);
    Optional<User> findByUsername(String username);
    User authenticate(String username, String password);

}
