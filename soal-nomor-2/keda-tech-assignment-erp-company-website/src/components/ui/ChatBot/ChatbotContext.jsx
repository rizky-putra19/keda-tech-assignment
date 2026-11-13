import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

import {
  CHATBOT_INITIAL_MESSAGES,
  CHATBOT_RESPONSES,
  CHATBOT_DEFAULT_RESPONSE,
} from "@/constant/chatbot.constants";

const ChatbotContext = createContext(null);

export function ChatbotProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(CHATBOT_INITIAL_MESSAGES);

  const nextIdRef = useRef(CHATBOT_INITIAL_MESSAGES.length + 1);

  const toggleChatbot = useCallback(() => {
    setIsOpen((previous) => !previous);
  }, []);

  const closeChatbot = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleInputChange = useCallback((event) => {
    setInput(event.target.value);
  }, []);

  const handleSendMessage = useCallback(
    (event) => {
      event.preventDefault();

      const text = input.trim();

      if (!text) return;

      const normalizedText = text.toLowerCase();

      const matchedResponse = CHATBOT_RESPONSES.find((item) =>
        item.keywords.some((keyword) => normalizedText.includes(keyword)),
      );

      const userMessage = {
        id: nextIdRef.current++,
        role: "user",
        text,
      };

      const assistantMessage = {
        id: nextIdRef.current++,
        role: "assistant",
        text: matchedResponse?.response ?? CHATBOT_DEFAULT_RESPONSE,
      };

      setMessages((previous) => [...previous, userMessage, assistantMessage]);

      setInput("");
    },
    [input],
  );

  const value = {
    isOpen,
    input,
    messages,
    toggleChatbot,
    closeChatbot,
    handleInputChange,
    handleSendMessage,
  };

  return (
    <ChatbotContext.Provider value={value}>{children}</ChatbotContext.Provider>
  );
}

export function useChatbot() {
  const context = useContext(ChatbotContext);

  if (!context) {
    throw new Error("useChatbot must be used within ChatbotProvider");
  }

  return context;
}
