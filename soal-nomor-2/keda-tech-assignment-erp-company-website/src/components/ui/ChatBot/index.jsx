import { ChatbotProvider } from "./ChatbotContext";
import ChatbotUI from "./ChatbotUI";

export default function Chatbot() {
  return (
    <ChatbotProvider>
      <ChatbotUI />
    </ChatbotProvider>
  );
}
