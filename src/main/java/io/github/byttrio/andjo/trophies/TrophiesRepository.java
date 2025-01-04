package io.github.byttrio.andjo.trophies;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TrophiesRepository extends JpaRepository<Trophies, UUID> {
    List<Trophies> findAllByUserId(UUID userId);
}
