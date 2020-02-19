import React from "react";

import Wrapper from "../components/Wrapper";
import AltNav from "../components/AltNav";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

function Login(){
    return(
       
    <div>

       <Wrapper>
        <AltNav transparent/>
        <LoginForm />
       </Wrapper> 
        <Footer />
    </div>
       
    );
}
export default Login;