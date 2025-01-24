"use client";

import { useState } from "react";
import { SendHorizonal } from "lucide-react";
import { ChatOpenAI } from "@langchain/openai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

interface IMessage {
  role: "human" | "system" | "model";
  content: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<IMessage[] | null>(null);
  const [model, setModel] = useState<ChatGoogleGenerativeAI>(
    new ChatGoogleGenerativeAI({
      model: "gemini-2.0-flash-exp",
      temperature: 0,
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    })
  );
  const [isChatLoading, setIsChatLoading] = useState(false);

  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const userMessage = input;

    console.log("Sending message:", userMessage);
    console.log("Model:", model);

    setIsChatLoading(true);
    setInput("");

    let newMessages = messages;

    // Add the user's message to the messages array
    if (newMessages) {
      newMessages.push({ role: "human", content: userMessage });
    } else {
      newMessages = [{ role: "human", content: userMessage }];
    }

    setMessages(newMessages);

    const modelResponse = await model.invoke(userMessage);

    console.log("Model response:", modelResponse);

    const modelResponseContent = modelResponse.content;

    console.log("Model response content:", modelResponseContent);

    // add the response to the messages array
    newMessages.push({
      role: "model",
      content: modelResponseContent.toString(),
    });

    setMessages(newMessages);
    setIsChatLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages &&
          messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.role === "human" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-lg p-3 rounded-lg ${
                  m.role === "human" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
        <div className="flex items-center bg-white rounded-lg shadow-md">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors"
          >
            <SendHorizonal size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}
