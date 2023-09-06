import { ChatWindow } from "@/components/ChatWindow";
import { label } from "@/config/appLabel";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded-md bg-[#231f78] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4 text-center">
        {label.bannerTitle}
      </h1>
      <p className="text-l">{label.description}</p>
      <div dangerouslySetInnerHTML={{ __html: label.examples }}></div>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🧑🏼"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
