
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { MessageSquare, ArrowLeft, Settings, Trash2, Copy } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const TeamSettings = () => {
  const [teamData, setTeamData] = useState({
    name: "Development Team Alpha",
    description: "Frontend and backend development team focused on user experience and scalable architecture.",
    timezone: "UTC-8 (Pacific Time)",
    inviteLink: "https://huddleai.com/invite/team-abc123"
  });

  const [notifications, setNotifications] = useState({
    emailSummaries: true,
    slackUpdates: true,
    actionItemReminders: true,
    weeklyReports: false
  });

  const [privacy, setPrivacy] = useState({
    publicTeam: false,
    allowGuestUploads: true,
    requireApproval: true
  });

  const copyInviteLink = () => {
    navigator.clipboard.writeText(teamData.inviteLink);
    alert("Invite link copied to clipboard!");
  };

  const regenerateInviteLink = () => {
    const newLink = `https://huddleai.com/invite/team-${Math.random().toString(36).substr(2, 9)}`;
    setTeamData(prev => ({ ...prev, inviteLink: newLink }));
    alert("New invite link generated!");
  };

  const saveSettings = () => {
    console.log("Saving team settings:", { teamData, notifications, privacy });
    alert("Team settings saved successfully!");
  };

  const deleteTeam = () => {
    if (confirm("Are you sure you want to delete this team? This action cannot be undone.")) {
      console.log("Deleting team...");
      alert("Team deletion initiated. You will be redirected shortly.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center border-b bg-white/80 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <Link to="/team" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">HuddleAI</span>
          </Link>
        </div>
        <Link to="/team">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
      </nav>

      <div className="px-6 py-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Settings className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Team Settings</h1>
              <p className="text-gray-600">Manage your team configuration and preferences</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* General Settings */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic information about your team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="teamName">Team Name</Label>
                <Input
                  id="teamName"
                  value={teamData.name}
                  onChange={(e) => setTeamData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={teamData.description}
                  onChange={(e) => setTeamData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Input
                  id="timezone"
                  value={teamData.timezone}
                  onChange={(e) => setTeamData(prev => ({ ...prev, timezone: e.target.value }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Invite Settings */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Team Invitations</CardTitle>
              <CardDescription>Manage how people can join your team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Current Invite Link</Label>
                <div className="flex space-x-2">
                  <Input value={teamData.inviteLink} readOnly className="bg-gray-50" />
                  <Button variant="outline" onClick={copyInviteLink}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Button variant="outline" onClick={regenerateInviteLink}>
                Regenerate Link
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Configure when and how you receive updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="emailSummaries">Email Summaries</Label>
                  <p className="text-sm text-gray-600">Receive meeting summaries via email</p>
                </div>
                <Switch
                  id="emailSummaries"
                  checked={notifications.emailSummaries}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, emailSummaries: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="slackUpdates">Slack Updates</Label>
                  <p className="text-sm text-gray-600">Send updates to Slack channels</p>
                </div>
                <Switch
                  id="slackUpdates"
                  checked={notifications.slackUpdates}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, slackUpdates: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="actionItemReminders">Action Item Reminders</Label>
                  <p className="text-sm text-gray-600">Remind team members about pending tasks</p>
                </div>
                <Switch
                  id="actionItemReminders"
                  checked={notifications.actionItemReminders}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, actionItemReminders: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="weeklyReports">Weekly Reports</Label>
                  <p className="text-sm text-gray-600">Weekly team productivity summaries</p>
                </div>
                <Switch
                  id="weeklyReports"
                  checked={notifications.weeklyReports}
                  onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, weeklyReports: checked }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
              <CardDescription>Control team visibility and access permissions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="publicTeam">Public Team</Label>
                  <p className="text-sm text-gray-600">Allow team to be discoverable publicly</p>
                </div>
                <Switch
                  id="publicTeam"
                  checked={privacy.publicTeam}
                  onCheckedChange={(checked) => setPrivacy(prev => ({ ...prev, publicTeam: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="allowGuestUploads">Allow Guest Uploads</Label>
                  <p className="text-sm text-gray-600">Let non-members upload meetings with invite link</p>
                </div>
                <Switch
                  id="allowGuestUploads"
                  checked={privacy.allowGuestUploads}
                  onCheckedChange={(checked) => setPrivacy(prev => ({ ...prev, allowGuestUploads: checked }))}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="requireApproval">Require Approval</Label>
                  <p className="text-sm text-gray-600">Team admin must approve new members</p>
                </div>
                <Switch
                  id="requireApproval"
                  checked={privacy.requireApproval}
                  onCheckedChange={(checked) => setPrivacy(prev => ({ ...prev, requireApproval: checked }))}
                />
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-between">
            <Button onClick={saveSettings} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Save Settings
            </Button>
            
            <Button variant="destructive" onClick={deleteTeam}>
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSettings;
