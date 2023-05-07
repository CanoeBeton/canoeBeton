import React from 'react'
import { useRouter } from 'next/router'
import { getToken } from '../src/api/admin'

const Admin = () => {
  const [email, setEmail] = React.useState('admin@canoe.ca')
  const [password, setPassword] = React.useState('password')
  const [message, setMessage] = React.useState('')

  const router = useRouter()

  const submitHandler = () => {
    if (email === '' || password === '')
      return setMessage('please fill in all fields')

    getToken({ email: email.toString(), password: password.toString() }).then(
      (res) => {
        if (res) {
          document.cookie = `token=${res.token}`
          router.push('/admin/member')
        } else {
          setMessage('invalid credentials')
        }
      }
    )
  }
  return (
    <div className="grid place-items-center h-screen">
      <form className="border border-blue-700 rounded p-10 flex flex-col">
        <p>email</p>
        <input
          type="text"
          className=" border border-black mb-3"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <p>password</p>
        <input
          type="password"
          className="border border-black mb-3"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          className="bg-blue-700 hover:bg-blue-600 text-white rounded p-2"
          onClick={submitHandler}
          type="button"
          value="login"
        />

        <p>{message}</p>
      </form>
    </div>
  )
}

export default Admin
