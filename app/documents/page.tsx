"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { FileIcon } from "@/lib/icons";
import { Checkbox } from "@/components/ui/checkbox";

export default function UploadPage() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_600px] gap-8 p-6 md:p-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">KYC Document Submission</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Provide the necessary documents to complete your KYC (Know Your
            Customer) verification.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Required Documents</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span>Government-issued ID</span>
              </div>
              <Button variant="outline" size="sm">
                Upload
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span>Proof of Address</span>
              </div>
              <Button variant="outline" size="sm">
                Upload
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span>Bank Statement</span>
              </div>
              <Button variant="outline" size="sm">
                Upload
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">KYC Summary</h2>
          <div className="space-y-2 text-gray-500 dark:text-gray-400">
            <p>
              KYC (Know Your Customer) is a process that financial institutions
              and other businesses use to verify the identity and background of
              their customers. This helps to prevent financial crimes such as
              money laundering and fraud.
            </p>
            <p>
              The required documents for KYC typically include a
              government-issued ID, proof of address, and a bank statement.
              These documents help to confirm the customer's identity and
              financial standing.
            </p>
            <p>
              By providing these documents, you can complete the KYC process and
              gain access to the full range of services offered by the platform.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">
            Actionable Items and Insights
          </h2>
          <div className="space-y-2 text-gray-500 dark:text-gray-400">
            <p>
              Based on the KYC documents you have provided, we have identified
              the following actionable items and insights:
            </p>
            <ul className=" pl-6 space-y-2">
              <li>
                <div className="flex items-center gap-2">
                  <Checkbox id="id-verified" />
                  <label htmlFor="id-verified">
                    Your government-issued ID has been successfully verified,
                    confirming your identity.
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Checkbox id="address-verified" />
                  <label htmlFor="address-verified">
                    The proof of address document you submitted indicates that
                    you reside at the provided address, which aligns with our
                    records.
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Checkbox id="bank-verified" />
                  <label htmlFor="bank-verified">
                    The bank statement you provided shows a consistent financial
                    history, suggesting a stable financial standing.
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Checkbox id="kyc-complete" />
                  <label htmlFor="kyc-complete">
                    Overall, the KYC documents you have submitted meet the
                    required criteria, and we are ready to proceed with the next
                    steps in your account setup.
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="flex justify-end">
          <Button>Submit KYC</Button>
        </div> */}
      </div>
      <div className="rounded-lg border bg-gray-100 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex h-full items-center justify-center">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js">
            <div
              style={{
                height: "750px",
                width: "100%",
              }}
            >
              <Viewer
                fileUrl="/pdfs/sample-payslip.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </div>
          </Worker>
        </div>
      </div>
    </div>
  );
}
