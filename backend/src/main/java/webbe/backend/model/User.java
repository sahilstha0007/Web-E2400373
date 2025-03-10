package webbe.backend.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
@Getter
@Setter
public class User {
    private String id;
    private String username;
    private String password;
}
