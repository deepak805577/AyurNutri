import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import { 
  Users, 
  Calendar, 
  Activity, 
  TrendingUp,
  AlertTriangle,
  Clock,
  FileText,
  Plus,
  Eye,
  Video,
  Pill
} from "lucide-react";

const PractitionerDashboard = () => {
  const [todaysAppointments] = useState([
    { 
      id: 1, 
      patient: "Sarah Johnson", 
      time: "10:00 AM", 
      type: "Follow-up", 
      status: "upcoming",
      avatar: "/api/placeholder/32/32"
    },
    { 
      id: 2, 
      patient: "Michael Chen", 
      time: "11:30 AM", 
      type: "Initial Consultation", 
      status: "upcoming",
      avatar: "/api/placeholder/32/32"
    },
    { 
      id: 3, 
      patient: "Emma Williams", 
      time: "2:00 PM", 
      type: "Nutrition Review", 
      status: "completed",
      avatar: "/api/placeholder/32/32"
    }
  ]);

  const [recentPatients] = useState([
    { 
      name: "David Kumar", 
      lastVisit: "Yesterday", 
      condition: "Digestive Issues", 
      priority: "medium",
      avatar: "/api/placeholder/40/40"
    },
    { 
      name: "Lisa Anderson", 
      lastVisit: "2 days ago", 
      condition: "Weight Management", 
      priority: "low",
      avatar: "/api/placeholder/40/40"
    },
    { 
      name: "Robert Taylor", 
      lastVisit: "3 days ago", 
      condition: "Chronic Fatigue", 
      priority: "high",
      avatar: "/api/placeholder/40/40"
    }
  ]);

  const stats = [
    { title: "Total Patients", value: "248", change: "+12%", icon: Users, color: "primary" },
    { title: "Today's Appointments", value: "8", change: "+2", icon: Calendar, color: "accent" },
    { title: "Pending Reviews", value: "15", change: "-3", icon: FileText, color: "warning" },
    { title: "Success Rate", value: "94%", change: "+2%", icon: TrendingUp, color: "success" }
  ];

  const urgentAlerts = [
    { patient: "John Doe", message: "Critical nutrient deficiency detected", time: "15 mins ago" },
    { patient: "Mary Smith", message: "Missed 2 consecutive appointments", time: "1 hour ago" },
    { patient: "Alex Wilson", message: "Adverse reaction reported", time: "2 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto p-4 md:p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Good morning, Dr. Priya!</h1>
            <p className="text-muted-foreground">You have 8 appointments scheduled for today</p>
          </div>
          <Button asChild>
            <Link to="/appointments">
              <Plus className="h-4 w-4 mr-2" />
              New Appointment
            </Link>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                    {stat.title}
                    <Icon className="h-4 w-4" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stat.value}</span>
                    <Badge variant="secondary" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Urgent Alerts */}
        <Card className="border-l-4 border-l-destructive">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Urgent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {urgentAlerts.map((alert, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                <AlertTriangle className="h-4 w-4 text-destructive mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    <span className="text-destructive">{alert.patient}:</span> {alert.message}
                  </p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
                <Button variant="outline" size="sm">
                  Review
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Appointments */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {todaysAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center gap-4 p-4 rounded-lg border">
                  <Avatar>
                    <AvatarImage src={appointment.avatar} />
                    <AvatarFallback>{appointment.patient.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium">{appointment.patient}</h4>
                    <p className="text-sm text-muted-foreground">{appointment.type}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <Badge variant={appointment.status === 'completed' ? 'secondary' : 'default'}>
                        {appointment.time}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{appointment.status}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {appointment.status === 'upcoming' && (
                        <Button variant="ghost" size="sm">
                          <Video className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <Button asChild variant="outline" className="w-full">
                <Link to="/appointments">View Full Schedule</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Patients */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Recent Patients
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentPatients.map((patient, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                  <Avatar>
                    <AvatarImage src={patient.avatar} />
                    <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{patient.name}</h4>
                    <p className="text-xs text-muted-foreground">{patient.condition}</p>
                    <p className="text-xs text-muted-foreground">{patient.lastVisit}</p>
                  </div>
                  <Badge 
                    variant={
                      patient.priority === 'high' ? 'destructive' : 
                      patient.priority === 'medium' ? 'default' : 'secondary'
                    }
                    className="text-xs"
                  >
                    {patient.priority}
                  </Badge>
                </div>
              ))}
              <Button asChild variant="outline" className="w-full">
                <Link to="/patient">View All Patients</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Button asChild variant="outline" className="h-20 flex-col">
            <Link to="/appointments">
              <Calendar className="h-6 w-6 mb-2" />
              Schedule
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-20 flex-col">
            <Link to="/analysis">
              <Activity className="h-6 w-6 mb-2" />
              Analytics
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-20 flex-col">
            <Link to="/patient">
              <FileText className="h-6 w-6 mb-2" />
              Records
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-20 flex-col">
            <Link to="/analysis">
              <Pill className="h-6 w-6 mb-2" />
              Prescriptions
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-20 flex-col">
            <Link to="/analysis">
              <TrendingUp className="h-6 w-6 mb-2" />
              Reports
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PractitionerDashboard;