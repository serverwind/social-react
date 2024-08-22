import { User } from "./User/User";
import { Message } from "./Message/Message";

function Messenger() {
  return (
    <section className="grid grid-cols-[200px_1fr]">
      <div className="bg-gray-200 p-4">
        <ul className="flex flex-col gap-2">
          <User chat="/messenger/1" name="Emily" />
          <User chat="/messenger/2" name="Jimmy" />
          <User chat="/messenger/3" name="Sally" />
          <User chat="/messenger/4" name="Maria" />
          <User chat="/messenger/5" name="Tommy" />
        </ul>
      </div>
      <div className="bg-gray-100 p-4">
        <Message message="Hello, how are you?" />
        <Message message="Thanks!" />
      </div>
    </section>
  );
}

export { Messenger };
