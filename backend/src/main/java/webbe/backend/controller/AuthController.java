package webbe.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import webbe.backend.dto.LoginRequest;
import webbe.backend.dto.SignupRequest;
import webbe.backend.service.UserService;

@RestController
public class AuthController {

    @Autowired
    private UserService authService;  // Service to handle authentication logic

    @CrossOrigin(origins = "http://localhost:5173")  // CORS setup for frontend (React)
    @PostMapping("/auth/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest signupRequest) {
        // Call AuthService to register the user
        boolean isUserCreated = authService.registerUser(signupRequest.getUsername(), signupRequest.getPassword());

        if (isUserCreated) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Signup successful!");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists!");
        }
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping("/auth/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        // Call AuthService to authenticate the user
        boolean isAuthenticated = authService.authenticateUser(loginRequest.getUsername(), loginRequest.getPassword());

        if (isAuthenticated) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password!");
        }
    }
}
