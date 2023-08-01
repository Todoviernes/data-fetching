import React from 'react'

export default async function UserPosts({ promise }) {
    const posts = await promise
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id} className="my-10">
                        <h2 className="text-2xl font-bold">{post.title}</h2>
                        <p className="text-xl">{post.body}</p>
                    </div>
                )
            }
            )}
        </div>
    )
}
