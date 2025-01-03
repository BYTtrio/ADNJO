package io.github.byttrio.andjo.user;

import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

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
