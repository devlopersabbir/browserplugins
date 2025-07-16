"use client";

import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { extractIframeSrc } from "@/lib/utils";
import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type VideoModalProps = {
  isModalOpen: boolean;
  videoUrl: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

export function VideoModal({
  isModalOpen,
  videoUrl,
  setIsModalOpen,
}: VideoModalProps) {
  return (
    <Dialog open={isModalOpen} onOpenChange={(open) => setIsModalOpen(open)}>
      <DialogOverlay className="bg-black/80 backdrop-blur-sm" />
      <DialogContent
        className="p-0 border-0 bg-transparent rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 bg-black/50 rounded-full p-2 transition-colors cursor-pointer"
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative aspect-video w-full">
          <iframe
            src={extractIframeSrc(videoUrl)}
            title="Extension Video Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-xl"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
