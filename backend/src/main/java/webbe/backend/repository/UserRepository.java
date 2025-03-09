package webbe.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import webbe.backend.model.User;

public interface UserRepository extends MongoRepository<User, String> {
    boolean existsByUsername(String username);
    User findByUsername(String username);
}
