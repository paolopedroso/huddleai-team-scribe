
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { UserPlus, MessageSquare, ArrowLeft, Mail, Copy, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const InviteMembers = () => {
  const [emails, setEmails] = useState<string[]>([]);
  const [currentEmail, setCurrentEmail] = useState("");
  const [inviteLink] = useState("https://huddleai.com/invite/team-abc123");

  const addEmail = () => {
    if (currentEmail && !emails.includes(currentEmail)) {
      setEmails([...emails, currentEmail]);
      setCurrentEmail("");
    }
  };

  const removeEmail = (emailToRemove: string) => {
    setEmails(emails.filter(email => email !== emailToRemove));
  };

  const sendInvites = () => {
    console.log("Sending invites to:", emails);
    alert(`Invitations sent to ${emails.length} email(s)`);
  };

  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Invite link copied to clipboard!");
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

      <div className="px-6 py-8 max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <UserPlus className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Invite Team Members</h1>
          <p className="text-gray-600">Add new members to collaborate on your team</p>
        </div>

        <div className="space-y-6">
          {/* Email Invitations */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Send Email Invitations
              </CardTitle>
              <CardDescription>
                Enter email addresses to send invitation links directly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <div className="flex-1">
                  <Label htmlFor="email" className="sr-only">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="colleague@company.com"
                    value={currentEmail}
                    onChange={(e) => setCurrentEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addEmail()}
                  />
                </div>
                <Button onClick={addEmail} disabled={!currentEmail}>
                  Add
                </Button>
              </div>

              {emails.length > 0 && (
                <div className="space-y-2">
                  <Label>Email Addresses to Invite:</Label>
                  <div className="flex flex-wrap gap-2">
                    {emails.map((email) => (
                      <Badge key={email} variant="secondary" className="flex items-center space-x-1">
                        <span>{email}</span>
                        <X 
                          className="w-3 h-3 cursor-pointer hover:text-red-600" 
                          onClick={() => removeEmail(email)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <Button 
                onClick={sendInvites} 
                disabled={emails.length === 0}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Send {emails.length} Invitation{emails.length !== 1 ? 's' : ''}
              </Button>
            </CardContent>
          </Card>

          {/* Invite Link */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Copy className="w-5 h-5 mr-2" />
                Share Invite Link
              </CardTitle>
              <CardDescription>
                Copy and share this link with anyone you want to invite
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Input 
                  value={inviteLink} 
                  readOnly 
                  className="bg-gray-50"
                />
                <Button variant="outline" onClick={copyInviteLink}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                This link allows anyone to join your team. You can regenerate it anytime from team settings.
              </p>
            </CardContent>
          </Card>

          {/* Pending Invitations */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Pending Invitations</CardTitle>
              <CardDescription>
                Invitations that haven't been accepted yet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">john.doe@company.com</p>
                    <p className="text-sm text-gray-600">Invited 2 days ago</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Resend</Button>
                    <Button variant="outline" size="sm">Cancel</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">jane.smith@company.com</p>
                    <p className="text-sm text-gray-600">Invited 1 day ago</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Resend</Button>
                    <Button variant="outline" size="sm">Cancel</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InviteMembers;
