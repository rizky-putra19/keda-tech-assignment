import { useEffect, useRef } from "react";
import classNames from "classnames";

import { useChatbot } from "./ChatbotContext";

export default function ChatbotUI() {
  const {
    isOpen,
    input,
    messages,
    toggleChatbot,
    closeChatbot,
    handleInputChange,
    handleSendMessage,
  } = useChatbot();

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [messages, isOpen]);

  return (
    <div className="chatbot">
      {isOpen && (
        <div
          id="chatbot-panel"
          className="chatbot__panel"
          role="region"
          aria-label="Chatbot Assistant"
        >
          <div className="chatbot__header">
            <div className="chatbot__header-info">
              <span className="chatbot__avatar">
                <img src="/icons/chatbot.svg" alt="" />
              </span>

              <div className="chatbot__heading">
                <h3>KeDA Tech Assistant</h3>
                <p>Online - Siap membantu</p>
              </div>
            </div>

            <button
              type="button"
              className="chatbot__close"
              onClick={closeChatbot}
              aria-label="Tutup chatbot"
            >
              <img src="/icons/close.svg" alt="" />
            </button>
          </div>

          <div
            className="chatbot__messages"
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={classNames("chatbot__message", {
                  "chatbot__message--user": message.role === "user",
                  "chatbot__message--assistant": message.role === "assistant",
                })}
              >
                {message.text}
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot__form" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Tulis pesan..."
              className="chatbot__input"
              aria-label="Pesan chatbot"
            />

            <button
              type="submit"
              className="chatbot__send"
              disabled={!input.trim()}
              aria-label="Kirim pesan"
            >
              <img src="/icons/send.svg" alt="" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chatbot__floating-button"
        onClick={toggleChatbot}
        aria-label={isOpen ? "Tutup chatbot" : "Buka chatbot"}
        aria-expanded={isOpen}
        aria-controls="chatbot-panel"
      >
        <img
          src={isOpen ? "/icons/close.svg" : "/icons/chatbot.svg"}
          alt="open-close-icon"
          className="chatbot__floating-icon"
        />
      </button>
    </div>
  );
}
