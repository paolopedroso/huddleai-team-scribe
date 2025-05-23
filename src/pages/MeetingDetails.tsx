
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Pause, Download, Share, MessageSquare, ArrowLeft, Calendar, Clock, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MeetingDetails = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const meetingData = {
    title: "Daily Standup - Sprint 23",
    date: "2024-01-15",
    duration: "12 mins",
    participants: ["Sarah Johnson", "Mike Chen", "Emily Davis", "Alex Rodriguez"],
    status: "processed"
  };

  const actionItems = [
    { id: 1, task: "Fix authentication bug", assignee: "Mike Chen", deadline: "2024-01-17", completed: false },
    { id: 2, task: "Review design mockups", assignee: "Emily Davis", deadline: "2024-01-16", completed: true },
    { id: 3, task: "Deploy to staging", assignee: "Alex Rodriguez", deadline: "2024-01-18", completed: false }
  ];

  const transcript = `Sarah Johnson: Good morning everyone, let's start with our daily standup. Mike, would you like to go first?

Mike Chen: Sure! Yesterday I worked on the authentication bug we found in testing. I made good progress and should have it fixed by end of day today. No blockers for me.

Emily Davis: Thanks Mike. I finished the design review for the new user onboarding flow. All mockups are ready for development. Planning to start on the next feature today.

Alex Rodriguez: Great work team. I completed the CI/CD pipeline improvements yesterday. Today I'll be working on the staging deployment. Should be ready for testing by tomorrow.

Sarah Johnson: Excellent progress everyone. Any blockers or questions before we wrap up?`;

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
          <Button variant="outline">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Link to="/team">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>
        </div>
      </nav>

      <div className="px-6 py-8 max-w-6xl mx-auto">
        {/* Meeting Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{meetingData.title}</h1>
            <Badge className="bg-green-100 text-green-800">Processed</Badge>
          </div>
          <div className="flex items-center space-x-6 text-gray-600">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {meetingData.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {meetingData.duration}
            </span>
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {meetingData.participants.length} participants
            </span>
          </div>
        </div>

        {/* Media Player */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center mb-4">
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isPlaying ? "Pause" : "Play"}
              </Button>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
              </div>
              <span className="text-sm text-gray-600">4:32 / 12:15</span>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for Content */}
        <Tabs defaultValue="summary" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="transcript">Transcript</TabsTrigger>
            <TabsTrigger value="actions">Action Items</TabsTrigger>
            <TabsTrigger value="participants">Participants</TabsTrigger>
          </TabsList>

          <TabsContent value="summary">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>AI-Generated Summary</CardTitle>
                <CardDescription>Key highlights from this meeting</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Updates</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Authentication bug fix in progress (Mike Chen)</li>
                    <li>Design review completed for user onboarding (Emily Davis)</li>
                    <li>CI/CD pipeline improvements completed (Alex Rodriguez)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Blockers</h4>
                  <p className="text-gray-700">No blockers reported by team members.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Next Steps</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Complete authentication bug fix by end of day</li>
                    <li>Begin staging deployment preparation</li>
                    <li>Start development on new feature designs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transcript">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Meeting Transcript</CardTitle>
                <CardDescription>Full conversation with speaker identification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {transcript}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="actions">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Action Items</CardTitle>
                <CardDescription>Tasks identified from this meeting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {actionItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className={`w-5 h-5 ${item.completed ? 'text-green-600' : 'text-gray-400'}`} />
                        <div>
                          <p className={`font-medium ${item.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                            {item.task}
                          </p>
                          <p className="text-sm text-gray-600">Assigned to: {item.assignee}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Due: {item.deadline}</p>
                        <Badge variant={item.completed ? "default" : "secondary"}>
                          {item.completed ? "Completed" : "Pending"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="participants">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Meeting Participants</CardTitle>
                <CardDescription>Team members who attended this meeting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {meetingData.participants.map((participant, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {participant.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{participant}</p>
                        <p className="text-sm text-gray-600">Team Member</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MeetingDetails;
