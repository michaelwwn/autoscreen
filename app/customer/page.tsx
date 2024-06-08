"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@radix-ui/react-dropdown-menu";

export default function IndexPage() {
  const [showAddressModal, setShowAddressModal] = useState(false)
  const [newAddress, setNewAddress] = useState("")
  const [selectedChain, setSelectedChain] = useState("")
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
    <main className="flex flex-col p-6 space-y-4">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pending Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">20</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Detected across your infrastructure
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fake Document</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-red-500">24</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Require immediate attention
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>High Severity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-orange-500">48</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Vulnerabilities with high impact
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <div className="text-lg font-semibold">Cases</div>
      </div> */}
      <div className="flex items-center space-x-2">
        <Input placeholder="Search by project name or key" className="flex-1" />
        <Button variant="outline" onClick={handleAddAddress}>Create Case</Button>
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">2 cases(s)</div>
        <Card>
          <CardHeader className="flex justify-between">
            <CardTitle>Vitali Huanglong</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <div className="flex-1 grid gap-1">
              <div className="grid grid-cols-4 gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-medium text-muted-foreground">
                    Case Number
                  </div>
                  <div className="font-medium">SGJB00051</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium text-muted-foreground">
                    Wallet Addresses
                  </div>
                  <div className="font-medium">4</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium text-muted-foreground">
                    Risk Level
                  </div>
                  <div className="font-medium">
                    <Badge variant="secondary">Low</Badge>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium text-muted-foreground">
                    Status
                  </div>
                  <Badge>Verification Pending</Badge>
                </div>
              </div>
            </div>
            <Link href="/customer/11">
              <Button variant="outline" size="icon">
                <ArrowRightIcon className="h-4 w-4" />
                <span className="sr-only">View customer details</span>
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex justify-between">
            <CardTitle>Wong Ting Man</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <div className="flex-1 grid gap-1">
              <div className="grid grid-cols-4 gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-medium text-muted-foreground">
                    Case Number
                  </div>
                  <div className="font-medium">HKJB00051</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium text-muted-foreground">
                    Wallet Addresses
                  </div>
                  <div className="font-medium">21</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium text-muted-foreground">
                    Risk Level
                  </div>
                  <div className="font-medium">
                    <Badge variant="destructive">High</Badge>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-medium text-muted-foreground">
                    Status
                  </div>
                  <Badge>Verified</Badge>
                </div>
              </div>
            </div>
            <Link href="/customer/11">
              <Button variant="outline" size="icon">
                <ArrowRightIcon className="h-4 w-4" />
                <span className="sr-only">View customer details</span>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <Dialog open={showAddressModal} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Add New Customer</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label className="text-right">
                 Case ID
              </Label>
              <Input
                id="address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label className="text-right">
                 Client Name
              </Label>
              <Input
                id="address"
                value={selectedChain}
                onChange={(e) => setSelectedChain(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label className="text-right">
                 User Story
              </Label>
              <Textarea
                row={4}
                id="user_story"
                className="col-span-3 min-h-[100px]"
              />
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
