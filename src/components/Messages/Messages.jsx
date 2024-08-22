function Messages() {
  return ( 
    <section className="grid grid-cols-[200px_1fr]">
      <div className="bg-gray-200 p-4">
        <ul className="flex flex-col gap-2">
          <li><a href="#">$Emily</a></li>
          <li><a href="#">$Jimmy</a></li>
          <li><a href="#">$Sally</a></li>
          <li><a href="#">$Maria</a></li>
          <li><a href="#">$Tommy</a></li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4">No messages</div>
    </section> 
  )
}

export { Messages }
