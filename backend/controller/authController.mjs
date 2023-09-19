import Users from '../model/users.mjs'
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';
import bcrypt from 'bcryptjs';

class authController {
    static async register(req, res) {
        const { encryptData } = req.body;
        console.log(encryptData)

        if (!encryptData)
            return res.status(400).send({ message: "Null value" });

        const bytes = CryptoJS.AES.decrypt(encryptData, process.env.DECRYPT_JSON);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);

        const userValues = JSON.parse(decrypted);
        const { email, password, name, birthdate } = userValues;

        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = new Users({
            email: email,
            hashCode: hashPassword,
            name: name,
            birthdate: birthdate
        });

        // TODO: isNewUser
        try {
            const userResponse = await user.save();
            return res.status(200).send(userResponse);
        } catch (error) {
            return res.status(500).send({ error: error })
        }
    }

    static async login(req, res) {
        const { encryptData } = req.body;

        if (!encryptData)
            return res.status(400).send({ message: "Null value" });

        const bytes = CryptoJS.AES.decrypt(encryptData, process.env.DECRYPT_JSON);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        const loginValues = JSON.parse(decrypted);

        const { email, password } = loginValues;
        console.log(password);
        try {
            const user = await Users.findOne({ email: email });
            if (!user)
                return res.status(400).send({ message: "Not Found" });

            if (!await bcrypt.compare(password, user.hashCode))
                return res.status(400).send({ message: "Invalid password or email" });

            const secret = process.env.JWT_SECRET;
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
            console.log(error)
            res.status(500).send({ error: error })
        }

    }
}

export default authController;