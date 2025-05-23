
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MessageSquare, ArrowLeft, Search, Upload, Calendar, Clock, Users, Play, MoreVertical, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MeetingManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const meetings = [
    {
      id: 1,
      title: "Daily Standup - Sprint 23",
      date: "2024-01-15",
      duration: "12 mins",
      participants: 4,
      status: "processed",
      uploadedBy: "Sarah Johnson",
      summary: "Team discussed progress on user authentication feature and addressed deployment blockers.",
      actionItems: 3
    },
    {
      id: 2,
      title: "Weekly Planning Meeting",
      date: "2024-01-14",
      duration: "25 mins",
      participants: 5,
      status: "processing",
      uploadedBy: "Mike Chen",
      summary: "Planning session for upcoming sprint with feature prioritization.",
      actionItems: 5
    },
    {
      id: 3,
      title: "Daily Standup - Sprint 22",
      date: "2024-01-13",
      duration: "15 mins",
      participants: 4,
      status: "processed",
      uploadedBy: "Emily Davis",
      summary: "Quick sync on bug fixes and preparation for demo presentation.",
      actionItems: 2
    },
    {
      id: 4,
      title: "Sprint Retrospective",
      date: "2024-01-12",
      duration: "45 mins",
      participants: 6,
      status: "failed",
      uploadedBy: "Alex Rodriguez",
      summary: "Audio quality issues prevented proper transcription.",
      actionItems: 0
    },
    {
      id: 5,
      title: "Product Review Meeting",
      date: "2024-01-11",
      duration: "30 mins",
      participants: 3,
      status: "archived",
      uploadedBy: "Sarah Johnson",
      summary: "Reviewed new feature implementations and user feedback.",
      actionItems: 4
    }
  ];

  const filteredMeetings = meetings.filter(meeting =>
    meeting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    meeting.uploadedBy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "processed": return <Badge className="bg-green-100 text-green-800">Processed</Badge>;
      case "processing": return <Badge className="bg-blue-100 text-blue-800">Processing</Badge>;
      case "failed": return <Badge variant="destructive">Failed</Badge>;
      case "archived": return <Badge variant="secondary">Archived</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getStatusCount = (status: string) => {
    return meetings.filter(m => m.status === status).length;
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
          <Link to="/meeting-upload">
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Upload Meeting
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Meeting Management</h1>
          <p className="text-gray-600">View and manage all team meetings and recordings</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6 border-0 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search meetings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">{getStatusCount('processed')}</div>
              <p className="text-sm text-gray-600">Processed</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">{getStatusCount('processing')}</div>
              <p className="text-sm text-gray-600">Processing</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-600">{getStatusCount('failed')}</div>
              <p className="text-sm text-gray-600">Failed</p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-gray-600">{meetings.length}</div>
              <p className="text-sm text-gray-600">Total Meetings</p>
            </CardContent>
          </Card>
        </div>

        {/* Meetings List */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>All Meetings</CardTitle>
            <CardDescription>
              Showing {filteredMeetings.length} of {meetings.length} meetings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredMeetings.map((meeting) => (
                <div key={meeting.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-medium text-gray-900">{meeting.title}</h3>
                        {getStatusBadge(meeting.status)}
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-gray-600 mb-2">
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
                      <p className="text-sm text-gray-700 mb-2">{meeting.summary}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>Uploaded by {meeting.uploadedBy}</span>
                          <span>{meeting.actionItems} action items</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex space-x-2">
                    <Link to="/meeting-details">
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                    </Link>
                    {meeting.status === 'processed' && (
                      <>
                        <Button size="sm" variant="outline">Transcript</Button>
                        <Button size="sm" variant="outline">Action Items</Button>
                        <Button size="sm" variant="outline">Summary</Button>
                      </>
                    )}
                    {meeting.status === 'failed' && (
                      <Button size="sm" variant="outline">Retry Processing</Button>
                    )}
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

export default MeetingManagement;
