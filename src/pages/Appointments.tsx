import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { 
  Calendar, 
  Clock, 
  Video, 
  MapPin,
  Plus,
  Search,
  Filter,
  Phone,
  User
} from "lucide-react";

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [searchTerm, setSearchTerm] = useState("");

  const practitioners = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialization: "Ayurvedic Nutrition",
      rating: 4.9,
      experience: "15 years",
      avatar: "/api/placeholder/60/60",
      available: true,
      nextSlot: "Today 2:00 PM",
      consultationFee: "₹800"
    },
    {
      id: 2,
      name: "Dr. Raj Kumar",
      specialization: "Panchakarma & Detox",
      rating: 4.8,
      experience: "12 years",
      avatar: "/api/placeholder/60/60",
      available: true,
      nextSlot: "Tomorrow 10:00 AM",
      consultationFee: "₹1000"
    },
    {
      id: 3,
      name: "Dr. Anjali Mehta",
      specialization: "Weight Management",
      rating: 4.7,
      experience: "8 years",
      avatar: "/api/placeholder/60/60",
      available: false,
      nextSlot: "Oct 5, 11:00 AM",
      consultationFee: "₹750"
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Priya Sharma",
      date: "Oct 2, 2024",
      time: "2:00 PM",
      type: "Follow-up Consultation",
      mode: "video",
      status: "confirmed",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      doctor: "Dr. Raj Kumar",
      date: "Oct 5, 2024",
      time: "10:00 AM",
      type: "Initial Consultation",
      mode: "clinic",
      status: "pending",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto p-4 md:p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
            <p className="text-muted-foreground">Schedule consultations with Ayurvedic practitioners</p>
          </div>
        </div>

        <Tabs defaultValue="book" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="book" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Book Appointment
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              My Appointments
            </TabsTrigger>
          </TabsList>

          {/* Book Appointment Tab */}
          <TabsContent value="book" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Practitioners List */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Available Practitioners
                  </CardTitle>
                  <div className="flex gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search practitioners..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {practitioners.filter(p => 
                    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    p.specialization.toLowerCase().includes(searchTerm.toLowerCase())
                  ).map((practitioner) => (
                    <div key={practitioner.id} className="p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={practitioner.avatar} />
                          <AvatarFallback>{practitioner.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-lg">{practitioner.name}</h3>
                              <p className="text-muted-foreground">{practitioner.specialization}</p>
                              <div className="flex items-center gap-4 mt-2">
                                <Badge variant="outline">⭐ {practitioner.rating}</Badge>
                                <span className="text-sm text-muted-foreground">{practitioner.experience}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-lg">{practitioner.consultationFee}</p>
                              <p className="text-sm text-muted-foreground">per consultation</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <Badge variant={practitioner.available ? "default" : "secondary"}>
                                {practitioner.available ? "Available" : "Busy"}
                              </Badge>
                              <span className="text-sm text-muted-foreground">Next: {practitioner.nextSlot}</span>
                            </div>
                            <Button 
                              variant={practitioner.available ? "default" : "outline"}
                              disabled={!practitioner.available}
                            >
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Booking Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Select Date & Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                  
                  <div className="space-y-3">
                    <Label>Consultation Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">
                          <div className="flex items-center gap-2">
                            <Video className="h-4 w-4" />
                            Video Call
                          </div>
                        </SelectItem>
                        <SelectItem value="phone">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            Phone Call
                          </div>
                        </SelectItem>
                        <SelectItem value="clinic">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            In-Person
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Available Time Slots</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="justify-center"
                        >
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">
                    Confirm Booking
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* My Appointments Tab */}
          <TabsContent value="upcoming" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-4 border rounded-lg">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={appointment.avatar} />
                        <AvatarFallback>{appointment.doctor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{appointment.doctor}</h3>
                            <p className="text-muted-foreground">{appointment.type}</p>
                          </div>
                          <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                            {appointment.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {appointment.date}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {appointment.time}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            {appointment.mode === 'video' ? (
                              <><Video className="h-4 w-4" /> Video Call</>
                            ) : appointment.mode === 'phone' ? (
                              <><Phone className="h-4 w-4" /> Phone Call</>
                            ) : (
                              <><MapPin className="h-4 w-4" /> In-Person</>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm">Join Call</Button>
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button variant="ghost" size="sm">Cancel</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Appointments;