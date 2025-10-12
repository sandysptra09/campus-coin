"use client";

import React from "react";

import { Input } from "@heroui/react";
import { Label } from "@/components/ui/label";

export default function FAQSearchForm(props: {
  searchParams?: { q?: string };
  filteredFaqs: { q: string; a: string }[];
  faqs: { q: string; a: string }[];
}) {
  return (
    <form role="search" action="/faq" method="GET" className="mb-6">
      <div className="flex items-center gap-3">
        <Label htmlFor="faq-search" className="sr-only">
          Search FAQs
        </Label>
        <Input
          id="faq-search"
          name="q"
          placeholder="Search FAQs..."
          defaultValue={props.searchParams?.q ?? ""}
        />
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        {`Showing ${props.filteredFaqs.length} of ${props.faqs.length} questions`}
      </p>
    </form>
  );
}
