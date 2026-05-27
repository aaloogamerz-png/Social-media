import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Login() {

const navigate = useNavigate();

const [isRegister, setIsRegister] =
useState(false);

const [formData, setFormData] =
useState({
username: "",
email: "",
password: "",
});

const handleSubmit = async () => {

try {

const url = isRegister
? "http://localhost:5000/api/auth/register"
: "http://localhost:5000/api/auth/login";

const res = await axios.post(
url,
formData
);

if(!isRegister) {

localStorage.setItem(
"token",
res.data.token
);

navigate("/home");

}

} catch(err) {

console.log(err);

}

};

return (

<div>

<h1>Social Media App</h1>

{
isRegister && (

<input
placeholder="Username"
onChange={(e) =>
setFormData({
...formData,
username: e.target.value,
})
}
/>

)
}

<input
placeholder="Email"
onChange={(e) =>
setFormData({
...formData,
email: e.target.value,
})
}
/>

<input
type="password"
placeholder="Password"
onChange={(e) =>
setFormData({
...formData,
password: e.target.value,
})
}
/>

<button onClick={handleSubmit}>
{isRegister ? "Register" : "Login"}
</button>

<button
onClick={() =>
setIsRegister(!isRegister)
}
>
Switch
</button>

</div>

);

}
