import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
const CounterpartyListCard = () => {


  return (
    <Card>
      <CardHeader>
        <CardTitle>All Counterparty</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
      <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cluster</TableHead>
                <TableHead>In-Flow</TableHead>
                <TableHead>Out-Flow</TableHead>
                <TableHead>Labels</TableHead>
                <TableHead>Summary</TableHead>
                <TableHead>Risk Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  Exchange (Binance)
                  </Link>
                </TableCell>
                <TableCell>20.5 ETH</TableCell>
                <TableCell>21.2 ETH</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Badge>Exchange</Badge>
                    <Badge variant="default">Merchant</Badge>
                  </div>
                </TableCell>
                <TableCell>
                  This address is associated with a popular cryptocurrency exchange, likely used for trading and
                  withdrawals.
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                    <span>Low</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link href="#" className="font-medium hover:underline" prefetch={false}>
                    XYZ Gambling
                  </Link>
                </TableCell>
                <TableCell>1201.2 ETH</TableCell>
                <TableCell>302.8 ETH</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Badge variant="destructive">Gambling</Badge>
                    <Badge variant="destructive">Risky</Badge>
                  </div>
                </TableCell>
                <TableCell>
                  This address is associated with a known online gambling platform, which may pose a higher risk of
                  illicit activities.
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full" />
                    <span>High</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  Fund Movement
                  </Link>
                </TableCell>
                <TableCell>100.3 ETH</TableCell>
                <TableCell>200.1 ETH</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Badge>Unknown Addrees</Badge>
                  </div>
                </TableCell>
                <TableCell>
                  This address is associated with a fund movement, likely used for transferring assets between different
                  wallets.
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                    <span>Low</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  NFT Trading
                  </Link>
                </TableCell>
                <TableCell>20.3 ETH</TableCell>
                <TableCell>21.1 ETH</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Badge>NFT</Badge>
                  </div>
                </TableCell>
                <TableCell>
                  The majority of transactions are related to NFT trading, especially on OpenSea and Rarible.
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                    <span>Low</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </CardContent>
    </Card>
  );
};

export default CounterpartyListCard;
