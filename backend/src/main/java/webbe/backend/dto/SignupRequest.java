package webbe.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SignupRequest {
    // Getters and Setters
    private String username;
    private String password;
    private String role;

    // Constructors
    public SignupRequest() {}

    public SignupRequest(String username, String password, String role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

}
