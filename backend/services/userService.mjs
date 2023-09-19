import User from '../model/users.mjs';

class userService {
    static async getById(id) {
        return User.findById(id);
    }
}

export default userService;