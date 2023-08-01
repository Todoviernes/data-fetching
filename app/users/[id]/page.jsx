import getUser from "@/app/libs/getUser"
import getUserPosts from "@/app/libs/getUserPosts"
import { Suspense } from "react"
import UserPosts from "@/app/components/UserPosts"

export default async function UserPage({ params: { id } }) {
    // initiate both request in parellel
    const userData = await getUser(id)
    const userPosts = await getUserPosts(id)

    const user = await userData

    return (
        <div className="m-20">
            <h1 className="text-5xl font-bold">User Info</h1>
            <p className="text-2xl">{userData.name}</p>
            <p className="text-2xl">{userData.username}</p>
            <p className="text-xl">{userData.email}</p>
            <p className="text-xl">{userData.website}</p>
            <h2 className="text-5xl font-bold mt-20">Posts</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <UserPosts promise={userPosts} />
            </Suspense>
            
        </div>
    )
}
