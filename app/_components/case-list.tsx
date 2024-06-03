import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CaseList() {
// people in charge, link, score
  return (
    <main className="flex flex-col p-6 space-y-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
      <div className="flex items-center space-x-2">
        <Input placeholder="Search by project name or key" className="flex-1" />
        {/* <Button variant="outline">Create Case</Button> */}
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">3 cases(s)</div>
        <Card className="w-full">
          <CardHeader className="flex justify-between">
            <CardTitle>Chan Tei Ming</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">
                  Case Number
                </div>
                <div className="font-medium">SGJB00051</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">
                  Submitted Documents
                </div>
                <div className="font-medium">Passport, Utility Bill</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">
                  Status
                </div>
                <Badge>Verification Pending</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader className="flex justify-between">
            <CardTitle>Judit Cletus</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">
                  Case Number
                </div>
                <div className="font-medium">HKJB004201</div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">
                  Submitted Documents
                </div>
                <div className="font-medium">
                  Incorporation Certificate, Bank Statement
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium text-muted-foreground">
                  Status
                </div>
                <Badge>Verified</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
