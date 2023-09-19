const { decodeBase64, encodeBase64 } = 'bcryptjs';
import { sha256, sha224 } from 'js-sha256';
import crypto from 'crypto';

class securityService {

    static ApplyHash(password, salt) {

        var passSalt = password + salt;
        var bytes = btoa(passSalt); // encode
        var hashBytes = sha224(bytes);
        var hash = atob(hashBytes); // decode

        return hash;
    }

    static GenerateSalt() {
        return crypto.randomBytes(16).toString('base64');
    }
}

export default securityService;