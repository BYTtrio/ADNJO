package io.github.byttrio.andjo.user;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String username;
    private String email;
    private String password;
    private Integer totalPoints;
    private LocalDateTime updatedAt = LocalDateTime.now();
    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
}
