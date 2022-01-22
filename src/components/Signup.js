import React from 'react';
import "../css/signup.css";

function Signup(){
    return(
        <div>
            <header>
        <h2 id="heading-of-page">Create new account</h2>
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
                    <td><button type="submit" id="register">Create account</button></td>
                </tr>
            </table>
        </form>
         <div>
        <hr id="horizontal-line"/>   
        <button type="submit" className="sign-up-options"><span><img src="https://img.icons8.com/color/25/000000/google-logo.png"/>Sign up with Google</span></button>
        </div> 
    </main>
        </div>
    );
}

export default Signup