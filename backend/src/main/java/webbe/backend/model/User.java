package webbe.backend.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")  // MongoDB collection
@Getter  // Lombok will generate the getter methods for all fields, including password
@Setter  // Lombok will generate the setter methods
public class User {
    private String id;
    private String username;
    private String password;  // Make sure this field exists in your class
}
