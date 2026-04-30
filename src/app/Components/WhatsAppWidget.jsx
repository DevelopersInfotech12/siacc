"use client";
import { useState } from "react";

const WHATSAPP_NUMBER = "919999999999"; // Replace with your number (country code + number, no +)
const DEFAULT_MESSAGE = "Hello! I'd like to know more about your compliance services.";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const handleSend = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  return (
    <>
      {/* Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl shadow-xl overflow-hidden bg-white border border-gray-100">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#25D366" }}>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm shrink-0">
              SI
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">Siacc India</p>
              <p className="text-white/80 text-xs">Compliance Consultants</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="ml-auto text-white/80 hover:text-white text-lg leading-none"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Chat bubble */}
          <div className="p-4 bg-[#ECE5DD]">
            <div className="bg-white rounded-xl rounded-tl-none px-3 py-2 text-sm text-gray-700 shadow-sm max-w-[85%]">
              👋 Hi there! How can we help you with compliance & certification?
              <p className="text-[10px] text-gray-400 mt-1 text-right">Siacc India</p>
            </div>
          </div>

          {/* Input area */}
          <div className="px-3 py-3 bg-white flex items-end gap-2">
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 resize-none rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-green-400"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
              style={{ background: "#25D366" }}
              aria-label="Send on WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* FAB Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg viewBox="0 0 32 32" fill="white" width="26" height="26">
            <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.7.7 5.3 2 7.6L.4 31.6l8.2-2c2.2 1.2 4.7 1.8 7.4 1.8 8.6 0 15.6-7 15.6-15.6C31.6 7.4 24.6.4 16 .4zm0 28.6c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.2 1.3-4.7-.3-.5C3.7 20.8 3 18.5 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 13-13 13zm7.1-9.7c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5-.1-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .4-.4.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.2 2.6 4 6.4 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.4.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z" />
          </svg>
        )}
      </button>
    </>
  );
}