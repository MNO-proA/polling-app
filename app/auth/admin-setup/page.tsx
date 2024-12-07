// app/auth/admin-setup/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { Plus, Eye, EyeOff } from "lucide-react";
import moment from "moment";
// import { AdminFormData } from "@/types";
import { DateRange } from "react-day-picker";

const generatePassword = () => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
};

interface FormFields {
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    pollingOccasion: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    admins: { username: string; password: string }[];
  }
  

export default function AdminSetupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });
  const [duration, setDuration] = useState("");
  const [admins, setAdmins] = useState([
    { username: "", password: generatePassword(), showPassword: false }
  ]);

  const calculateDuration = (from: Date, to: Date) => {
    const duration = moment.duration(moment(to).diff(moment(from)));
    return `${duration.days()} days, ${duration.hours()} hours`;
  };

  const handleDateChange = (newDate: DateRange | undefined) => {
    setDate(newDate);
    if (newDate?.from && newDate?.to) {
      setDuration(calculateDuration(newDate?.from, newDate?.to));
    }
  };

  const addAdmin = () => {
    setAdmins([...admins, { username: "", password: generatePassword(), showPassword: false }]);
  };

  const togglePasswordVisibility = (index: number) => {
    setAdmins(admins.map((admin, i) => 
      i === index ? { ...admin, showPassword: !admin.showPassword } : admin
    ));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const formattedData: FormFields = {
      clientName: formData.get("clientName") as string,
      clientEmail: formData.get("clientEmail") as string,
      clientPhone: formData.get("clientPhone") as string,
      pollingOccasion: formData.get("pollingOccasion") as string,
      startDate: date?.from,
      endDate: date?.to,
      admins: admins.map(admin => ({
        username: admin.username,
        password: admin.password,
      })),
    };
    

    // try {
    //   const response = await fetch('/api/admin/setup', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formattedData)
    //   });

    //   if (response.ok) {
    //     router.push('/admin/candidates');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // } finally {
    //   setLoading(false);
    // }
        console.log(formattedData)
        router.push('/admin/candidates');
         
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 p-4">
      <Card className="w-full max-w-[600px]">
        <CardHeader>
          <CardTitle>Admin Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="clientName">Client Name</Label>
              <Input id="clientName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientEmail">Client Email</Label>
              <Input id="clientEmail" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientPhone">Client Phone</Label>
              <Input id="clientPhone" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pollingOccasion">Polling Occasion</Label>
              <Input id="pollingOccasion" required />
            </div>
            <div className="space-y-2">
              <Label>Duration</Label>
              <DatePickerWithRange date={date} setDate={handleDateChange} />
              {duration && (
                <div className="text-sm text-muted-foreground mt-1">
                  Duration: {duration}
                </div>
              )}
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Admins</Label>
                <Button type="button" variant="outline" size="icon" onClick={addAdmin}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {admins.map((admin, index) => (
                <div key={index} className="space-y-2">
                  <Input
                    placeholder="Username"
                    value={admin.username}
                    onChange={(e) => {
                      const newAdmins = [...admins];
                      newAdmins[index].username = e.target.value;
                      setAdmins(newAdmins);
                    }}
                    required
                  />
                  <div className="relative">
                    <Input
                      type={admin.showPassword ? "text" : "password"}
                      value={admin.password}
                      readOnly
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={() => togglePasswordVisibility(index)}
                    >
                      {admin.showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Setting up..." : "Complete Setup"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};