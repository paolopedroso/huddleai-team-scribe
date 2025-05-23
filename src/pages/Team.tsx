
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Upload, Calendar, Clock, Users, MessageSquare, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const teamMembers = [
    { name: "Sarah Johnson", role: "Product Manager", avatar: "", initials: "SJ", status: "online" },
    { name: "Mike Chen", role: "Senior Developer", avatar: "", initials: "MC", status: "online" },
    { name: "Emily Davis", role: "UX Designer", avatar: "", initials: "ED", status: "away" },
    { name: "Alex Rodriguez", role: "DevOps Engineer", avatar: "", initials: "AR", status: "offline" },
  ];

  const recentMeetings = [
    {
      id: 1,
      title: "Daily Standup - Sprint 23",
      date: "2024-01-15",
      duration: "12 mins",
      participants: 4,
      status: "processed",
      summary: "Team discussed progress on user authentication feature and addressed deployment blockers."
    },
    {
      id: 2,
      title: "Weekly Planning Meeting",
      date: "2024-01-14", 
      duration: "25 mins",
      participants: 5,
      status: "processing",
      summary: "Planning session for upcoming sprint with feature prioritization."
    },
    {
      id: 3,
      title: "Daily Standup - Sprint 22",
      date: "2024-01-13",
      duration: "15 mins", 
      participants: 4,
      status: "processed",
      summary: "Quick sync on bug fixes and preparation for demo presentation."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "away": return "bg-yellow-500";
      case "offline": return "bg-gray-400";
      default: return "bg-gray-400";
    }
  };

  const getMeetingStatusBadge = (status: string) => {
    switch (status) {
      case "processed": return <Badge className="bg-green-100 text-green-800">Processed</Badge>;
      case "processing": return <Badge className="bg-blue-100 text-blue-800">Processing</Badge>;
      case "failed": return <Badge variant="destructive">Failed</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center border-b bg-white/80 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">HuddleAI</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Invite Member
          </Button>
          <Button>
            <Upload className="w-4 h-4 mr-2" />
            Upload Meeting
          </Button>
        </div>
      </nav>

      <div className="px-6 py-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Dashboard</h1>
          <p className="text-gray-600">Manage your team and track meeting insights</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Meetings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Duration</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.2h</div>
              <p className="text-xs text-muted-foreground">Average 20.5 min/meeting</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamMembers.length}</div>
              <p className="text-xs text-muted-foreground">3 online now</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Action Items</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">12 completed this week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Team Members */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg h-fit">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Team Members
                  <Button size="sm" variant="outline">
                    <Plus className="w-4 h-4" />
                  </Button>
                </CardTitle>
                <CardDescription>Manage your team and their roles</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={member.avatar} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(member.status)}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{member.name}</p>
                      <p className="text-xs text-gray-500 truncate">{member.role}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Meetings */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Meetings
                  <Button size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload New
                  </Button>
                </CardTitle>
                <CardDescription>Your team's latest standup recordings and insights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentMeetings.map((meeting) => (
                  <div key={meeting.id} className="p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium text-gray-900">{meeting.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {meeting.date}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {meeting.duration}
                          </span>
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {meeting.participants} participants
                          </span>
                        </div>
                      </div>
                      {getMeetingStatusBadge(meeting.status)}
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{meeting.summary}</p>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline">View Transcript</Button>
                      <Button size="sm" variant="outline">Action Items</Button>
                      <Button size="sm" variant="outline">Summary</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
