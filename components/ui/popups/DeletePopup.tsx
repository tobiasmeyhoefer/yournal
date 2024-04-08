"use client";

import { useState } from "react";
import { Button } from "../button";
import { SubmitButton } from "../SubmitButton";

const DeletePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    // document.body.classList.add("overflow-y-hidden")
    return (
      <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black/70 transition-all">
        <div className="flex flex-col items-center justify-center gap-6 rounded-lg border border-b-4 border-r-4 border-black bg-white p-10">
          <p className="text-neutral-900">
            Möchtest du diesen Gedanken wirklich löschen?
          </p>
          <div className="flex gap-6">
            <Button
              className="rounded-lg border border-b-4 border-r-4 border-black bg-red-500 text-black hover:bg-red-400"
              onClick={() => setIsOpen(false)}
            >
              Abbruch
            </Button>
            <SubmitButton text="Löschen"></SubmitButton>
          </div>
        </div>
      </div>
    );
  } else {
    // if (typeof window !== "undefined") {
    //   document.body.classList.remove("overflow-y-hidden")
    // }
    return (
      <Button
        className="rounded-lg border border-b-4 border-r-4 border-black bg-red-300 text-black hover:bg-red-200"
        onClick={() => setIsOpen(true)}
      >
        Löschen
      </Button>
    );
  }
};

export default DeletePopup;
