package io.github.byttrio.andjo.usersavedset;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface UserSavedSetRepository extends JpaRepository<UserSavedSet, UUID> {}
