"use client";

import { useState } from "react";
import { Download, Loader2, Check } from "lucide-react";
import { contact } from "@/lib/data";
import { toast } from "./Toaster";

type Props = {
  className?: string;
  iconClassName?: string;
  label?: string;
  onDone?: () => void;
};

const FILE_NAME = "Mairo-Pedro-Isaac-CV.pdf";

export default function DownloadCVButton({ className = "", iconClassName = "w-4 h-4", label = "Download CV", onDone }: Props) {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    try {
      const [res] = await Promise.all([fetch(contact.cv), new Promise((r) => setTimeout(r, 700))]);
      if (!res.ok) throw new Error("Download failed");
      const url = URL.createObjectURL(await res.blob());
      const a = document.createElement("a");
      a.href = url;
      a.download = FILE_NAME;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      setState("done");
      toast("CV downloaded successfully");
      onDone?.();
      setTimeout(() => setState("idle"), 2500);
    } catch {
      setState("idle");
      toast("Couldn't download the CV. Opening it instead.", "error");
      window.open(contact.cv, "_blank");
    }
  };

  const Icon = state === "loading" ? Loader2 : state === "done" ? Check : Download;

  return (
    <a
      href={contact.cv}
      download={FILE_NAME}
      onClick={handleClick}
      aria-busy={state === "loading"}
      className={`group ${className}`}
    >
      <Icon
        className={`${iconClassName} ${state === "loading" ? "animate-spin" : state === "idle" ? "transition-transform group-hover:translate-y-0.5" : ""}`}
        aria-hidden
      />
      {state === "loading" ? "Downloading..." : state === "done" ? "Downloaded" : label}
    </a>
  );
}
