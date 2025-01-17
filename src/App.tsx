import React, { useState, useEffect } from 'react';

const App = () => {
  const [messages, setMessages] = useState([]); // Список полученных сообщений
  const [inputValue, setInputValue] = useState(''); // Текст из input

  // Канал создается один раз, когда компонент монтируется
  const channel = React.useRef(null);

  useEffect(() => {
    debugger
    // Инициализация канала только при монтировании
    //@ts-ignore
    channel.current = new BroadcastChannel('react_channel');

    // Обработчик для входящих сообщений
    const messageHandler = (event:any) => {

      //@ts-ignore
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };
    //@ts-ignore
    // Подписка на канал
    channel.current.addEventListener('message', messageHandler);

    // Очищаем подписку при размонтировании компонента

    return () => {
      debugger
      //@ts-ignore
      channel.current.removeEventListener('message', messageHandler);
      //@ts-ignore
      channel.current.close(); // Закрываем канал
    };
  }, []); // Пустой массив зависимостей гарантирует, что useEffect выполнится только при монтировании и размонтировании

  const sendMessage = () => {
    if (inputValue.trim()) {
      //@ts-ignore
      channel.current.postMessage(inputValue); // Отправляем сообщение
      setInputValue(''); // Очистка поля ввода
    }
  };

  return (
      <div style={{ padding: '20px' }}>
        <h1>BroadcastChannel в React</h1>

        <div>
          <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Введите сообщение"
              style={{ padding: '10px', width: '300px', marginRight: '10px' }}
          />
          <button onClick={sendMessage} style={{ padding: '10px 20px' }}>
            Отправить
          </button>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h2>Полученные сообщения:</h2>
          <ul>
            {messages.map((msg, index) => (
                <li key={index} style={{ marginBottom: '10px' }}>
                  {msg}
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default App;
