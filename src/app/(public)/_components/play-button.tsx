"use client";
import { ExtensionProps } from "@/@types";
import { VideoModal } from "@/components/video-modal";
import { Play } from "lucide-react";
import { useState } from "react";

export default function PlayButton({ extension }: ExtensionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:scale-110 transition-transform duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Play className="w-8 h-8 text-white ml-1" />
      </div>
      <VideoModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        videoUrl={extension.media[0].url}
      />
    </>
  );
}
