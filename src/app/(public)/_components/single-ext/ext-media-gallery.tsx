"use client";
import { Extension } from "@/@types";
import { Play, Badge } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type Props = {
  extension: Extension;
  setCurrentMediaIndex: Dispatch<SetStateAction<number>>;
  currentMediaIndex: number;
  openVideoModal: () => void;
};
export default function ExtensionMediaGallery({
  extension,
  currentMediaIndex,
  setCurrentMediaIndex,
  openVideoModal,
}: Props) {
  return (
    <div className="mb-6">
      <div className="relative aspect-video bg-card rounded-2xl overflow-hidden mb-4 border border-border">
        {extension.media[currentMediaIndex]?.type === "video" ? (
          <div
            className="relative w-full h-full group/video cursor-pointer"
            onClick={openVideoModal}
          >
            <img
              src={
                extension.media[currentMediaIndex].thumbnail ||
                extension.media[currentMediaIndex].url
              }
              alt={extension.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
            </div>
            <Badge className="absolute bottom-4 right-4 bg-black/50 text-white border-0">
              <Play className="w-3 h-3 mr-1" />
              Video Preview
            </Badge>
          </div>
        ) : (
          <img
            src={extension.media[currentMediaIndex]?.url || "/placeholder.svg"}
            alt={extension.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Media Thumbnails */}
      <div className="flex space-x-3">
        {extension.media.map((media, index) => (
          <button
            key={index}
            onClick={() => setCurrentMediaIndex(index)}
            className={`relative w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
              currentMediaIndex === index
                ? "border-primary scale-105"
                : "border-border hover:border-primary/40"
            }`}
          >
            <Image
              src={media.thumbnail || media.url}
              alt={`Preview ${index + 1}`}
              className="w-full h-full object-cover"
              width={80}
              height={38}
              objectFit="cover"
            />
            {media.type === "video" && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Play className="w-3 h-3 text-white" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
