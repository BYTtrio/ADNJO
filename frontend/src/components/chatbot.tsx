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
      return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+";
    }
    return "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvdCI+PHBhdGggZD0iTTEyIDhWNEg4Ii8+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjEyIiB4PSI0IiB5PSI4IiByeD0iMiIvPjxwYXRoIGQ9Ik0yIDE0aDIiLz48cGF0aCBkPSJNMjAgMTRoMiIvPjxwYXRoIGQ9Ik0xNSAxM3YyIi8+PHBhdGggZD0iTTkgMTN2MiIvPjwvc3ZnPg==";
  };

  return (
    <ExpandableChat size="lg" position="bottom-right">
      <ExpandableChatHeader className="flex-col text-center justify-center">
        <h1 className="text-xl font-semibold">Chat with our Bot 🤖</h1>
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
              <ChatBubbleMessage isLoading={isLoading}></ChatBubbleMessage>
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
