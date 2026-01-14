import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/provider/auth-context";
import { useState } from "react";
import { toast } from "sonner";

const Settings = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleAccountUpdate = async () => {
    setIsLoading(true);
    try {
      toast.success("Settings updated successfully");
    } catch (error) {
      toast.error("Failed to update settings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePassword = async () => {
    setIsLoading(true);
    try {
      toast.success("Password changed successfully");
    } catch (error) {
      toast.error("Failed to change password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-400 mt-2">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        {/* Account Tab */}
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="bg-gray-800"
                />
                <p className="text-sm text-gray-400">
                  Your email address cannot be changed
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  defaultValue={user?.name || ""}
                  className="bg-gray-800"
                />
              </div>

              <Button onClick={handleAccountUpdate} disabled={isLoading}>
                {isLoading ? "Updating..." : "Update Account"}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Change Password</h3>
                  <div className="space-y-2">
                    <div>
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input
                        id="current-password"
                        type="password"
                        placeholder="Enter your current password"
                        className="bg-gray-800"
                      />
                    </div>
                    <div>
                      <Label htmlFor="new-password">New Password</Label>
                      <Input
                        id="new-password"
                        type="password"
                        placeholder="Enter your new password"
                        className="bg-gray-800"
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirm your new password"
                        className="bg-gray-800"
                      />
                    </div>
                  </div>
                </div>

                <Button onClick={handleChangePassword} disabled={isLoading}>
                  {isLoading ? "Updating..." : "Change Password"}
                </Button>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Add an extra layer of security to your account
                  </p>
                  <Button variant="outline">
                    {user?.is2FAEnabled ? "Disable 2FA" : "Enable 2FA"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-400">
                      Receive notifications about workspace activities
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Task Reminders</h4>
                    <p className="text-sm text-gray-400">
                      Get reminders for upcoming tasks
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Comment Updates</h4>
                    <p className="text-sm text-gray-400">
                      Be notified when someone comments on your tasks
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Project Updates</h4>
                    <p className="text-sm text-gray-400">
                      Get notified of important project changes
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
              </div>

              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
