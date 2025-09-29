import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Brain,
  Heart,
  Leaf,
  Target,
  Calendar,
  Download,
  Share
} from "lucide-react";

const NutrientAnalysis = () => {
  const [timeRange, setTimeRange] = useState("week");

  const dailyNutrients = {
    calories: { current: 1850, target: 2000, unit: "kcal" },
    protein: { current: 65, target: 80, unit: "g" },
    carbs: { current: 220, target: 250, unit: "g" },
    fat: { current: 70, target: 65, unit: "g" },
    fiber: { current: 28, target: 25, unit: "g" },
    water: { current: 2.1, target: 2.5, unit: "L" }
  };

  const vitamins = [
    { name: "Vitamin D", current: 45, target: 80, unit: "IU", status: "low" },
    { name: "Vitamin B12", current: 350, target: 400, unit: "mcg", status: "good" },
    { name: "Iron", current: 12, target: 15, unit: "mg", status: "moderate" },
    { name: "Calcium", current: 800, target: 1000, unit: "mg", status: "moderate" },
    { name: "Omega-3", current: 0.8, target: 1.2, unit: "g", status: "low" },
    { name: "Folate", current: 320, target: 400, unit: "mcg", status: "moderate" }
  ];

  const doshaAnalysis = {
    vata: { percentage: 35, foods: ["Warm cooked grains", "Ghee", "Warm spices"], balance: "balanced" },
    pitta: { percentage: 40, foods: ["Cooling foods", "Sweet fruits", "Coconut"], balance: "high" },
    kapha: { percentage: 25, foods: ["Light foods", "Spicy meals", "Legumes"], balance: "low" }
  };

  const weeklyTrends = [
    { day: "Mon", calories: 1950, protein: 70, mood: "good" },
    { day: "Tue", calories: 1800, protein: 65, mood: "fair" },
    { day: "Wed", calories: 2100, protein: 75, mood: "excellent" },
    { day: "Thu", calories: 1850, protein: 68, mood: "good" },
    { day: "Fri", calories: 1900, protein: 72, mood: "good" },
    { day: "Sat", calories: 2200, protein: 78, mood: "fair" },
    { day: "Sun", calories: 1750, protein: 60, mood: "good" }
  ];

  const recommendations = [
    {
      type: "critical",
      title: "Increase Vitamin D Intake",
      description: "Your Vitamin D levels are below optimal. Consider adding fortified foods or supplements.",
      action: "Add 15 minutes of sunlight daily"
    },
    {
      type: "warning",
      title: "Balance Pitta Dosha",
      description: "Your Pitta is elevated. Include more cooling foods in your diet.",
      action: "Add cucumber, mint, and coconut water"
    },
    {
      type: "success",
      title: "Excellent Fiber Intake",
      description: "You're exceeding your daily fiber goals. Great for digestive health!",
      action: "Continue current fiber-rich foods"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "low": return "destructive";
      case "moderate": return "secondary";
      case "good": return "default";
      default: return "secondary";
    }
  };

  const getRecommendationIcon = (type: string) => {
    switch (type) {
      case "critical": return AlertTriangle;
      case "warning": return AlertTriangle;
      case "success": return CheckCircle;
      default: return Brain;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto p-4 md:p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Nutrient Analysis</h1>
            <p className="text-muted-foreground">Comprehensive insights into your nutritional health</p>
          </div>
          <div className="flex gap-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">3 Months</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="daily" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="daily">Daily View</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="dosha">Dosha Analysis</TabsTrigger>
          </TabsList>

          {/* Daily Analysis */}
          <TabsContent value="daily" className="space-y-6">
            {/* Macronutrients */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Daily Macronutrients
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(dailyNutrients).map(([key, nutrient]) => {
                    const percentage = (nutrient.current / nutrient.target) * 100;
                    const isOver = percentage > 100;
                    return (
                      <div key={key} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium capitalize">{key}</h4>
                          <Badge variant={isOver ? "destructive" : percentage > 80 ? "default" : "secondary"}>
                            {percentage.toFixed(0)}%
                          </Badge>
                        </div>
                        <Progress value={Math.min(percentage, 100)} className="h-2" />
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{nutrient.current} {nutrient.unit}</span>
                          <span className="text-muted-foreground">Goal: {nutrient.target} {nutrient.unit}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Vitamins & Minerals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Vitamins & Minerals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vitamins.map((vitamin) => {
                    const percentage = (vitamin.current / vitamin.target) * 100;
                    return (
                      <div key={vitamin.name} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{vitamin.name}</h4>
                          <Badge variant={getStatusColor(vitamin.status)}>
                            {vitamin.status}
                          </Badge>
                        </div>
                        <Progress value={Math.min(percentage, 100)} className="h-2 mb-2" />
                        <div className="flex justify-between text-sm">
                          <span>{vitamin.current} {vitamin.unit}</span>
                          <span className="text-muted-foreground">{vitamin.target} {vitamin.unit}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Personalized Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((rec, index) => {
                  const Icon = getRecommendationIcon(rec.type);
                  return (
                    <div key={index} className="flex gap-4 p-4 border rounded-lg">
                      <div className={`p-2 rounded-full flex-shrink-0 ${
                        rec.type === 'critical' ? 'bg-destructive/10' :
                        rec.type === 'warning' ? 'bg-warning/10' : 'bg-success/10'
                      }`}>
                        <Icon className={`h-5 w-5 ${
                          rec.type === 'critical' ? 'text-destructive' :
                          rec.type === 'warning' ? 'text-warning' : 'text-success'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{rec.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {rec.action}
                        </Badge>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Trends */}
          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Weekly Nutrition Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {weeklyTrends.map((day, index) => (
                    <div key={day.day} className="flex items-center gap-4 p-3 rounded-lg border">
                      <div className="w-12 text-center">
                        <span className="font-medium">{day.day}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Calories: {day.calories}</span>
                          <span className="text-sm">Protein: {day.protein}g</span>
                        </div>
                        <Progress value={(day.calories / 2000) * 100} className="h-2" />
                      </div>
                      <Badge variant={
                        day.mood === 'excellent' ? 'default' :
                        day.mood === 'good' ? 'default' : 'secondary'
                      }>
                        {day.mood}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dosha Analysis */}
          <TabsContent value="dosha" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5" />
                  Ayurvedic Dosha Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {Object.entries(doshaAnalysis).map(([dosha, data]) => (
                    <div key={dosha} className="p-6 border rounded-lg text-center">
                      <h3 className="text-xl font-bold capitalize mb-2">{dosha}</h3>
                      <div className="mb-4">
                        <div className="text-3xl font-bold mb-2">{data.percentage}%</div>
                        <Badge variant={
                          data.balance === 'balanced' ? 'default' :
                          data.balance === 'high' ? 'destructive' : 'secondary'
                        }>
                          {data.balance}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Recommended Foods:</h4>
                        {data.foods.map((food, index) => (
                          <Badge key={index} variant="outline" className="text-xs mr-1 mb-1">
                            {food}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-medium mb-2">Ayurvedic Insights</h4>
                  <p className="text-sm text-muted-foreground">
                    Your Pitta dosha is currently elevated, which may indicate increased heat in the body. 
                    Focus on cooling foods and avoid spicy or fried items. Consider meditation and cooling pranayama exercises.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NutrientAnalysis;