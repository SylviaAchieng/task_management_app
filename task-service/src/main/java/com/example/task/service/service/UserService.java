package com.example.task.service.service;

import com.example.task.service.modal.UserDetail;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name = "USER-SERVICE", url ="http://localhost:5001" )
public interface UserService {

    @GetMapping("api/users/profile")
    public UserDetail getUserProfile(@RequestHeader("Authorization") String jwt);
}
