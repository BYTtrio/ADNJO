import { useState } from "react";
import { Send } from "lucide-react";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/chat/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { Button } from "@/components/ui/button"

const Chatbot = () => {
  const [messages, setMessages] = useState<
    { content: string; variant: "sent" | "received" }[]
  >([]);
  const [inputMessage, setInputMessage] = useState("");
  const [context, setContext] = useState("");

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      const userMessage = {
        content: inputMessage,
        variant: "sent" as const,
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      setInputMessage("");

      try {
        const response = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ context, question: inputMessage }),
        });

        const data = await response.json();
        const botResponse = {
          content: data.response,
          variant: "received" as const,
        };

        setMessages((prevMessages) => [...prevMessages, botResponse]);
        setContext(data.context);
      } catch (error) {
        console.error("Error communicating with chatbot:", error);
        const errorMessage = {
          content: "Sorry, something went wrong!",
          variant: "received" as const,
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
  };

  const getAvatarSrc = (variant: "sent" | "received") => {
    if (variant === "sent") {
      return "https://i.redd.it/no-spoilers-arcane-viktor-illustration-icon-i-made-v0-xplol0iummmb1.jpg?width=1920&format=pjpg&auto=webp&s=3ab95a0570cdfd30494fa093abb63b943bc73c50";
    }
    return "data:image/jpeg;base64,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";
  };

  return (
    <ExpandableChat size="lg" position="bottom-right">
      <ExpandableChatHeader className="flex-col text-center justify-center">
        <h1 className="text-xl font-semibold">Chat with Bot 🤖</h1>
        <p>Ask any question for our AI to answer</p>
      </ExpandableChatHeader>
      <ExpandableChatBody>
        <ChatMessageList>
          {messages.map((msg, index) => (
            <ChatBubble key={index} variant={msg.variant}>
              <ChatBubbleAvatar src={getAvatarSrc(msg.variant)}/>
              <ChatBubbleMessage>{msg.content}</ChatBubbleMessage>
            </ChatBubble>
          ))}
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter>
        <ChatInput
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <Button
          type="button"
          onClick={handleSendMessage}
          className="mt-4 float-right"
        >Send message
          <Send className="h-6 w-6" />
        </Button>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
};

export default Chatbot;
