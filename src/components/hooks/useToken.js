import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {

        const email = user?.user?.email;

        const currentUser = {
            email: email,
            name: user?.user?.displayName
        };

        if (email) {
            (async () => {
                const { data } = await axios.put(`https://protected-depths-40320.herokuapp.com/user/${email}`, currentUser);

                if (!data.success) {
                    return alert('try agian')
                }
                const accessToken = data?.token;
                localStorage.setItem('accessToken', accessToken)
                setToken(accessToken)
            })()

        }
    }, [user]);
    return [token];
}
export default useToken;