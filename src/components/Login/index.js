// Write your JS code here
import './index.css'

import Cookies from 'js-cookie'

import {Redirect,withRouter} from 'react-router-dom'

const Login = props => {
    
    const jwtToken=Cookies.get('jwt_token')

    const onSuccessfulLogin = jwtToken => {
        const {history} = props
        Cookies.set('jwt_token',jwtToken,{expires:40,})
        history.replace('/')
    }

    const onClickLogin = async () => {
        const url='https://apis.ccbp.in/login'
        const userDetails={username:'rahul',password:'rahul@2021'}
        const options={
            method:'POST',
            body:JSON.stringify(userDetails),
        }
        const response = await fetch(url,options)
        const data = await response.json()
        if(response.ok===true){
            onSuccessfulLogin(data.jwt_token)
        }
    }
    if(jwtToken!==undefined){
        return <Redirect to="/" />
    }
    
    return(
        <div className="login-container">
        <h1 className="main-heading">Please Login</h1>
        <button type="button" className="login-btn" onClick={onClickLogin}>
        Login with Sample Creds
        </button>
        </div>
    )
}
export default withRouter(Login)
