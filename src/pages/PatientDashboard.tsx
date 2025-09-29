import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  Calendar, 
  Activity, 
  Utensils, 
  Heart, 
  TrendingUp,
  Bell,
  Plus,
  Eye,
  AlertTriangle
} from "lucide-react";

const PatientDashboard = () => {
  const [notifications] = useState([
    { id: 1, type: "warning", message: "Low Vitamin D detected - Schedule consultation", time: "2 hours ago" },
    { id: 2, type: "info", message: "Your meal plan has been updated", time: "1 day ago" },
    { id: 3, type: "success", message: "Great job! You've met your daily fiber goal", time: "2 days ago" }
  ]);

  const healthMetrics = [
    { name: "Daily Calories", current: 1850, target: 2000, unit: "kcal", color: "primary" },
    { name: "Protein", current: 45, target: 60, unit: "g", color: "accent" },
    { name: "Fiber", current: 28, target: 25, unit: "g", color: "success" },
    { name: "Water", current: 6, target: 8, unit: "glasses", color: "primary-light" }
  ];

  const recentMeals = [
    { time: "Breakfast", food: "Oatmeal with almonds & honey", calories: 320, dosha: "Vata +" },
    { time: "Lunch", food: "Quinoa salad with vegetables", calories: 450, dosha: "Pitta +" },
    { time: "Snack", food: "Apple with peanut butter", calories: 180, dosha: "Kapha +" }
  ];

  const upcomingAppointments = [
    { date: "Oct 2", time: "2:00 PM", doctor: "Dr. Priya Sharma", type: "Follow-up Consultation" },
    { date: "Oct 5", time: "10:00 AM", doctor: "Dr. Raj Kumar", type: "Nutrition Review" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto p-4 md:p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome back, Sarah!</h1>
            <p className="text-muted-foreground">Here's your health overview for today</p>
          </div>
          <Button asChild>
            <Link to="/food-logger">
              <Plus className="h-4 w-4 mr-2" />
              Log Meal
            </Link>
          </Button>
        </div>

        {/* Notifications */}
        <Card className="border-l-4 border-l-warning">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bell className="h-5 w-5" />
              Health Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                <AlertTriangle className="h-4 w-4 text-warning mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Health Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {healthMetrics.map((metric) => {
            const percentage = (metric.current / metric.target) * 100;
            return (
              <Card key={metric.name}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{metric.current}</span>
                    <span className="text-sm text-muted-foreground">/ {metric.target} {metric.unit}</span>
                  </div>
                  <Progress value={percentage} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {percentage.toFixed(0)}% of daily goal
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Meals */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5" />
                Today's Meals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentMeals.map((meal, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline">{meal.time}</Badge>
                      <Badge variant="secondary">{meal.dosha}</Badge>
                    </div>
                    <h4 className="font-medium">{meal.food}</h4>
                    <p className="text-sm text-muted-foreground">{meal.calories} calories</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button asChild variant="outline" className="w-full">
                <Link to="/food-logger">Add New Meal</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment, index) => (
                <div key={index} className="p-4 rounded-lg border space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge>{appointment.date}</Badge>
                    <span className="text-sm text-muted-foreground">{appointment.time}</span>
                  </div>
                  <h4 className="font-medium">{appointment.doctor}</h4>
                  <p className="text-sm text-muted-foreground">{appointment.type}</p>
                </div>
              ))}
              <Button asChild variant="outline" className="w-full">
                <Link to="/appointments">
                  <Calendar className="h-4 w-4 mr-2" />
                  View All
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button asChild variant="outline" className="h-20 flex-col">
            <Link to="/food-logger">
              <Utensils className="h-6 w-6 mb-2" />
              Log Food
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-20 flex-col">
            <Link to="/analysis">
              <Activity className="h-6 w-6 mb-2" />
              View Analysis
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-20 flex-col">
            <Link to="/appointments">
              <Calendar className="h-6 w-6 mb-2" />
              Book Appointment
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-20 flex-col">
            <Link to="/analysis">
              <TrendingUp className="h-6 w-6 mb-2" />
              Health Trends
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;