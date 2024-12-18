package io.github.byttrio.andjo.usersavedset;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class UserSavedSetService {

    @Autowired
    private UserSavedSetRepository userSavedSetRepository;

    public List<UserSavedSet> getAllUserSavedSets() {
        return userSavedSetRepository.findAll();
    }

    public UserSavedSet createUserSavedSet(UserSavedSet userSavedSet) {
        return userSavedSetRepository.save(userSavedSet);
    }
}
