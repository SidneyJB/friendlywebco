import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Code, Server, Shield, Monitor, Palette, ShoppingCart, Map, ShieldCheck, TrendingUp, Search, Zap, Lock, Globe, MessageSquare, Star, CheckCircle, ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";
export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-section">
          {/* Background Elements */}
          <div className="hero-background">
            {/* Grid Lines */}
            <div className="grid-lines"></div>
            
            {/* Large Red Gradient Orb - Bottom Right */}
            <div 
              className="gradient-orb red-orb"
              style={{
                background: 'radial-gradient(circle, var(--secondary) 0%, transparent 30%)',
                left: '60vw',
                top: '50vh',
                width: '400px',
                height: '400px',
                opacity: 0.8,
                animation: 'morphOrb 20s ease-in-out infinite'
              }}
            ></div>
            
            {/* Blue Gradient Orb - Bottom Center */}
            <div 
              className="gradient-orb blue-orb"
              style={{
                background: 'radial-gradient(circle, var(--primary-light) 0%, transparent 40%)',
                left: '25vw',
                top: '60vh',
                width: '300px',
                height: '300px',
                opacity: 0.6,
                animation: 'morphOrb 18s ease-in-out infinite'
              }}
            ></div>
            
            {/* Large Geometric Shape - Middle Right */}
            <div 
              className="geometric-shape large-shape"
              style={{
                left: '70vw',
                top: '25vh',
                width: '120px',
                height: '120px',
                border: '2px solid var(--secondary)',
                borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%',
                opacity: 0.7,
                animation: 'morphShape 16s ease-in-out infinite'
              }}
            ></div>
            
            {/* Small Red Dot - Above Description */}
            <div 
              className="small-dot"
              style={{
                left: '55vw',
                top: '55vh',
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--secondary)',
                borderRadius: '50%',
                animation: 'morphDot 4s ease-in-out infinite'
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                We Create <span className="primary">Friendly</span><span className="secondary">Web</span> Experiences
              </h1>
              <p className="hero-description">
                Have an idea? We'll turn it into a clean, easy-to-use website that makes your business look good and helps you connect with customers. No stress, no fluff—just a site that works.
              </p>
              <div className="hero-buttons">
                <a href="/order" className="btn-primary">Start Free - No Upfront Payment</a>
                <a href="#portfolio" className="btn-secondary">Check Out Our Work</a>
              </div>
            </div>
          </div>
          
          {/* Keep Scrolling Indicator */}
          <div className="scroll-indicator">
            <span>Keep Scrolling</span>
            <div className="scroll-arrow"></div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section bg-background relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-64 h-64 rounded-full blur-3xl opacity-30"
              style={{
                background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, rgba(0, 240, 255, 0) 70%)',
                left: '24.65%',
                top: '34.65%',
                animation: 'float 8s ease-in-out infinite',
              }}
            />
            <div
              className="absolute w-80 h-80 rounded-full blur-3xl opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, rgba(0, 240, 255, 0) 70%)',
                left: '68.61%',
                top: '61.39%',
                animation: 'float 10s ease-in-out infinite reverse',
              }}
            />
          </div>

          <div className="container relative z-10">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Our <span>Services</span></h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Affordable, all-in-one web solutions designed specifically for small businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Small Business Websites</h3>
                <p className="text-muted-foreground">
                  Beautiful, easy-to-update websites that work perfectly on all devices and won't break your budget.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Mobile-Friendly Design</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Easy Content Management</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Fast Loading Speed</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Built-in SEO Features</li>
                </ul>
              </Card>

              <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Professional Design</h3>
                <p className="text-muted-foreground">
                  Eye-catching designs that reflect your brand and convert visitors into customers.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Custom Logo Design</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Brand Identity Package</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />User-Friendly Navigation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Conversion-Focused Layouts</li>
                </ul>
              </Card>

              <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <ShoppingCart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Online Stores</h3>
                <p className="text-muted-foreground">
                  Affordable e-commerce solutions that make selling online simple for small businesses.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Easy Product Management</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Secure Payment Processing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Local Delivery Options</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Customer Account Portal</li>
                </ul>
              </Card>

              <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Map className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Local Business Visibility</h3>
                <p className="text-muted-foreground">
                  Get found by local customers with Google Maps integration and local SEO optimization.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Google Business Profile Setup</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Local SEO Optimization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Customer Reviews Management</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Location-Based Features</li>
                </ul>
              </Card>

              <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Website Maintenance</h3>
                <p className="text-muted-foreground">
                  Worry-free maintenance packages to keep your website secure, updated, and running smoothly.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Regular Updates & Backups</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Security Monitoring</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Technical Support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Content Updates Assistance</li>
                </ul>
              </Card>

              <Card className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Small Business Marketing</h3>
                <p className="text-muted-foreground">
                  Affordable digital marketing that brings local customers to your business.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Local SEO Packages</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Social Media Management</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Email Marketing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Google Ads for Small Business</li>
                </ul>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="text-lg px-8">
                Start Your Free Website Today
              </Button>
            </div>
          </div>
        </section>

        {/* Work/Portfolio Section */}
        <section id="portfolio" className="section bg-muted/30 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-72 h-72 rounded-full blur-3xl opacity-25"
              style={{
                background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, rgba(0, 240, 255, 0) 70%)',
                left: '65.35%',
                top: '24.65%',
                animation: 'float 9s ease-in-out infinite',
              }}
            />
            <div
              className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, rgba(0, 240, 255, 0) 70%)',
                left: '21.39%',
                top: '68.61%',
                animation: 'float 11s ease-in-out infinite reverse',
              }}
            />
          </div>

          <div className="container relative z-10">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Our <span>Work</span></h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our latest projects and see how we've helped businesses create friendly web experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Project 1 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/greenleaf.png"
                    alt="Greenleaf Design project screenshot"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary">View Project</Button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Greenleaf Design</h3>
              </div>

              {/* Project 2 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/atlas.png"
                    alt="Atlas Bookkeeping project screenshot"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary">View Project</Button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Atlas Bookkeeping</h3>
              </div>

              {/* Project 3 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/yoga.png"
                    alt="Evergreen Wellness project screenshot"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary">View Project</Button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Evergreen Wellness</h3>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="text-lg px-8">
                Start Your Project
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About The FriendlyWeb Company</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  We've been building websites since 2015, helping small businesses look great online and connect with more people. From design and development to branding and marketing, we handle the whole package—without making things complicated.
                </p>
                <p className="text-muted-foreground mb-8">
                  We mix friendly service with real know-how to create websites that not only look good, but work great too. We take time to understand your business, your goals, and what makes you different—so we can build something that truly fits.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">8+</div>
                    <p className="text-sm text-muted-foreground">Years of Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">700+</div>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5</div>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </div>
                </div>

                <Button size="lg" className="w-full sm:w-auto">
                  Work With Our Team
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Team Photo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="section bg-muted/30 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-80 h-80 rounded-full blur-3xl opacity-25"
              style={{
                background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, rgba(0, 240, 255, 0) 70%)',
                left: '24.65%',
                top: '34.65%',
                animation: 'float 10s ease-in-out infinite',
              }}
            />
            <div
              className="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, rgba(0, 240, 255, 0) 70%)',
                left: '68.61%',
                top: '61.39%',
                animation: 'float 12s ease-in-out infinite reverse',
              }}
            />
          </div>

          <div className="container relative z-10">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Our <span>Process</span></h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Simple, stress-free website creation for small businesses and startups.
              </p>
            </div>

            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    01
                  </div>
                  <h3 className="text-2xl font-semibold">Quick Consultation</h3>
                  <p className="text-muted-foreground">
                    A friendly chat to understand your small business needs and goals - no technical jargon, just simple questions about your business.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Business Goals Discussion</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Budget-Friendly Planning</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Timeline Setting</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Simple Questionnaire</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <Search className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="flex-1 space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    02
                  </div>
                  <h3 className="text-2xl font-semibold">Simple Plan</h3>
                  <p className="text-muted-foreground">
                    We create an easy-to-understand roadmap for your website that fits your budget and timeline, with clear pricing and no hidden costs.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Fixed Price Packages</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Clear Deliverables</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Competitor Research</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />SEO Strategy</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    03
                  </div>
                  <h3 className="text-2xl font-semibold">Design Preview</h3>
                  <p className="text-muted-foreground">
                    See your website before it's built with simple mockups that show exactly how your site will look on phones and computers.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Mobile-First Design</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Brand Color Selection</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Easy Revision Process</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Advanced Prototyping</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <Palette className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="flex-1 space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    04
                  </div>
                  <h3 className="text-2xl font-semibold">Quick Build</h3>
                  <p className="text-muted-foreground">
                    We build your website using professional code that ensures speed, security, and a perfect fit for your business needs.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Custom Code Development</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Mobile Optimization</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Performance Tuning</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Advanced Features</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <Code className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    05
                  </div>
                  <h3 className="text-2xl font-semibold">Launch & Support</h3>
                  <p className="text-muted-foreground">
                    We handle the technical parts of launching your site and provide 30 days of free support to make sure everything works perfectly for your customers.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Hosting with 99.99% Uptime</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Software Updates</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Security & Privacy</li>
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Dedicated Support</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                Whether you're just starting your first business website or need a complex web application, our process adapts to your needs while keeping things simple and stress-free.
              </p>
              <Button size="lg" className="text-lg px-8">
                Start Free - No Payment Required
              </Button>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section id="basic-package" className="section bg-background">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">What's Included</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to look professional online—built with care, priced honestly, and backed by real support whenever you need it.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Website Design & Development Card */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Website Design & Development</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Monitor className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Professional Design</h4>
                      <p className="text-sm text-muted-foreground">Custom design that matches your brand identity with a clean, modern look that works on all devices.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Monitor className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Mobile-First Approach</h4>
                      <p className="text-sm text-muted-foreground">Fully responsive design that looks great on smartphones, tablets, and desktop computers.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Fast Loading Speed</h4>
                      <p className="text-sm text-muted-foreground">Optimized code and images to ensure your website loads quickly, improving user experience and SEO.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Search className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">SEO Foundation</h4>
                      <p className="text-sm text-muted-foreground">Built-in SEO essentials including meta tags, semantic HTML, and proper heading structure.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Essential Business Features Card */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Essential Business Features</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Contact Form</h4>
                      <p className="text-sm text-muted-foreground">Professional contact form with spam protection that delivers messages directly to your email.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Map className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Google Maps Integration</h4>
                      <p className="text-sm text-muted-foreground">Interactive map showing your business location to help customers find you easily.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Click-to-Call Functionality</h4>
                      <p className="text-sm text-muted-foreground">Mobile users can tap your phone number to call your business directly.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Social Media Integration</h4>
                      <p className="text-sm text-muted-foreground">Links to your social profiles and sharing buttons for your content.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Technical Essentials Card */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Technical Essentials</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Lock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">SSL Certificate</h4>
                      <p className="text-sm text-muted-foreground">Secure HTTPS connection with SSL certificate included at no extra cost.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Server className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Fast Hosting Setup</h4>
                      <p className="text-sm text-muted-foreground">Website hosting configuration on reliable servers with 99.9% uptime.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Domain Configuration</h4>
                      <p className="text-sm text-muted-foreground">We'll set up your existing domain or help you acquire and set up a new one.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Business Email Setup</h4>
                      <p className="text-sm text-muted-foreground">Configuration assistance for professional email addresses using your domain.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Support & Training Card */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Support & Training</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">30 Days of Support</h4>
                      <p className="text-sm text-muted-foreground">Technical support and minor content updates for 30 days after launch.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Server className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Website Backup</h4>
                      <p className="text-sm text-muted-foreground">Initial backup of your complete website for safety and peace of mind.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Post-Launch Check</h4>
                      <p className="text-sm text-muted-foreground">Quality assurance review two weeks after launch to ensure everything is working perfectly.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Pricing Card */}
            <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Basic Website Package</h3>
              <div className="text-4xl font-bold mb-2">$0 <span className="text-lg font-normal text-muted-foreground">down payment</span></div>
              <p className="text-muted-foreground mb-6">
                Get started with a professional website today - no upfront payment required. Pay only after your site goes live. Includes initial website content writing and monthly hosting & maintenance.
              </p>
              <Button size="lg" className="text-lg px-8">
                Start Free - No Payment Required
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section bg-muted/30 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-80 h-80 rounded-full blur-3xl opacity-25"
              style={{
                background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, rgba(0, 240, 255, 0) 70%)',
                left: '65.35%',
                top: '34.65%',
                animation: 'float 11s ease-in-out infinite',
              }}
            />
            <div
              className="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, rgba(0, 240, 255, 0) 70%)',
                left: '31.39%',
                top: '68.61%',
                animation: 'float 13s ease-in-out infinite reverse',
              }}
            />
          </div>

          <div className="container relative z-10">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">What <span>Our Clients Say</span></h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with The Friendly Web Company.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="p-6 relative">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-muted-foreground mb-6">
                  Working with The Friendly Web Company was a game-changer for our business. Their approachable design and development helped us connect with our customers in a meaningful way. The team's attention to detail and commitment to creating welcoming experiences is unmatched.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">CEO, Community Innovations</div>
                  </div>
                </div>
              </Card>

              {/* Testimonial 2 */}
              <Card className="p-6 relative">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-muted-foreground mb-6">
                  The Friendly Web Company transformed our online presence completely. They took the time to understand our unique needs and delivered a website that perfectly represents our brand. The ongoing support has been exceptional.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold">Mike Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Owner, Local Fitness Center</div>
                  </div>
                </div>
              </Card>

              {/* Testimonial 3 */}
              <Card className="p-6 relative">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-muted-foreground mb-6">
                  As a small business owner with no technical background, I was nervous about getting a website. The Friendly Web Company made the entire process stress-free. They explained everything clearly and delivered exactly what they promised.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">LC</span>
                  </div>
                  <div>
                    <div className="font-semibold">Lisa Chen</div>
                    <div className="text-sm text-muted-foreground">Founder, Artisan Bakery</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="text-lg px-8">
                Join Our Happy Clients - Start Free
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section bg-background relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute w-80 h-80 rounded-full blur-3xl opacity-25"
              style={{
                background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, rgba(0, 240, 255, 0) 70%)',
                left: '24.65%',
                top: '34.65%',
                animation: 'float 12s ease-in-out infinite',
              }}
            />
            <div
              className="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(0, 240, 255, 0.05) 0%, rgba(0, 240, 255, 0) 70%)',
                left: '68.61%',
                top: '61.39%',
                animation: 'float 14s ease-in-out infinite reverse',
              }}
            />
          </div>

          <div className="container relative z-10">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Say <span>Hello</span></h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to start your next project? Contact us today and let's create something friendly together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-muted-foreground">
                  We're always looking for new friends and exciting projects. Whether you have a specific idea in mind or need help defining your web strategy, we're here to help with a smile.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Our office</h3>
                      <p className="text-muted-foreground">1 Blue Hill Plaza Ste. 1509-43, Pearl River, NY 10965</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Email Us</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:hello@friendlyweb.co" className="text-primary hover:underline">
                          hello@friendlyweb.co
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+18455406100" className="text-primary hover:underline">
                          (845) 540-6100
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MessageSquare className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Want to discuss things in depth?</h3>
                      <Button className="mt-2">Book a free 15-Minute Consultation</Button>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-8">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Us a Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
