"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, UserPlus, FileText } from "lucide-react";
import { useState } from "react";

const payrollMetrics = [
  { label: "Total Payroll Processed", value: "$500,000.40" },
  { label: "Wallet Balance", value: "$100,000.80" },
  { label: "Active Employee", value: "50" },
];

const recentPayments = [
  {
    name: "Vandross Idiake",
    role: "Software Engineer",
    status: "Active",
    amount: "$3,400.00",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vandross",
  },
  {
    name: "Vandross Idiake",
    role: "Software Engineer",
    status: "Active",
    amount: "$3,400.00",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vandross1",
  },
  {
    name: "Vandross Idiake",
    role: "Software Engineer",
    status: "Active",
    amount: "$3,400.00",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vandross2",
  },
  {
    name: "Vandross Idiake",
    role: "Software Engineer",
    status: "Active",
    amount: "$3,400.00",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vandross3",
  },
  {
    name: "Vandross Idiake",
    role: "Software Engineer",
    status: "Active",
    amount: "$3,400.00",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vandross4",
  },
  {
    name: "Vandross Idiake",
    role: "Software Engineer",
    status: "Active",
    amount: "$3,400.00",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vandross5",
  },
];

const quickActions = [
  {
    title: "Finish setting up your account",
    description:
      "To unlock all the benefits of Remoto's HR platform, complete your company details.",
    icon: "👤",
  },
  {
    title: "Finish setting up your account",
    description:
      "To unlock all the benefits of Remoto's HR platform, complete your company details.",
    icon: "👤",
  },
  {
    title: "Finish setting up your account",
    description:
      "To unlock all the benefits of Remoto's HR platform, complete your company details.",
    icon: "👤",
  },
  {
    title: "Finish setting up your account",
    description:
      "To unlock all the benefits of Remoto's HR platform, complete your company details.",
    icon: "👤",
  },
];

export default function PayrollPage() {
  const [activeMetric, setActiveMetric] = useState<string>("Last 30 days");

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#101828]">Payroll</h1>
      </div>

      {/* Metrics Cards */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        {payrollMetrics.map((metric) => (
          <Card key={metric.label} className="border-[#eaeaea]">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-[#667085]">
                {metric.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold text-[#101828]">
                {metric.value}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-[#d0d5dd] bg-white text-[#344054] hover:bg-[#f9fafb]"
              >
                {activeMetric}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex gap-4">
        <Button className="bg-[#0166f4] text-white hover:bg-[#0166f4]/90">
          <UserPlus className="h-4 w-4" />
          Add new hire
        </Button>
        <Button
          variant="outline"
          className="border-[#0166f4] text-[#0166f4] hover:bg-[#ecf2ff] bg-transparent"
        >
          <FileText className="h-4 w-4" />
          Create contract
        </Button>
      </div>

      {/* Promotional Section */}
      <div className="mb-8 flex items-center gap-6 rounded-lg border border-[#eaeaea] bg-[#f9fafb] p-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-[#101828] mb-2">
            Use Helicode to run seamless payroll and hiring
          </h2>
          <p className="text-[#667085] mb-4">
            Hire talent, manage contracts, stay compliant, and pay your team
            instantly using stablecoins, all from one simple platform.
          </p>
          <Button className="bg-[#101828] text-white hover:bg-[#101828]/90">
            Get Started
          </Button>
        </div>
        <div className="flex-shrink-0 hidden md:block">
          <div className="bg-white rounded-lg p-4 border border-[#eaeaea] shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-[#101828]">Alex Doe</p>
                <p className="text-xs text-[#667085]">Software Engineer</p>
              </div>
            </div>
            <div className="space-y-2">
              {["Onboarding", "Payroll", "Compliance", "Benefits"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-[#33cd38] flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-sm text-[#101828]">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Payments and Quick Actions */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#101828]">
              Recent Payments
            </h3>
            <Button variant="link" className="text-[#0166f4] p-0 h-auto">
              View all
            </Button>
          </div>
          <div className="rounded-lg border border-[#eaeaea] bg-white overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-[#eaeaea] hover:bg-transparent">
                  <TableHead className="text-[#667085] font-semibold">
                    Person
                  </TableHead>
                  <TableHead className="text-[#667085] font-semibold">
                    Status
                  </TableHead>
                  <TableHead className="text-right text-[#667085] font-semibold">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentPayments.map((payment, idx) => (
                  <TableRow
                    key={idx}
                    className="border-b border-[#eaeaea] hover:bg-[#f9fafb]"
                  >
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={payment.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>VI</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-[#101828]">
                            {payment.name}
                          </p>
                          <p className="text-xs text-[#667085]">
                            {payment.role}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-[#c8e8d5] text-[#219d53] hover:bg-[#c8e8d5]">
                        {payment.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-semibold text-[#101828]">
                      {payment.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Quick Actions Sidebar */}
        <div>
          <h3 className="text-lg font-semibold text-[#101828] mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            {quickActions.map((action, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#eaeaea] bg-white p-4 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#dde8ff] flex items-center justify-center">
                    <span className="text-lg">{action.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#101828] text-sm">
                      {action.title}
                    </p>
                    <p className="text-xs text-[#667085] mt-1">
                      {action.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
