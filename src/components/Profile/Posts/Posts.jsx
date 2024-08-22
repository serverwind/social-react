import { Post } from "./Post/Post";

function Posts() {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">My posts</h2>
      <div className="flex gap-2 mb-4">
      <input className="border border-gray-300 p-2" type="text" />
      <button className="border bg-gray-700 py-2 px-4 text-white text-sm">Post</button>
      </div>

      <div>
        <Post message={"Deployed project to Netlify."} />
        <Post message={"Finished course lessons 11-16."} />
        <Post message={"Hi! This is a first post."} />
      </div>
    </div>
  )
}

export { Posts };