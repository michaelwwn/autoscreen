import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ModalReportProps {
  showAddressModal: boolean;
  handleCloseModal: (isOpen: boolean) => void;
}

const ModalReport: React.FC<ModalReportProps> = ({
  showAddressModal,
  handleCloseModal,
}) => {
  return (
    <Dialog open={showAddressModal} onOpenChange={handleCloseModal}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>AML Cluster Summary</DialogTitle>
          <DialogDescription>
            Key details and risk assessment for each counterparty cluster.
          </DialogDescription>
        </DialogHeader>
        <Separator className="my-6" />
        <div className="grid gap-4">
          <h3 className="text-lg font-bold">Overall Summary</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
  The AML cluster analysis reveals a mix of risk profiles, with the &quot;Gambling Platform&quot; cluster posing the highest risk and requiring immediate attention. The &quot;Cryptocurrency Exchange&quot; cluster also warrants enhanced monitoring and due diligence, while the &quot;Retail Merchants&quot; and &quot;Charity Donations&quot; clusters present lower risks. Overall, the key insights and actionable items provided in this summary can help officers make more informed decisions and implement appropriate measures to mitigate potential AML risks.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="grid gap-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Gambling Platform</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                    High Risk
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Risk Score: 8.2
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Inflow
                    </p>
                    <p className="text-lg font-bold">$1,250,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Outflow
                    </p>
                    <p className="text-lg font-bold">$1,150,000</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-2">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Associated Labels
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm">
                        Gambling
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm">
                        High-Risk
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm">
                        Offshore
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Summary
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This cluster represents a high-risk gambling platform with
                      a significant amount of inflow and outflow. The
                      transactions are associated with offshore and high-risk
                      activities, requiring further investigation and
                      documentation.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="grid gap-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Actionable Items
                  </p>
                  <ul className="list-disc pl-4 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      Require additional proof of source of funds and
                      transaction legitimacy
                    </li>
                    <li>
                      Conduct enhanced due diligence on the counterparties
                      involved
                    </li>
                    <li>
                      Consider suspending or terminating the relationship if
                      concerns cannot be satisfactorily addressed
                    </li>
                  </ul>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cryptocurrency Exchange</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="bg-yellow-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                    Medium Risk
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Risk Score: 6.5
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Inflow
                    </p>
                    <p className="text-lg font-bold">$750,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Outflow
                    </p>
                    <p className="text-lg font-bold">$650,000</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-2">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Associated Labels
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm">
                        Cryptocurrency
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm">
                        Exchanges
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm">
                        Potential Risks
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Summary
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This cluster represents a cryptocurrency exchange with
                      moderate inflow and outflow. The transactions are
                      associated with potential risks, and further monitoring
                      and due diligence are recommended.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="grid gap-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Actionable Items
                  </p>
                  <ul className="list-disc pl-4 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      Conduct enhanced transaction monitoring and due diligence
                      on the counterparties
                    </li>
                    <li>
                      Require additional documentation and information to verify
                      the legitimacy of the transactions
                    </li>
                    <li>
                      Consider implementing more stringent controls or
                      restrictions on the account if concerns persist
                    </li>
                  </ul>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Retail Merchants</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                    Low Risk
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Risk Score: 3.2
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Inflow
                    </p>
                    <p className="text-lg font-bold">$500,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Outflow
                    </p>
                    <p className="text-lg font-bold">$450,000</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-2">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Associated Labels
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm">
                        Retail
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm">
                        Merchants
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm">
                        Low-Risk
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Summary
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This cluster represents a group of retail merchants with
                      relatively low inflow and outflow. The transactions are
                      associated with low-risk activities, and no immediate
                      concerns have been identified.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="grid gap-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Actionable Items
                  </p>
                  <ul className="list-disc pl-4 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      Continue routine monitoring and periodic reviews of the
                      cluster
                    </li>
                    <li>
                      Ensure that the transactions remain consistent with the
                      expected business activities
                    </li>
                    <li>
                      Consider reducing the frequency of reviews for this
                      low-risk cluster
                    </li>
                  </ul>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Charity Donations</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                    Low Risk
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Risk Score: 2.8
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Inflow
                    </p>
                    <p className="text-lg font-bold">$300,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Outflow
                    </p>
                    <p className="text-lg font-bold">$280,000</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="grid gap-2">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Associated Labels
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm">
                        Charity
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm">
                        Donations
                      </div>
                      <div className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-md text-sm">
                        Low-Risk
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Summary
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      This cluster represents a group of charity donations with
                      relatively low inflow and outflow. The transactions are
                      associated with low-risk activities, and no immediate
                      concerns have been identified.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="grid gap-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Actionable Items
                  </p>
                  <ul className="list-disc pl-4 text-sm text-gray-700 dark:text-gray-300">
                    <li>
                      Continue routine monitoring and periodic reviews of the
                      cluster
                    </li>
                    <li>
                      Ensure that the transactions remain consistent with the
                      expected charitable activities
                    </li>
                    <li>
                      Consider reducing the frequency of reviews for this
                      low-risk cluster
                    </li>
                  </ul>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        
      </DialogContent>
    </Dialog>
  );
};


export default ModalReport;