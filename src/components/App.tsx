import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'

const GoogleLoginApp = () => {
  return (
    <GoogleOAuthProvider clientId='914628494898-onc9q6mppitoa680q721r42ki64hh556.apps.googleusercontent.com'>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      />
    </GoogleOAuthProvider>
  )
}

export default GoogleLoginApp
