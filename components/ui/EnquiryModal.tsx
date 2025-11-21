"use client"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import EnquiryForm from "./EnquiryForm"
import React from "react"

export default function EnquiryModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-100/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed z-20 left-1/2 top-1/2 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white text-black shadow-xl focus:outline-none">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <Dialog.Title className="text-base font-semibold">Enquiry Form</Dialog.Title>
            <button
              aria-label="Close"
              className="rounded p-1 hover:bg-gray-100"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-5 w-5 hover:text-gray-500" />
            </button>
          </div>
          <div className="p-4">
            <EnquiryForm onSuccess={() => onOpenChange(false)} />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
