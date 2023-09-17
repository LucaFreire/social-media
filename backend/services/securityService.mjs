import { decodeBase64, encodeBase64 } from 'bcryptjs';
import { sha256, sha224 } from 'js-sha256';

class securityService {

    static ApplyHash(password, salt) {

        passSalt = password + salt;
        var bytes = encodeBase64(passSalt);
        var hashBytes = sha224(bytes);
        var hash = decodeBase64(hashBytes);

        return hash;
    }

    static GenerateSalt() {
        return crypto.randomBytes(16).toString('base64');
    }


}

export default securityService;