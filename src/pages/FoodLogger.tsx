import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import { 
  Camera, 
  Search, 
  Plus, 
  Clock,
  Utensils,
  Brain,
  Flame,
  Droplets,
  Leaf,
  Heart
} from "lucide-react";

const FoodLogger = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  
  const mealTimes = [
    { id: "breakfast", name: "Breakfast", time: "07:00 AM", icon: "🌅" },
    { id: "lunch", name: "Lunch", time: "12:30 PM", icon: "☀️" },
    { id: "snack", name: "Snack", time: "04:00 PM", icon: "🍎" },
    { id: "dinner", name: "Dinner", time: "07:30 PM", icon: "🌙" }
  ];

  const popularFoods = [
    { name: "Oatmeal with Almonds", calories: 320, dosha: "Vata +", category: "Breakfast" },
    { name: "Quinoa Salad", calories: 280, dosha: "Pitta +", category: "Lunch" },
    { name: "Mixed Vegetable Curry", calories: 220, dosha: "Kapha +", category: "Dinner" },
    { name: "Green Tea", calories: 5, dosha: "Balanced", category: "Beverage" },
    { name: "Whole Grain Toast", calories: 120, dosha: "Vata +", category: "Breakfast" },
    { name: "Chicken Tikka", calories: 350, dosha: "Pitta +", category: "Lunch" }
  ];

  const recentMeals = [
    { name: "Masala Chai", time: "10 mins ago", calories: 80 },
    { name: "Fruit Salad", time: "2 hours ago", calories: 150 },
    { name: "Vegetable Soup", time: "Yesterday", calories: 120 }
  ];

  const nutritionPreview = {
    calories: 320,
    protein: 12,
    carbs: 54,
    fat: 8,
    fiber: 6,
    doshaBalance: {
      vata: 40,
      pitta: 30,
      kapha: 30
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto p-4 md:p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Food Logger</h1>
            <p className="text-muted-foreground">Track your meals and get Ayurvedic insights</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Food Input Section */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5" />
                Add Food Item
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Meal Type Selection */}
              <div className="space-y-3">
                <Label>Meal Type</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {mealTimes.map((meal) => (
                    <Button
                      key={meal.id}
                      variant={selectedMeal === meal.id ? "default" : "outline"}
                      className="flex flex-col h-auto py-3"
                      onClick={() => setSelectedMeal(meal.id)}
                    >
                      <span className="text-lg mb-1">{meal.icon}</span>
                      <span className="text-sm font-medium">{meal.name}</span>
                      <span className="text-xs text-muted-foreground">{meal.time}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <Tabs defaultValue="search" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="search" className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Search
                  </TabsTrigger>
                  <TabsTrigger value="camera" className="flex items-center gap-2">
                    <Camera className="h-4 w-4" />
                    Photo
                  </TabsTrigger>
                  <TabsTrigger value="manual" className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Manual
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="search" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="food-search">Search Food</Label>
                    <Input
                      id="food-search"
                      placeholder="Type food name (e.g., dal, roti, curry)"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Popular Foods</Label>
                    <div className="grid gap-2">
                      {popularFoods.filter(food => 
                        food.name.toLowerCase().includes(searchQuery.toLowerCase())
                      ).map((food, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-secondary/50 cursor-pointer">
                          <div>
                            <h4 className="font-medium">{food.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">{food.category}</Badge>
                              <Badge variant="outline" className="text-xs">{food.dosha}</Badge>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{food.calories} cal</p>
                            <Button variant="ghost" size="sm" className="mt-1">
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="camera" className="space-y-4 mt-4">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center bg-secondary/20">
                    <Camera className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="font-medium mb-2">AI Food Recognition</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Take a photo of your meal and our AI will identify the food items
                    </p>
                    <Button>
                      <Camera className="h-4 w-4 mr-2" />
                      Take Photo
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="manual" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="food-name">Food Name</Label>
                      <Input id="food-name" placeholder="Enter food name" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input id="quantity" type="number" placeholder="100" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="unit">Unit</Label>
                        <Input id="unit" placeholder="grams" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Notes (Optional)</Label>
                      <Textarea id="notes" placeholder="Any additional notes about the meal..." />
                    </div>
                    <Button className="w-full">Add Food Item</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Nutrition Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Brain className="h-5 w-5" />
                  Nutrition Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Flame className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold">{nutritionPreview.calories}</p>
                    <p className="text-xs text-muted-foreground">Calories</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Heart className="h-5 w-5 mx-auto mb-2 text-accent" />
                    <p className="text-2xl font-bold">{nutritionPreview.protein}g</p>
                    <p className="text-xs text-muted-foreground">Protein</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Dosha Balance</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Vata</span>
                      <span className="text-sm font-medium">{nutritionPreview.doshaBalance.vata}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Pitta</span>
                      <span className="text-sm font-medium">{nutritionPreview.doshaBalance.pitta}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Kapha</span>
                      <span className="text-sm font-medium">{nutritionPreview.doshaBalance.kapha}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Meals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5" />
                  Recent Meals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentMeals.map((meal, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded border">
                    <div>
                      <p className="font-medium text-sm">{meal.name}</p>
                      <p className="text-xs text-muted-foreground">{meal.time}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {meal.calories} cal
                    </Badge>
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

export default FoodLogger;