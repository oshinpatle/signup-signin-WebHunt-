import React from 'react';
import "../css/signin.css";

function Signin(){
    return(
        <div>
            <header>
            <h2 id="heading-of-page">Login to Your Account</h2>
             <div id="sign-up">
                 <span>Don't have an account?</span>
                 <a href="sign up/index.html"><input type="submit" value="Sign up"/></a>
             </div>
        </header>
        <main>
            <form action="#">
                <table>
                    <tr>
                        <td ><input type="text" name="username" placeholder="User name" required/></td>
                    </tr>
                    <tr>
                        <td><input type="password" name="password" placeholder="Password" required/></td>
                    </tr>
                    <tr>
                        <td><button type="submit" id="log-in">Login to your account</button></td>
                    </tr>
                </table>
            </form>
            <a href="#">Forgot Password?</a>
             <div>
            <hr id="horizontal-line"/>   
            <button type="submit" className="sign-in-options"><span><img src="https://img.icons8.com/color/25/000000/google-logo.png"/>Sign in with Google</span></button>
            </div>
            </main> 
        </div>
    );
}

export default Signin;