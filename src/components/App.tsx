import React from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

interface GoogleLoginAppProps {
  onDecodedData: (data: any) => void
}

const GoogleLoginApp: React.FC<GoogleLoginAppProps> = ({ onDecodedData }) => {
  const handleSuccess = (credentialResponse: any) => {
    console.log(credentialResponse)
    const decoded = jwt_decode(credentialResponse.credential as string)
    console.log(decoded)

    // Call the parent component's callback function to pass the decoded data
    onDecodedData(decoded)
  }

  return (
    <div>
      <GoogleOAuthProvider clientId='914628494898-onc9q6mppitoa680q721r42ki64hh556.apps.googleusercontent.com'>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => {
            console.log('Login Failed')
          }}
        />
      </GoogleOAuthProvider>
    </div>
  )
}

export default GoogleLoginApp
