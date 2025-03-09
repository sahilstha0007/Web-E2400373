package webbe.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import webbe.backend.model.User;
import webbe.backend.repository.UserRepository;
import webbe.backend.dto.LoginRequest;
import webbe.backend.dto.SignupRequest;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<?> registerUser(SignupRequest request) {
        Optional<User> existingUser = userRepository.findByUsername(request.getUsername());
        if (existingUser.isPresent()) {
            return ResponseEntity.badRequest().body("Username already taken!");
        }

        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(request.getPassword());  // No encryption
        user.setRole(request.getRole());

        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    public ResponseEntity<?> authenticateUser(LoginRequest request) {
        Optional<User> userOptional = userRepository.findByUsername(request.getUsername());

        if (userOptional.isEmpty() ||
                !request.getPassword().equals(userOptional.get().getPassword())) {
            return ResponseEntity.badRequest().body("Invalid username or password!");
        }

        return ResponseEntity.ok("Login successful!");
    }
}
