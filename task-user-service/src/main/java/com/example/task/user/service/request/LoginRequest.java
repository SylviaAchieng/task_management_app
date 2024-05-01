package com.example.task.user.service.request;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.RequestHeader;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class LoginRequest {
    private String email;
    private String password;
}
