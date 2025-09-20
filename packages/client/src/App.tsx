import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [message, setMessage] = useState("");
  const [messagesArr, setMessagesArr] = useState<
    { name: string; type: "user" | "bot" }[]
  >([]);
  const [conversationId] = useState(uuidv4());
  const [loading, setLoading] = useState(false);

  const fetchData = async (userMessage: string, conversationId: string) => {
    try {
      const response = await fetch(
        "https://chatbot-using-ai-fjg6.onrender.com/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: userMessage,
            conversationId,
          }),
        }
      );
      const data = await response.json();
      return data.message;
    } catch (error) {
      console.error(error);
      return "Error contacting server!";
    }
  };

  const handleClick = async () => {
    if (!message.trim()) return;

    // Add user message
    setMessagesArr((prev) => [...prev, { name: message, type: "user" }]);
    setLoading(true);
    // Get bot reply
    const botReply = await fetchData(message, conversationId);

    // Add bot message
    setMessagesArr((prev) => [...prev, { name: botReply, type: "bot" }]);

    setMessage("");

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-center text-2xl font-bold">AI Chatbot</h1>
      </header>

      {/* Chat Section */}
      <main className="flex-1 overflow-y-auto p-6 space-y-4">
        {messagesArr.map((mesg, i) => (
          <div
            key={i}
            className={`flex ${
              mesg.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <span
              className={`px-4 py-2 max-w-xs md:max-w-md lg:max-w-lg rounded-2xl text-sm md:text-base shadow-md ${
                mesg.type === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-300 text-black rounded-bl-none"
              }`}
            >
              {" "}
              {mesg.name}
            </span>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <span className="px-4 py-2 rounded-2xl bg-gray-200 text-gray-600 italic animate-pulse">
              Loading...
            </span>
          </div>
        )}
      </main>

      {/* Input Section */}
      <Card className="m-4 shadow-lg">
        <CardHeader>
          <Textarea
            placeholder="Ask me..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-none outline-none resize-none"
            rows={3}
          />
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button
            onClick={handleClick}
            className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
          >
            Send
          </Button>
        </CardFooter>
      </Card>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-600 py-3">
        This AI powered Chatbot was created by{" "}
        <span className="font-semibold">Zalmai Zazai</span>
      </footer>
    </div>
  );
}

export default App;
