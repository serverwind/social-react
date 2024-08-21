function Profile() {
  return (
    <main>
      <Brand />
      <Bio />
      <Posts />
    </main>
  );
}

function Brand() {
  return (
    <div className="h-48 bg-black flex justify-center items-center">
      <h1 className="text-2xl text-white">User Name</h1>
    </div>
  );
}

function Bio() {
  return (
    <div className="flex gap-4 p-4">
      <Photo />
      <UserInfo />
    </div>
  )
}

function Photo() {
  return (
    <div className="h-24 w-24 bg-gray-800 rounded-full flex justify-center items-center text-white font-bold">UN</div>
  )
}

function UserInfo() {
  return (
      <ul>
        <li>:: User Name</li>
        <li>:: 16 November</li>
        <li>:: Frontend Developer</li>
        <li>:: serverwind.github.io</li>
      </ul>
  )
}

function Posts() {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">My posts</h2>
      <div className="flex gap-2 mb-4">
      <input className="border border-gray-300 p-2" type="text" />
      <button className="border bg-gray-700 py-2 px-4 text-white text-sm">Post</button>
      </div>

      <div>
        <p>No posts yet.</p>
      </div>
    </div>
  )
}

export { Profile };
