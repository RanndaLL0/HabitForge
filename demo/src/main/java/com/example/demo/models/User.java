package com.example.demo.models;
import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "t_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;

    @Column(name = "username", unique = false, length = 30)
    private String username;

    @Column(name = "email",unique = true, length = 50)
    private String email;

    @Column(name = "password", unique = true, length = 255)
    private String password;

}