import React from "react";

import Hero from "@/components/custom/sections/knowledge-sharing/hero";
import TopPick from "@/components/custom/sections/knowledge-sharing/top-pick";
import AllArticle from "@/components/custom/sections/knowledge-sharing/all-article";
import SearchKnowledgeSharing from "@/components/custom/sections/knowledge-sharing/search-knowledge-sharing";

export default function KnowledgeSharingPage({}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <SearchKnowledgeSharing />
      <TopPick />
      <AllArticle />
    </main>
  );
}
