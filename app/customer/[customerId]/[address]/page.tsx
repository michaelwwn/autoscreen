"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  ArrowDown01Icon,
  ArrowDownIcon,
  ArrowLeftIcon,
  DownloadIcon,
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import DocumentListCard from "@/components/address/card-document";
import CounterpartyListCard from "@/components/address/card-counterparty";
import BlockchainTree from "@/components/address/card-tree";
import { Badge } from "@/components/ui/badge";
import ModalReport from "@/components/address/modal-report";
import TransactionTable from "@/components/address/card-transactions";

export default function AddressPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const tokens = [
    {
      name: "Ethereum",
      symbol: "ETH",
      balance: 2.34567,
      valueUSD: 4500.0,
    },
    {
      name: "Dai",
      symbol: "DAI",
      balance: 1234.56789,
      valueUSD: 1234.56,
    },
    {
      name: "Uniswap",
      symbol: "UNI",
      balance: 123.45,
      valueUSD: 987.65,
    },
    {
      name: "Chainlink",
      symbol: "LINK",
      balance: 45.67,
      valueUSD: 234.56,
    },
    {
      name: "Compound",
      symbol: "COMP",
      balance: 12.34,
      valueUSD: 456.78,
    },
  ];
  const treeData = {
    name: "Root", // Imaginary root node for visualization
    children: [
      {
        name: "Normal Transfer (Known)",
        attributes: { color: "grey", group: 1 },
        children: [
          {
            name: "Tx 1A",
            attributes: { color: "grey", ETH: "1.5 ETH", group: 1 },
            children: [
              {
                name: "Tx 2A",
                attributes: { color: "grey", group: 1 },
                children: [
                  {
                    name: "Tx 3A",
                    attributes: { color: "grey", ETH: "1.2 ETH", group: 1 },
                  },
                  {
                    name: "Tx 3B",
                    attributes: { color: "grey", ETH: "0.3 ETH", group: 1 },
                    children: [
                      {
                        name: "Tx 4A",
                        attributes: { color: "grey", ETH: "0.3 ETH", group: 1 },
                      },
                    ],
                  },
                ],
              },
              {
                name: "Tx 2B",
                attributes: { color: "grey", group: 1 },
                children: [
                  {
                    name: "Tx 4B",
                    attributes: { color: "grey", ETH: "0.8 ETH", group: 1 },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Scam Path",
        attributes: { color: "red", group: 2 },
        children: [
          {
            name: "Tx 1B",
            attributes: { color: "red", ETH: "2 ETH", group: 2 },
            children: [
              {
                name: "Tx 2C",
                attributes: { color: "red", ETH: "2 ETH", group: 2 },
                children: [
                  {
                    name: "Tx 3C",
                    attributes: { color: "red", group: 2 },
                    children: [
                      {
                        name: "Tx 5A",
                        attributes: { color: "red", ETH: "2 ETH", group: 2 },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Normal Transfer (Unknown)",
        attributes: { color: "orange", group: 3 },
        children: [
          {
            name: "Tx 1C",
            attributes: { color: "orange", ETH: "0.5 ETH", group: 3 },
            children: [
              {
                name: "Tx 2D",
                attributes: { color: "orange", group: 3 },
                children: [
                  {
                    name: "Tx 3D",
                    attributes: { color: "orange", ETH: "0.5 ETH", group: 3 },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Normal Transfer (Known)",
        attributes: { color: "grey", group: 4 },
        children: [
          {
            name: "Tx 1D",
            attributes: { color: "grey", ETH: "3 ETH", group: 4 },
            children: [
              {
                name: "Tx 2E",
                attributes: { color: "grey", group: 4 },
                children: [
                  {
                    name: "Tx 3E",
                    attributes: { color: "grey", ETH: "3 ETH", group: 4 },
                  },
                ],
              },
            ],
          },
          {
            name: "Tx 2F", // Cross-reference node
            attributes: { color: "grey", group: 4 },
            children: [
              {
                name: "Tx 3A", // Connecting back to earlier Tx 3A for more complexity
                attributes: { color: "grey", group: 4 },
              },
            ],
          },
        ],
      },
    ],
  };
  const [showReportModal, setShowReportModal] = useState<boolean>(false);

  const handleCloseModal = (isOpen: boolean) => {
    setShowReportModal(isOpen);
  };
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/customer">Customers</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/customer/1000">
                Jasper Quinn
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                0xdCCF22EFa38f4E58beF3e9fF3DC1Ff5BaaAdaC94
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 w-full">
          <Link href="/customer/1000">
            <Button variant="outline" size="icon">
              <ArrowLeftIcon className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="font-semibold text-lg md:text-xl">
            Jasper Quinn&apos;s Address{" "}
            <span className="text-gray-300">#1</span>
          </h1>
        </div>
        <Button
          onClick={() => setShowReportModal(true)}
          type="button"
          className="px-2 py-1 bg-gray-800 text-white rounded-lg flex items-center space-x-2 text-sm"
        >
          <DownloadIcon className="w-4 h-4" />
          <span>Download Report</span>
        </Button>
      </div>
      <Tabs
        defaultValue="profile"
        className="w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-5 border-b">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="holdings">Holdings</TabsTrigger>
          <TabsTrigger value="transaction">Transactions</TabsTrigger>
          <TabsTrigger value="graph">Graph</TabsTrigger>
          {/* <TabsTrigger value="document">Documents</TabsTrigger> */}
          <TabsTrigger value="counterparty">Counterparty</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Address Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      defaultValue="0xdCCF22EFa38f4E58beF3e9fF3DC1Ff5BaaAdaC94"
                      disabled
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="chain">Network</Label>
                    <Input
                      id="chain"
                      defaultValue="Ethereum (ERC20) network"
                      disabled
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="city">Estimated Value</Label>
                    <Input id="city" defaultValue="$599,100,200" disabled />
                  </div>
                </div>
                {/* <div className="gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="story">User Story</Label>
                    <Textarea
                      rows={4}
                      id="story"
                      defaultValue="Michael Wong has informed us that the initial funding of his crypto address came from a reputable exchange where he converted part of his fiat savings into Bitcoin and Ethereum. He uses his crypto address primarily for trading and holding long-term investments. However, he also participates in several DeFi protocols for yield farming and occasionally sends funds to family members."
                      disabled
                    />
                  </div>
                </div> */}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="transaction">
          <div className="grid gap-6">
            <TransactionTable/>
          </div>
        </TabsContent>

        <TabsContent value="graph">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Transaction Graph</CardTitle>
              </CardHeader>
              <CardContent>
                <BlockchainTree data={treeData} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="holdings">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Cryptocurrency Holdings</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Token</TableHead>
                      <TableHead>Symbol</TableHead>
                      <TableHead className="text-right">Balance</TableHead>
                      <TableHead className="text-right">Value (USD)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tokens.map((token) => (
                      <TableRow key={token.symbol}>
                        <TableCell>{token.name}</TableCell>
                        <TableCell>{token.symbol}</TableCell>
                        <TableCell className="text-right">
                          {token.balance.toFixed(4)}
                        </TableCell>
                        <TableCell className="text-right">
                          ${token.valueUSD.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="document">
          <div className="grid gap-6">
            <DocumentListCard />
          </div>
        </TabsContent>
        <TabsContent value="counterparty">
          <div className="grid gap-6">
            <CounterpartyListCard />
          </div>
        </TabsContent>
      </Tabs>
      <ModalReport showAddressModal={showReportModal} handleCloseModal={handleCloseModal} />
    </main>
  );
}
