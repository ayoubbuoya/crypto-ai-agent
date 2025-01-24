import { PlusCircle, MessageCircle } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-4 flex flex-col">
      <button className="flex items-center justify-center w-full py-2 px-4 mb-4 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
        <PlusCircle className="mr-2" size={18} />
        New chat
      </button>
      <div className="flex-grow overflow-y-auto">
        <div className="mb-2 text-sm text-gray-400">Today</div>
        <button className="flex items-center w-full py-2 px-3 rounded hover:bg-gray-800 transition-colors">
          <MessageCircle className="mr-2" size={18} />
          <span className="truncate">ChatGPT-like interface</span>
        </button>
      </div>
    </div>
  );
}
