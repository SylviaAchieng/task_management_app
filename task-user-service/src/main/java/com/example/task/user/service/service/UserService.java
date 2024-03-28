package com.example.task.user.service.service;

import com.example.task.user.service.modal.User;

import java.util.List;

public interface UserService {

    public User getUserProfile(String jwt);

    public List<User>getAllUsers();
}
