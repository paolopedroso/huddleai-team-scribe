
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { MessageSquare, ArrowLeft, Search, UserPlus, MoreVertical, Crown, Shield, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MemberManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const members = [
    { 
      id: 1, 
      name: "Sarah Johnson", 
      email: "sarah@company.com", 
      role: "Admin", 
      status: "Active", 
      joinedDate: "2024-01-01",
      lastActive: "2 minutes ago",
      initials: "SJ"
    },
    { 
      id: 2, 
      name: "Mike Chen", 
      email: "mike@company.com", 
      role: "Member", 
      status: "Active", 
      joinedDate: "2024-01-05",
      lastActive: "1 hour ago",
      initials: "MC"
    },
    { 
      id: 3, 
      name: "Emily Davis", 
      email: "emily@company.com", 
      role: "Member", 
      status: "Active", 
      joinedDate: "2024-01-08",
      lastActive: "3 hours ago",
      initials: "ED"
    },
    { 
      id: 4, 
      name: "Alex Rodriguez", 
      email: "alex@company.com", 
      role: "Moderator", 
      status: "Inactive", 
      joinedDate: "2024-01-10",
      lastActive: "2 days ago",
      initials: "AR"
    },
    { 
      id: 5, 
      name: "John Doe", 
      email: "john@company.com", 
      role: "Member", 
      status: "Pending", 
      joinedDate: "2024-01-15",
      lastActive: "Never",
      initials: "JD"
    }
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Admin": return <Crown className="w-4 h-4" />;
      case "Moderator": return <Shield className="w-4 h-4" />;
      default: return <User className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800";
      case "Inactive": return "bg-yellow-100 text-yellow-800";
      case "Pending": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
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
        <div className="flex items-center space-x-4">
          <Link to="/invite-members">
            <Button>
              <UserPlus className="w-4 h-4 mr-2" />
              Invite Members
            </Button>
          </Link>
          <Link to="/team">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
      </nav>

      <div className="px-6 py-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Member Management</h1>
          <p className="text-gray-600">Manage team members, roles, and permissions</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6 border-0 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">Filter</Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">{members.filter(m => m.status === 'Active').length}</div>
              <p className="text-sm text-gray-600">Active Members</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-600">{members.filter(m => m.status === 'Pending').length}</div>
              <p className="text-sm text-gray-600">Pending Invites</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600">{members.filter(m => m.role === 'Admin').length}</div>
              <p className="text-sm text-gray-600">Admins</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-gray-600">{members.length}</div>
              <p className="text-sm text-gray-600">Total Members</p>
            </CardContent>
          </Card>
        </div>

        {/* Members List */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>
              Showing {filteredMembers.length} of {members.length} members
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src="" />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-gray-900">{member.name}</h3>
                        <div className="flex items-center space-x-1">
                          {getRoleIcon(member.role)}
                          <span className="text-sm text-gray-600">{member.role}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{member.email}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">Joined {member.joinedDate}</span>
                        <span className="text-xs text-gray-500">Last active: {member.lastActive}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={getStatusColor(member.status)}>
                      {member.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MemberManagement;
