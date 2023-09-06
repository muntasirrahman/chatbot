import type { Message } from "ai/react";

export function ChatMessageBubble(props: {
  message: Message;
  aiEmoji?: string;
}) {
  const colorClassName =
    props.message.role === "user" ? "bg-blue-600" : "bg-slate-50 text-black";
  const alignmentClassName =
    props.message.role === "user" ? "mr-auto" : "ml-auto mr-1";
  const prefix = props.message.role === "user" ? "🧑🏼‍💻" : props.aiEmoji;
  return (
    <div
      className={`${alignmentClassName} ${colorClassName} flex rounded px-2 py-1 mb-2 max-w-[90%] md:text-md md:px-4 md:py-2 md:mb-8 md:max-w-[80%]`}
    >
      <div className="mr-2">{prefix}</div>
      <div className="whitespace-pre-wrap">{props.message.content}</div>
    </div>
  );
}
