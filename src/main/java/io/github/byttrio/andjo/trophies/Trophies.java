package io.github.byttrio.andjo.trophies;

import io.github.byttrio.andjo.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "trophies")
public class Trophies {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    @OneToOne
    @JoinColumn(name = "users_id", nullable = false)
    private User user_id;
    private String name;
    @Lob // Jakarta large object type
    private byte[] image;
    @Column(updatable = false)
    private LocalDateTime awardedAt = LocalDateTime.now();
    

}