package io.github.byttrio.andjo.usersavedset;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/usersavedsets")
public class UserSavedSetController {

    @Autowired
    private UserSavedSetService userSavedSetService;

    @GetMapping
    public List<UserSavedSet> getAllUserSavedSets() {
        return userSavedSetService.getAllUserSavedSets();
    }

    @PostMapping
    public UserSavedSet createUserSavedSet(@RequestBody UserSavedSet userSavedSet) {
        return userSavedSetService.createUserSavedSet(userSavedSet);
    }
}
