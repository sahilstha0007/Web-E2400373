package webbe.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import webbe.backend.repository.UserRepository;
import webbe.backend.model.User;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean registerUser(String username, String password) {
        // Check if the user already exists
        if (userRepository.existsByUsername(username)) {
            return false;  // User exists, return false
        }

        // Create a new user and save them in the database
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);  // In a real app, hash the password before saving

        userRepository.save(user);
        return true;
    }

    public boolean authenticateUser(String username, String password) {
        // Find the user by username
        User user = userRepository.findByUsername(username);

        // If the user exists, check the password (for now, we are assuming it's plain text)
        return user != null && user.getPassword().equals(password);
    }
}
