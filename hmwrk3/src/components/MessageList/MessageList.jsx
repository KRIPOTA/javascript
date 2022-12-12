

export function MessageList({ messages }) {

  return (
    <>
      <h1>MessageList</h1>
      <div>
        {messages.map((item, index) => (
          <p key={index}>{item.author}: {item.text}</p>
        ))}
      </div>
    </>
  )
}
