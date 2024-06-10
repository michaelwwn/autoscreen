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
                    Binance
                  </Link>
                </TableCell>
                <TableCell>0.5 BTC</TableCell>
                <TableCell>0.2 BTC</TableCell>
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
                    Gambling Platform
                  </Link>
                </TableCell>
                <TableCell>1.2 BTC</TableCell>
                <TableCell>0.8 BTC</TableCell>
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
                    <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                    <span>Medium</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Link href="#" className="font-medium hover:underline" prefetch={false}>
                    XYZ Donation
                  </Link>
                </TableCell>
                <TableCell>0.3 BTC</TableCell>
                <TableCell>0.1 BTC</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Badge>Donation</Badge>
                  </div>
                </TableCell>
                <TableCell>
                  This address is associated with a charitable organization, likely used for receiving and processing
                  donations.
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
