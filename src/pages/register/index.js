import React from 'react'

const Register = () => {
  return (
    <div className="register-container">
      <div className="header">
        <p>Invoice Admin</p>
        <div className="needAccount">
          <p>Belum punya akun?</p>
          <Link to="/">
            <Button name="Buat akun"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
