import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../init.firebase";

const useAdmin = (user) => {
    const [adminLoad, setAdminLoad] = useState(true);
    const [admin, setAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://protected-depths-40320.herokuapp.com/user/admin/${user?.email}`);
            if (data.email) {
                signOut(auth)
                localStorage.removeItem('accessToken')
            }
            setAdmin(data.admin)
            setAdminLoad(false)

        })()
    }, [user, navigate])
    return [admin, adminLoad]
};

export default useAdmin;