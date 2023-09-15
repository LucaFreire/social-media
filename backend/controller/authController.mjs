import Users from '../model/users.mjs'
import securityService from '../services/securityservice.mjs';

class authController {
    static async register(req, res) {
        const { name, email, birthdate, password } = req.body;

        // isNewUser
        if (!name || !email || !birthdate || !password)
            return res.status(400).send({ message: "Null input(s)" });

        const salt = securityService.GenerateSalt();
        const hash = securityService.ApplyHash(password, salt);

        const user = new Users({    
            name: name,
            email: email,
            birthdate: birthdate,
            hashCode: hash,
            salt: salt
        });

        try {
            const userr = await user.save();
            res.status(200).send(userr);
        } catch (error) {
            res.status(500).send({ error: error })
        }
    }

}

export default authController; 