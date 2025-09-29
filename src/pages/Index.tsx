import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  Stethoscope, 
  Users, 
  Brain, 
  Shield, 
  Calendar, 
  BarChart3, 
  Smartphone,
  ChevronRight,
  CheckCircle,
  Leaf,
  Heart,
  Activity
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Food Recognition",
      description: "Advanced AI analyzes your meals and provides instant nutritional insights based on Ayurvedic principles."
    },
    {
      icon: Users,
      title: "Patient Management",
      description: "Comprehensive patient records, treatment history, and personalized diet plans all in one place."
    },
    {
      icon: Calendar,
      title: "Tele-Consultation",
      description: "Seamless video consultations with integrated prescription and follow-up management."
    },
    {
      icon: BarChart3,
      title: "Nutrient Analysis",
      description: "Detailed nutritional breakdowns with Ayurvedic dosha analysis and deficiency alerts."
    },
    {
      icon: Shield,
      title: "Secure Cloud Storage",
      description: "HIPAA-compliant cloud infrastructure ensuring your health data is safe and accessible."
    },
    {
      icon: Smartphone,
      title: "Wearable Integration",
      description: "Connect with Google Fit, Apple Health, and other devices for complete health monitoring."
    }
  ];

  const benefits = [
    "Unified platform for nutrition and healthcare",
    "AI-driven personalized Ayurvedic recommendations",
    "Real-time health monitoring and alerts",
    "Integrated pharmacy and prescription management",
    "Scalable for individual practitioners to large clinics"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
              Ayurvedic Practice Management & Nutrition Analysis
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive cloud-based platform combining traditional Ayurvedic wisdom with modern AI technology for personalized healthcare and nutrition management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full">
                <Link to="/patient">
                  Start as Patient
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full">
                <Link to="/practitioner">
                  Practitioner Portal
                  <Stethoscope className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionizing Ayurvedic Healthcare
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bridging ancient wisdom with cutting-edge technology for comprehensive health management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="p-3 w-fit rounded-lg bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Complete Healthcare Ecosystem
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                From food logging to prescription management, our platform provides end-to-end healthcare solutions tailored for Ayurvedic practitioners and their patients.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-8" size="lg">
                <Link to="/login">Get Started Today</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <Stethoscope className="h-8 w-8 text-accent mx-auto mb-4" />
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Practitioners</div>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-success/5 to-success/10 border-success/20">
                <Activity className="h-8 w-8 text-success mx-auto mb-4" />
                <div className="text-2xl font-bold text-success">1M+</div>
                <div className="text-sm text-muted-foreground">Meals Analyzed</div>
              </Card>
              <Card className="p-6 text-center bg-gradient-to-br from-warning/5 to-warning/10 border-warning/20">
                <BarChart3 className="h-8 w-8 text-warning mx-auto mb-4" />
                <div className="text-2xl font-bold text-warning">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-primary via-primary-light to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of Ayurvedic practitioners already using our platform to deliver better patient outcomes.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
            <Link to="/login">Start Free Trial</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background px-4 py-12">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Stethoscope className="h-6 w-6" />
            <span className="text-xl font-bold">AyurNutri</span>
          </div>
          <p className="text-background/80">
            Empowering Ayurvedic healthcare with modern technology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;