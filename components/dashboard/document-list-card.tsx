"use client";

import { useState, ChangeEvent } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FileIcon, UploadIcon } from "lucide-react";

interface Document {
  id: number;
  name: string;
  group: string;
  summary: string;
}

const DocumentListCard = () => {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: 1,
      name: "Bitcoin Transaction 1.pdf",
      group: "Path 1",
      summary: 'The document is trustworthy and matches all the records.',
    },
    {
      id: 2,
      name: "Bitcoin Transaction 2.pdf",
      group: "Scam Path",
      summary: 'The date of the transaction does not match the account records.',
    },
    {
      id: 3,
      name: "Bitcoin Transaction 3.pdf",
      group: "Path 2",
      summary: 'The transaction hash 5E4D3C2B1A was not found in the account.',
    },
    {
      id: 4,
      name: "Bitcoin Transaction 4.pdf",
      group: "Path 1",
      summary: 'The document has discrepancies in the transaction amount.',
    },
    {
      id: 5,
      name: "Bitcoin Transaction 5.pdf",
      group: "Path 3",
      summary: 'The document has discrepancies in the transaction amount.',
    },
  ]);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newDocument: Document = {
        id: documents.length + 1,
        name: file.name,
        group: "New Group",
        summary: "Newly uploaded document summary",
      };
      setDocuments([...documents, newDocument]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Document Classification</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileUpload}
          />
          <label htmlFor="file-upload">
            <Button variant="outline">
              <UploadIcon className="mr-2" />
              Upload Document
            </Button>
          </label>
        </div>
        <div className="grid gap-4 ">
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileIcon className="w-5 h-5 text-primary" />
                <span className="font-semibold">Transaction_Group_A</span>
              </div>
              <span className="text-sm text-green-600 font-semibold">Valid</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2022-06-15_Bitcoin_Transaction_0x9f8e2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a.pdf
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileIcon className="w-5 h-5 text-primary" />
                <span className="font-semibold">Transaction_Group_B</span>
              </div>
              <span className="text-sm text-red-600 font-semibold">Invalid</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2023-03-22_Bitcoin_Transaction_0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b.pdf
            </p>
            <p className="text-sm text-red-600 dark:text-red-400">
              The date of the transaction does not match the account records.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileIcon className="w-5 h-5 text-primary" />
                <span className="font-semibold">Transaction_Group_C</span>
              </div>
              <span className="text-sm text-green-600 font-semibold">Valid</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2023-04-10_Bitcoin_Transaction_0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c.pdf
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileIcon className="w-5 h-5 text-primary" />
                <span className="font-semibold">Transaction_Group_D</span>
              </div>
              <span className="text-sm text-red-600 font-semibold">Invalid</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2023-05-01_Bitcoin_Transaction_0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d.pdf
            </p>
            <p className="text-sm text-red-600 dark:text-red-400">
              The transaction hash 5E4D3C2B1A was not found in the account.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileIcon className="w-5 h-5 text-primary" />
                <span className="font-semibold">Transaction_Group_E</span>
              </div>
              <span className="text-sm text-green-600 font-semibold">Valid</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2023-05-15_Bitcoin_Transaction_0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e.pdf
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentListCard;
