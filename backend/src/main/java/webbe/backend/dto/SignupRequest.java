package webbe.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupRequest {
    private String username;
    private String password;

    public SignupRequest() {}

    public SignupRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
