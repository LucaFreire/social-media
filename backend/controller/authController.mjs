import Users from '../model/users.mjs'
import securityService from '../services/securityservice.mjs';

class authController {
    static async register(req, res) {
        const { name, email, birthdate, password } = req.body;

        // TODO: isNewUser

        if (!name || !email || !birthdate || !password)
            return res.status(400).send({ message: "Null input(s)" });

        const bytes = CryptoJS.AES.decrypt(password, process.env.PASSWORDSECRET);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        const salt = securityService.GenerateSalt();
        const hash = securityService.ApplyHash(originalPassword, salt);

        const user = new Users({
            name: name,
            email: email,
            birthdate: birthdate,
            hashCode: hash,
            salt: salt
        });

        try {
            const userResponse = await user.save();
            return res.status(200).send(userResponse);
        } catch (error) {
            return res.status(500).send({ error: error })
        }
    }

    static async login(req, res) {
        const { email, password } = req.body;

        if (!email || !password)
            return res.status(401).send({ message: "Null Input(s)" });

        try {
            const user = await Users.findOne({ email: email });
            if (!user)
                return res.status(400).send({ message: "Not Found" });

            const bytes = CryptoJS.AES.decrypt(password, process.env.PASSWORDSECRET);
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
            const hash = securityService.ApplyHash(originalPassword, user.salt);

            if (user.hashCode != hash)
                return res.status(400).send({ message: "Invalid password or email" });

            const secret = process.env.SECRET;
            const token = jwt.sign(
                {
                    id: user._id
                },
                secret,
                {
                    expiresIn: '2 days'
                }
            );
            return res.status(200).send({ token: token })

        } catch (error) {
            res.status(500).send({ error: error })
        }

    }
}

export default authController;