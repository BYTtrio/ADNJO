package io.github.byttrio.andjo.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@RequestParam UUID id){
        return userService.getUserById(id);
    }

    @PostMapping
    public User createUser(@RequestParam User user){
        return userService.createUser(user);
    }

    @DeleteMapping("/id")
    public void deleteUser(@RequestParam UUID id){
        userService.deleteUserById(id);
    }

    @PutMapping
    public User updateUser(@RequestParam User user){
        return userService.updateUser(user);
    }

}