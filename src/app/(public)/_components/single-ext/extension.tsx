"use client";

import { Browser, Extension } from "@/@types";
import { extensions } from "@/constants";
import { useState, useEffect } from "react";
import ExtensionDetails from "./ext-details";
import ExtensionHeader from "./ext-header";
import ExtensionMediaGallery from "./ext-media-gallery";
import Sidebar from "./sidebar";

type Props = {
  id: string;
};
export default function Extensions({ id }: Props) {
  const [selectedBrowser, setSelectedBrowser] = useState<Browser>("chrome");
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [extension, setExtension] = useState<Extension>();

  useEffect(() => {
    if (!id) return;
    const ext = extensions.find((value) => value.id === +id);
    if (ext) setExtension(ext);
  }, []);

  if (!extension) return <h1>no extension found yet</h1>;

  const openVideoModal = () => {
    if (extension.media[currentMediaIndex]?.type === "video") {
      setIsModalOpen(true);
    }
  };
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2">
        {/* Extension Header */}
        <div className="bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-border mb-8">
          <ExtensionHeader extension={extension} />

          {/* Media Gallery */}
          <ExtensionMediaGallery
            extension={extension}
            currentMediaIndex={currentMediaIndex}
            openVideoModal={openVideoModal}
            setCurrentMediaIndex={setCurrentMediaIndex}
          />
        </div>

        {/* Tabs */}
        <ExtensionDetails extension={extension} />
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <Sidebar
          extension={extension}
          selectedBrowser={selectedBrowser}
          setSelectedBrowser={setSelectedBrowser}
        />
      </div>
    </div>
  );
}
