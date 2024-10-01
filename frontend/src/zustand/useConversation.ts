import { create } from "zustand";

// type ConversationType = {
//   id: string;
//   fullname: string;
//   profilePic: string;
// };

// type MessageType = {
//   id: string;
//   body: string;
//   senderId: string;
// };

interface ConversationState {
  selectedConversation: ConversationType | null;
  setSelectedConversation: (conversation: ConversationType | null) => void;
  messages: MessageType[];
  setMessages: (messages: MessageType[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conversation) =>
    set({ selectedConversation: conversation }),
  messages: [],
  setMessages: (messages) => set({ messages: messages }),
}));

export default useConversation;
