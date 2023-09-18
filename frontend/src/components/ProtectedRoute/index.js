import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';


function ProtectedRoute({ Denied, Target }) {

    const [page, setPage] = useState(<></>);

    useEffect(() => {
        renderPage();
    }, [])

    function renderPage() {
        const token = sessionStorage.getItem('token');

        if (!token) {
            setPage(Denied);
            return;
        }

        const decodeToken = jwt_decode(token);
        const { exp } = decodeToken;

        if (exp + '000' - Date.now() <= 0) {
            setPage(Denied);
            return;
        }
        setPage(Target);
    }

    return page;
};

export default ProtectedRoute;