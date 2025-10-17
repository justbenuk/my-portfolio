"use client";
import { UploadButton } from "@/lib/uploadthing";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";
interface SeperateImageUploadProps {
  onImageUpload: (url: string) => void
}

export default function ProfileImageUploader({ onImageUpload }: SeperateImageUploadProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="profileUploader"
        config={{ cn: twMerge }}
        appearance={{
          button: "px-4 py-1 text-sm",
        }}
        onClientUploadComplete={(res) => {
          if (res && res.length > 0) {
            const url = res[0].ufsUrl;
            onImageUpload(url);
            toast.success("Image uploaded successfully!");
          }
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
