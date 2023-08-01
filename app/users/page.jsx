import React from 'react'
import getUsers from '../libs/getUsers'
import Link from 'next/link'

export default async function UsersPage() {
  const users = await getUsers()
  console.log(users)
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">Users</h1>
      {users.map((user) => {
        return (
          <>
            <p key={user.id} className="text-2xl font-bold">
              <Link href={`/users/${user.id}`}>
                {user.name}
              </Link>
            </p>
            <p className="text-xl">{user.email}</p>
            <p className="text-xl">{user.website}</p>
          </>
        )
      })
      }
    </div>
  )
}
