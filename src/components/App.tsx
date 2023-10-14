import React, { useState } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

const GoogleLoginApp = () => {
  const [decodedData, setDecodedData] = useState<any | null>(null)

  const handleSuccess = (credentialResponse: any) => {
    console.log(credentialResponse)
    const decoded = jwt_decode(credentialResponse.credential as string)
    console.log(decoded)
    setDecodedData(decoded)
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

      {decodedData && (
        <div>
          <h2>Decoded Data</h2>
          <pre>{JSON.stringify(decodedData, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default GoogleLoginApp
