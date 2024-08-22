function Messages() {
  return ( 
    <section className="grid grid-cols-[200px_1fr]">
      <div className="bg-gray-200 p-4">
        <ul className="flex flex-col gap-2">
          <li><a href="#"><span className="text-gray-700 font-bold hover:underline transition duration-300">$</span> Emily</a></li>
          <li><a href="#"><span className="text-gray-700 font-bold hover:underline transition duration-300">$</span> Jimmy</a></li>
          <li><a href="#"><span className="text-gray-700 font-bold hover:underline transition duration-300">$</span> Sally</a></li>
          <li><a href="#"><span className="text-gray-700 font-bold hover:underline transition duration-300">$</span> Maria</a></li>
          <li><a href="#"><span className="text-gray-700 font-bold hover:underline transition duration-300">$</span> Tommy</a></li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4">No messages</div>
    </section> 
  )
}

export { Messages }
