import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";

export default function NewCasePage() {
  return (
    <div className="w-full max-w-md space-y-4 mx-auto mt-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Upload Documents</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Drag and drop your files or click to select from your device.
        </p>
      </div>
      <div className="group relative flex h-32 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-white transition-colors hover:border-gray-400 dark:border-gray-700 dark:bg-gray-950">
        <div className="pointer-events-none z-10 flex flex-col items-center justify-center space-y-2 text-center text-gray-500 transition-colors group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300">
          <UploadIcon className="h-8 w-8" />
          <p className="text-sm font-medium">
            Drag and drop files here or{" "}
            <span className="text-blue-500 underline">click to upload</span>
          </p>
        </div>
        <input
          type="file"
          multiple
          className="absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Write Up</Label>
        <Textarea
          id="description"
          placeholder="Enter a description for your files"
          className="min-h-[100px]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="city">Crypto Addresses</Label>
        <Textarea
          id="description"
          placeholder="Enter a description for your files"
          className="min-h-[100px]"
        />
      </div>
      <Button type="submit" className="w-full">
        Upload Files
      </Button>
    </div>
  );
}
