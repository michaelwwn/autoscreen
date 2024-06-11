import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Papa from "papaparse";
import { Badge } from "@/components/ui/badge";

interface Transaction {
  "Transaction Hash": string;
  Date: string;
  "Token Amount": number;
  Cluster: string;
  Direction: string;
  Status: string;
  "From Address": string;
  "To Address": string;
  "Risk Score": string;
}

const formatAddress = (address: string | null) => {
    if (!address) return address;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

const TransactionTable: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch("/transactions-data.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse<Transaction>(csvText, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            setTransactions(results.data);
          },
        });
      });
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Blockchain Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction Hash</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount (ETH)</TableHead>
              <TableHead>Cluster</TableHead>
              <TableHead>Direction</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Risk Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction["Transaction Hash"]}>
                <TableCell>
                  {formatAddress(transaction["Transaction Hash"])}
                </TableCell>
                <TableCell>
                  {transaction["Date"]}
                </TableCell>
                <TableCell>{transaction["Token Amount"]}</TableCell>
                <TableCell>{transaction["Cluster"]}</TableCell>
                <TableCell>{transaction["Direction"]}</TableCell>
                <TableCell>{transaction["Status"]}</TableCell>
                <TableCell>
                  {formatAddress(transaction["From Address"])}
                </TableCell>
                <TableCell>
                  {formatAddress(transaction["To Address"])}
                </TableCell>
                <TableCell>
                      <Badge variant={transaction['Risk Score'] === 'High' ? 'destructive' : 'secondary'}>
                        {transaction['Risk Score']}
                      </Badge>
                    </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TransactionTable;
