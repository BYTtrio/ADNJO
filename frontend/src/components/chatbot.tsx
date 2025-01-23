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
import { Button } from "@/components/ui/button";

const Chatbot = () => {
  const [messages, setMessages] = useState<
    { content: string; variant: "sent" | "received" }[]
  >([]);
  const [inputMessage, setInputMessage] = useState("");
  const [context, setContext] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      content: inputMessage,
      variant: "sent" as const,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputMessage("");

    try {
      setIsLoading(true);
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: inputMessage.trim(),
          context: context
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
      }

      const data = await response.json();
      const botResponse = {
        content: data.response,
        variant: "received" as const,
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      setContext(data.context);
    } catch (error) {
      console.error('Error details:', error);
      const errorMessage = {
        content: 'Sorry, I encountered an error while processing your message.',
        variant: "received" as const,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const getAvatarSrc = (variant: "sent" | "received") => {
    if (variant === "sent") {
      return "https://i.redd.it/no-spoilers-arcane-viktor-illustration-icon-i-made-v0-xplol0iummmb1.jpg?width=1920&format=pjpg&auto=webp&s=3ab95a0570cdfd30494fa093abb63b943bc73c50";
    }
    return "https://i1.sndcdn.com/artworks-000316472301-vutf6s-t1080x1080.jpg";
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
          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar src={getAvatarSrc("received")}/>
              <ChatBubbleMessage>Bot is typing...</ChatBubbleMessage>
            </ChatBubble>
          )}
        </ChatMessageList>
      </ExpandableChatBody>
      <ExpandableChatFooter>
        <ChatInput
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here..."
          disabled={isLoading}
        />
        <Button
          type="button"
          onClick={handleSendMessage}
          className="mt-4 float-right"
          disabled={isLoading}
        >
          Send message
          <Send className="h-6 w-6" />
        </Button>
      </ExpandableChatFooter>
    </ExpandableChat>
  );
};

export default Chatbot;
