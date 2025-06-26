import {
  Play,
  Sparkles,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Shield,
  Flame,
  Code,
  Palette,
  Search,
  Globe,
  Zap,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Urgent Banner */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-2 text-center text-sm font-medium">
        🔥 LIMITED TIME: Only 3 spots left for January 2024 • Your competitors are going online NOW!
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  henceproof
                </span>
                <div className="text-xs text-green-600 font-medium">● AVAILABLE NOW</div>
                <div className="text-xs text-gray-500 font-medium">Enterprise-Grade Tech Stack</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 relative group font-medium"
              >
                Our Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#tech-stack"
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 relative group font-medium"
              >
                Tech Stack
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 relative group font-medium"
              >
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 px-6 py-3 rounded-full font-bold animate-pulse shadow-lg">
                <Phone className="w-4 h-4 mr-2" />
                CALL NOW
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-8 mb-8 flex-wrap">
            <div className="flex items-center text-yellow-500">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <span className="ml-2 text-gray-900 font-semibold">5.0 (127 reviews)</span>
            </div>
            <div className="text-blue-600 font-semibold">✓ Same Tech as Netflix</div>
            <div className="text-purple-600 font-semibold">✓ TikTok's Technology</div>
            <div className="text-green-600 font-semibold">✓ Spotify's Stack</div>
          </div>

          {/* Main Tagline */}
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full text-blue-800 font-bold text-lg animate-pulse">
              🚀 Built with the Same Technology as Netflix, TikTok & Spotify
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="block text-gray-900">BUILD YOUR</span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              ONLINE
            </span>
            <span className="block text-gray-900">EMPIRE</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            We use the <strong className="text-blue-600">same enterprise tech stack as Amazon, Netflix & Google</strong>{" "}
            to build websites that dominate markets.
            <br />
            <span className="text-red-600 font-semibold">
              Don't let competitors steal your customers while you wait!
            </span>
          </p>

          {/* Tech Stack Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl mb-2">⚛️</div>
              <div className="text-sm font-semibold text-gray-900">Next.js</div>
              <div className="text-xs text-gray-600">Used by Netflix</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl mb-2">🔷</div>
              <div className="text-sm font-semibold text-gray-900">TypeScript</div>
              <div className="text-xs text-gray-600">Used by Amazon</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl mb-2">🎨</div>
              <div className="text-sm font-semibold text-gray-900">Tailwind</div>
              <div className="text-xs text-gray-600">Used by GitHub</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="text-2xl mb-2">🔥</div>
              <div className="text-sm font-semibold text-gray-900">Firebase</div>
              <div className="text-xs text-gray-600">Used by Google</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 px-12 py-6 text-xl rounded-full group font-bold shadow-xl"
            >
              <Calendar className="mr-3 w-6 h-6" />
              Claim Your Spot NOW
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/80 text-gray-900 border-gray-300 hover:bg-gray-50 px-12 py-6 text-xl rounded-full group shadow-lg"
            >
              <Play className="mr-3 w-6 h-6" />
              See Our Tech in Action
            </Button>
          </div>

          {/* Urgency Indicator */}
          <div className="inline-flex items-center px-6 py-3 bg-red-100 border border-red-200 rounded-full text-red-700 text-sm font-medium animate-pulse">
            <Flame className="w-4 h-4 mr-2" />
            Your competitors are building their online presence RIGHT NOW • Don't get left behind!
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                COMPLETE DIGITAL SOLUTIONS
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From scratch or rebuild - we create your entire online presence using enterprise-grade technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Web Design & Development */}
            <Card className="bg-white border border-gray-200 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300 shadow-lg">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 relative p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-purple-800">Enterprise Development</div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Web Development</h3>
                <p className="text-gray-600 mb-6">
                  Custom websites built from scratch or complete rebuilds using the same tech stack as Fortune 500
                  companies.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Next.js & React Development</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">TypeScript & Modern JavaScript</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Custom HTML, CSS & Tailwind</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Git/GitHub Version Control</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Web Design */}
            <Card className="bg-white border border-gray-200 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300 shadow-lg">
              <div className="h-48 bg-gradient-to-br from-pink-100 to-orange-100 relative p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-pink-800">Premium Design</div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Web Design</h3>
                <p className="text-gray-600 mb-6">
                  Stunning, conversion-focused designs that make your brand stand out and convert visitors into
                  customers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Custom UI/UX Design</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Responsive Design (All Devices)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Brand Identity Integration</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Conversion Optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Web Applications */}
            <Card className="bg-white border border-gray-200 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300 shadow-lg">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 relative p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-orange-800">Advanced Applications</div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Web Applications</h3>
                <p className="text-gray-600 mb-6">
                  Complex web applications with advanced functionality, databases, and user management systems.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Supabase & Firebase Integration</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">User Authentication & Management</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Database Design & APIs</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">WordPress Development</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SEO & Online Presence */}
            <Card className="bg-white border border-gray-200 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300 shadow-lg">
              <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 relative p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-green-800">Market Domination</div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">SEO & Online Presence</h3>
                <p className="text-gray-600 mb-6">
                  Complete SEO strategy to dominate search results and establish your online presence before
                  competitors.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Technical SEO Optimization</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Content Strategy & Marketing</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Local SEO & Google My Business</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                    <span className="text-gray-700">Online Reputation Management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ENTERPRISE TECH STACK
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We use the exact same technologies that power Amazon, Netflix, Google, and other Fortune 500 companies.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 border border-blue-200 rounded-full text-blue-800 font-semibold">
              🏆 Same tech stack as the world's biggest companies
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
            {[
              { name: "Next.js", company: "Netflix", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
              { name: "React", company: "Facebook", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
              { name: "TypeScript", company: "Microsoft", icon: "🔷", color: "from-blue-600 to-indigo-600" },
              { name: "Tailwind CSS", company: "GitHub", icon: "🎨", color: "from-teal-500 to-green-500" },
              { name: "JavaScript", company: "Google", icon: "⚡", color: "from-yellow-500 to-orange-500" },
              { name: "HTML5", company: "W3C", icon: "🌐", color: "from-orange-500 to-red-500" },
              { name: "Supabase", company: "Startups", icon: "🚀", color: "from-green-500 to-emerald-500" },
              { name: "Firebase", company: "Google", icon: "🔥", color: "from-orange-600 to-red-600" },
              { name: "WordPress", company: "40% of Web", icon: "📝", color: "from-blue-600 to-purple-600" },
              { name: "Git/GitHub", company: "Microsoft", icon: "🔧", color: "from-gray-600 to-gray-800" },
              { name: "CSS3", company: "W3C", icon: "🎨", color: "from-pink-500 to-purple-500" },
              { name: "SEO Tools", company: "Google", icon: "📈", color: "from-green-600 to-blue-600" },
            ].map((tech, index) => (
              <Card
                key={tech.name}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-2xl`}
                >
                  {tech.icon}
                </div>
                <div className="text-sm font-bold text-gray-900 mb-1">{tech.name}</div>
                <div className="text-xs text-gray-500">Used by {tech.company}</div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Enterprise-Grade Technology Matters</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Lightning Fast</h4>
                  <p className="text-gray-600 text-sm">Same performance as Netflix and Amazon</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Enterprise Security</h4>
                  <p className="text-gray-600 text-sm">Bank-level security and reliability</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Infinite Scale</h4>
                  <p className="text-gray-600 text-sm">Grows with your business like Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Websites Section */}
      <section className="py-32 bg-white relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                SAME TECH AS
              </span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">THE WORLD'S TOP WEBSITES</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Your website will be built using the exact same Next.js technology that powers these billion-dollar
              platforms.
              <br />
              <span className="text-purple-600 font-semibold">
                If it's good enough for them, imagine what it can do for your business!
              </span>
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-full text-green-800 font-bold">
              🚀 Next.js Powers 40% of Fortune 500 Websites
            </div>
          </div>

          {/* Top Websites Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
            {[
              {
                name: "Netflix",
                users: "230M+ Users",
                revenue: "$31B Revenue",
                color: "from-red-500 to-red-600",
                icon: "🎬",
              },
              {
                name: "TikTok",
                users: "1B+ Users",
                revenue: "$11B Revenue",
                color: "from-pink-500 to-purple-600",
                icon: "🎵",
              },
              {
                name: "Twitch",
                users: "140M+ Users",
                revenue: "$2.6B Revenue",
                color: "from-purple-500 to-indigo-600",
                icon: "🎮",
              },
              {
                name: "Nike",
                users: "150M+ Customers",
                revenue: "$46B Revenue",
                color: "from-gray-800 to-black",
                icon: "👟",
              },
              {
                name: "Hulu",
                users: "46M+ Subscribers",
                revenue: "$3.7B Revenue",
                color: "from-green-500 to-teal-600",
                icon: "📺",
              },
              {
                name: "McDonald's",
                users: "69M+ Daily",
                revenue: "$23B Revenue",
                color: "from-yellow-500 to-red-500",
                icon: "🍟",
              },
              {
                name: "Spotify",
                users: "500M+ Users",
                revenue: "$13B Revenue",
                color: "from-green-400 to-green-600",
                icon: "🎧",
              },
              {
                name: "Uber",
                users: "130M+ Users",
                revenue: "$31B Revenue",
                color: "from-gray-900 to-black",
                icon: "🚗",
              },
              {
                name: "Airbnb",
                users: "150M+ Users",
                revenue: "$8.4B Revenue",
                color: "from-pink-500 to-red-500",
                icon: "🏠",
              },
              {
                name: "WhatsApp",
                users: "2B+ Users",
                revenue: "Meta Owned",
                color: "from-green-500 to-emerald-600",
                icon: "💬",
              },
            ].map((site, index) => (
              <Card
                key={site.name}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${site.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                ></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-3 text-center">{site.icon}</div>
                  <div className="text-lg font-black text-gray-900 mb-2 text-center">{site.name}</div>
                  <div className="text-xs text-gray-600 text-center mb-1">{site.users}</div>
                  <div className="text-xs text-green-600 font-semibold text-center">{site.revenue}</div>
                  <div className="mt-3 text-center">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                      Next.js
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center mb-16">
            <h3 className="text-3xl font-black mb-8">NEXT.JS BY THE NUMBERS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-black mb-2">5B+</div>
                <div className="text-sm opacity-90">Monthly Page Views</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">40%</div>
                <div className="text-sm opacity-90">Fortune 500 Use It</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">10x</div>
                <div className="text-sm opacity-90">Faster Than WordPress</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">99.9%</div>
                <div className="text-sm opacity-90">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-50 border-2 border-red-200 rounded-3xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😞</span>
                </div>
                <h3 className="text-2xl font-bold text-red-800 mb-4">Basic Website Technology</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Slow loading times (3-5 seconds)
                </li>
                <li className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Poor mobile experience
                </li>
                <li className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Limited scalability
                </li>
                <li className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Frequent crashes & downtime
                </li>
                <li className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Poor SEO performance
                </li>
                <li className="flex items-center text-red-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Outdated technology
                </li>
              </ul>
            </Card>

            <Card className="bg-green-50 border-2 border-green-200 rounded-3xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Next.js Enterprise Technology</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-green-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Lightning fast (0.5 seconds)
                </li>
                <li className="flex items-center text-green-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Perfect mobile experience
                </li>
                <li className="flex items-center text-green-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Infinite scalability
                </li>
                <li className="flex items-center text-green-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  99.9% uptime guarantee
                </li>
                <li className="flex items-center text-green-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Built-in SEO optimization
                </li>
                <li className="flex items-center text-green-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Cutting-edge technology
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                Why Settle for Less When You Can Have the Best?
              </h3>
              <p className="text-xl text-gray-700 mb-6">
                Netflix chose Next.js to serve 230 million users. TikTok chose it for 1 billion users.
                <br />
                <span className="text-purple-600 font-bold">Your business deserves the same technology!</span>
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-12 py-4 text-lg rounded-full shadow-lg"
              >
                Get Enterprise Technology Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                REAL RESULTS
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Websites built from scratch and complete rebuilds that transformed businesses and dominated markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Case Study 1 */}
            <Card className="bg-white border border-gray-200 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300 shadow-lg">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🚀</div>
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  +420% Revenue
                </div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Built from Scratch
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">TechStartup Pro</h3>
                <p className="text-gray-600 text-sm mb-4">SaaS Platform • Next.js + TypeScript</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Before:</span>
                    <span className="text-red-600 font-semibold">$50K/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">After:</span>
                    <span className="text-green-600 font-semibold">$260K/month</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="text-gray-900">3 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card className="bg-white border border-gray-200 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300 shadow-lg">
              <div className="h-48 bg-gradient-to-br from-pink-100 to-orange-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🛍️</div>
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  +680% Sales
                </div>
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Complete Rebuild
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Fashion Empire</h3>
                <p className="text-gray-600 text-sm mb-4">E-commerce • React + Supabase</p>
                <div classNameclassName="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Before:</span>
                    <span className="text-red-600 font-semibold">$25K/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">After:</span>
                    <span className="text-green-600 font-semibold">$195K/month</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="text-gray-900">2 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 3 */}
            <Card className="bg-white border border-gray-200 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300 shadow-lg">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-red-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">🏥</div>
                </div>
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  +350% Leads
                </div>
                <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  WordPress + SEO
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">MedCare Plus</h3>
                <p className="text-gray-600 text-sm mb-4">Healthcare • WordPress + Custom SEO</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Before:</span>
                    <span className="text-red-600 font-semibold">20 leads/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">After:</span>
                    <span className="text-green-600 font-semibold">90 leads/month</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="text-gray-900">6 weeks</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-4 text-lg rounded-full shadow-lg"
            >
              View Full Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                CLIENT SUCCESS
              </span>
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-500 fill-current" />
              ))}
              <span className="text-2xl font-bold text-gray-900 ml-4">4.9/5.0</span>
            </div>
            <p className="text-gray-600">Based on 127+ verified reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "They rebuilt our entire website from scratch using Next.js. Our revenue went from $80K to $340K per
                month in just 4 months. The enterprise-grade tech stack made all the difference."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">John Smith</div>
                  <div className="text-gray-600 text-sm">CEO, TechCorp</div>
                </div>
              </div>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "Finally got online before our competitors! They built our website using the same tech as Amazon. Now we
                dominate our local market and get 10x more leads."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  MJ
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Maria Johnson</div>
                  <div className="text-gray-600 text-sm">Founder, StartupX</div>
                </div>
              </div>
            </Card>

            <Card className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "The SEO work was incredible. We went from page 10 to #1 on Google in 3 months. Our online presence is
                now stronger than competitors who've been online for years."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  RW
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Robert Wilson</div>
                  <div className="text-gray-600 text-sm">CMO, MegaBrand</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-100/50 via-pink-100/50 to-orange-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="block text-gray-900">GET ONLINE</span>
            <span className="block bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 bg-clip-text text-transparent">
              BEFORE YOUR
            </span>
            <span className="block text-gray-900">COMPETITORS</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Every day you wait is another day your competitors steal your customers.
            <br />
            <span className="text-red-600 font-bold">Don't let them dominate YOUR market!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 px-12 py-6 text-xl rounded-full group font-bold shadow-xl"
            >
              <Calendar className="mr-3 w-6 h-6" />
              Claim Your Spot NOW
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-12 py-6 text-xl rounded-full group shadow-xl"
            >
              <Phone className="mr-3 w-6 h-6" />
              Call Now: (555) 123-EPIC
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center text-green-600">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold">Enterprise Tech Stack</span>
            </div>
            <div className="flex items-center justify-center text-green-600">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold">From Scratch or Rebuild</span>
            </div>
            <div className="flex items-center justify-center text-green-600">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold">Complete SEO Package</span>
            </div>
          </div>

          <div className="inline-flex items-center px-6 py-3 bg-red-100 border border-red-200 rounded-full text-red-700 text-sm font-medium animate-pulse">
            <Flame className="w-4 h-4 mr-2" />
            Only 3 spots left this month • Your competitors are booking theirs RIGHT NOW!
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    henceproof
                  </span>
                  <div className="text-xs text-green-600 font-medium">● AVAILABLE NOW</div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Enterprise-grade web development using the same tech stack as Fortune 500 companies.
              </p>
              <div className="flex items-center space-x-2 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-gray-900 font-semibold ml-2">4.9/5.0</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gray-900">Services</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-gray-900 transition-colors cursor-pointer">Web Development</li>
                <li className="hover:text-gray-900 transition-colors cursor-pointer">Web Design</li>
                <li className="hover:text-gray-900 transition-colors cursor-pointer">Web Applications</li>
                <li className="hover:text-gray-900 transition-colors cursor-pointer">SEO & Online Presence</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gray-900">Technologies</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-gray-900 transition-colors cursor-pointer">Next.js & React</li>
                <li className="hover:text-gray-900 transition-colors cursor-pointer">TypeScript & JavaScript</li>
                <li className="hover:text-gray-900 transition-colors cursor-pointer">Supabase & Firebase</li>
                <li className="hover:text-gray-900 transition-colors cursor-pointer">WordPress & SEO</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-gray-900">Contact</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-EPIC
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@henceproof.com
                </li>
                <li className="text-green-600 font-semibold">● Available 24/7</li>
                <li className="text-red-600 font-semibold animate-pulse">🔥 Only 3 spots left!</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>&copy; 2024 henceproof. All rights reserved. Built with enterprise-grade technology.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
