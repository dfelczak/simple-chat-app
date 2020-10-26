import React, { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onMessageDispatch: (value: string) => void;
}

export const MessageDispatcher: React.FC<Props> = ({ onMessageDispatch }) => {
  const [messageText, setMessageText] = useState('');

  const handleInputChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    setMessageText(() => currentTarget.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (messageText !== '') {
      setMessageText(() => '');
      onMessageDispatch(messageText);
    }
  };

  return (
    <form className="absolute bottom-0 w-full" onSubmit={handleSubmit}>
      <input
        value={messageText}
        onChange={handleInputChange}
        type="text"
        name="message"
        placeholder="What's up?"
        className="pl-4 pr-16 py-2 border border-green-500 focus:outline-none w-full rounded-md bg-while"
      />
      <button
        type="submit"
        className="absolute right-0 bottom-0 text-green-600 bg-white hover:text-green-500 m-1 px-3 py-1 w-auto transition-color duration-100 focus:outline-none"
      >
        Send
      </button>
    </form>
  );
};
