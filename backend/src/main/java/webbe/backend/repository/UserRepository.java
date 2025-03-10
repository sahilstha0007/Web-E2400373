package webbe.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import webbe.backend.model.User;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUsername(String username);
}
