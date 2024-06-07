"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import {
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
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export default function CustomerPage() {
  const [showAddressModal, setShowAddressModal] = useState(false)
  const [newAddress, setNewAddress] = useState("")
  const [selectedChain, setSelectedChain] = useState("ethereum")
  const handleAddAddress = () => {
    setShowAddressModal(true)
  }

  const handleCloseModal = () => {
    setShowAddressModal(false)
  }
  const handleSaveAddress = () => {
    console.log("Saving new address:", newAddress, "on chain:", selectedChain)
    setShowAddressModal(false)
  }
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
                Vitali Huanglong
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 w-full">
          <Link href="/">
          <Button variant="outline" size="icon">
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          </Link>
          <h1 className="font-semibold text-lg md:text-xl">Vitali Huanglong</h1>
        </div>
        <Button
          type="button"
          className="px-2 py-1 bg-gray-800 text-white rounded-lg flex items-center space-x-2 text-sm"
        >
          <DownloadIcon className="w-4 h-4" />
          <span>Download Overview</span>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" disabled />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="john@example.com" disabled />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="+1 (555) 555-5555" disabled />
            </div>
            <div className="space-y-1">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" defaultValue="1980-01-01" disabled />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                defaultValue="123 Main St, Anytown USA"
                disabled
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="occupation">Occupation</Label>
              <Input
                id="occupation"
                defaultValue="Software Engineer"
                disabled
              />
            </div>
          </div>
          <div className="gap-4">
            <div className="space-y-1">
              <Label htmlFor="story">User Story</Label>
              <Textarea
                rows={4}
                id="story"
                defaultValue="Michael Wong has informed us that the initial funding of his crypto address came from a reputable exchange where he converted part of his fiat savings into Bitcoin and Ethereum. He uses his crypto address primarily for trading and holding long-term investments. However, he also participates in several DeFi protocols for yield farming and occasionally sends funds to family members."
                disabled
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Cryptocurrency Wallets</CardTitle>
          <Button variant="outline" size="sm" className="ml-auto" onClick={handleAddAddress}>
            Add new address
          </Button>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <Link
                  href="/customer/1000/0xfedcba9876543210fedcba9876543210fedcba98"
                  className="font-medium text-gray-900 dark:text-gray-50 hover:underline"
                  prefetch={false}
                >
                  0x123456789abcdef0123456789abcdef01234567
                </Link>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  ETH
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-500 dark:text-gray-400">
                  Fiat Value
                </div>
                <div className="font-medium text-gray-900 dark:text-gray-50">
                  $1,000
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-500 dark:text-gray-400">
                  Risk Score
                </div>
                <div className="font-medium text-gray-900 dark:text-gray-50">
                  75
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <Link
                  href="/customer/1000/bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                  className="font-medium text-gray-900 dark:text-gray-50 hover:underline"
                  prefetch={false}
                >
                  bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                </Link>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  BTC
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-500 dark:text-gray-400">
                  Fiat Value
                </div>
                <div className="font-medium text-gray-900 dark:text-gray-50">
                  $500
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-500 dark:text-gray-400">
                  Risk Score
                </div>
                <div className="font-medium text-gray-900 dark:text-gray-50">
                  50
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <Link
                  href="/customer/1000/MJKqp326RZCHnAAbew9MDdui3iCKWco7fsK9sVuZTX2"
                  className="font-medium text-gray-900 dark:text-gray-50 hover:underline"
                  prefetch={false}
                >
                  MJKqp326RZCHnAAbew9MDdui3iCKWc
                </Link>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  SOL
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-500 dark:text-gray-400">
                  Fiat Value
                </div>
                <div className="font-medium text-gray-900 dark:text-gray-50">
                  $750
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-500 dark:text-gray-400">
                  Risk Score
                </div>
                <div className="font-medium text-gray-900 dark:text-gray-50">
                  60
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Dialog open={showAddressModal} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Add New Address</DialogTitle>
            <DialogDescription>Perform Wallet Scanning</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="address" className="text-right">
                 Address
              </Label>
              <Input
                id="address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="chain" className="text-right">
                Chain
              </Label>
              <Select value={selectedChain} onValueChange={setSelectedChain} >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select chain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ethereum">Bitcoin</SelectItem>
                  <SelectItem value="polygon">Ethereum</SelectItem>
                  <SelectItem value="avalanche">Solana</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button type="submit" onClick={handleSaveAddress}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
