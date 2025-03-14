'use client'

import { Inter } from 'next/font/google'
import Link from "next/link"
import dynamic from 'next/dynamic'
import Image from 'next/image'
import ImageSlider from '@/components/ImageSlider'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Brain,
  Heart,
  TreesIcon as Lungs,
  Bone,
  StickerIcon as Stomach,
  BabyIcon as Kidney,
  Baby,
  Atom,
  Sun,
  Cog,
  CuboidIcon as Cube,
  Glasses,
  BookOpen,
  Zap,
  Dna,
  SwordIcon as Virus, // Replaced WormIcon with SwordIcon
  Leaf,
  Fish,
  Bird,
  Microscope,
  BugIcon as Bacteria,
  Thermometer,
  Magnet,
  CloudLightningIcon as Lightning,
  Waves,
  Rocket,
  Satellite,
  Beaker,
  FlaskRoundIcon as Flask,
  TestTube,
  MicroscopeIcon as Molecule,
  FlameIcon as Fire,
  Droplet,
  SnowflakeIcon as Crystal,
  Radiation,
  GridIcon as Cells,
} from 'lucide-react';

import { Typewriter } from 'react-simple-typewriter'
import bgImage from 'D:/projects/myapp/public/b2.jpg';

const inter = Inter({ subsets: ['latin'] })

// Dynamically import components with SSR disabled
const Globe = dynamic(() => import('@/components/Globe'), { ssr: false })
const HeartModel = dynamic(() => import('@/components/Heart'), { ssr: false })

export default function Home() {
  const categories = [
    { 
      name: "Biology", 
      description: "Test your knowledge of biological structures and processes", 
      icon: Brain,
      topics: [
        { name: "Brain", icon: Brain },
        { name: "Heart", icon: Heart },
        { name: "Lungs", icon: Lungs },
        { name: "Skeletal System", icon: Bone },
        { name: "Digestive System", icon: Stomach },
        { name: "Excretory System", icon: Kidney },
        { name: "Reproductive System", icon: Baby },
        { name: "Genetics", icon: Dna },
        { name: "Immunology", icon: Virus },
        { name: "Botany", icon: Leaf },
        { name: "Marine Biology", icon: Fish },
        { name: "Ornithology", icon: Bird },
        { name: "Microbiology", icon: Microscope },
        { name: "Bacteriology", icon: Bacteria },
        { name: "Cytology", icon: Cells },
        { name: "Ecology", icon: Lungs }
      ]
    },
    { 
      name: "Physics", 
      description: "Challenge yourself with physics concepts and phenomena", 
      icon: Atom,
      topics: [
        { name: "Atoms", icon: Atom },
        { name: "Solar System", icon: Sun },
        { name: "Thermodynamics", icon: Thermometer },
        { name: "Magnetism", icon: Magnet },
        { name: "Electricity", icon: Lightning },
        { name: "Wave Theory", icon: Waves },
        { name: "Mechanics", icon: Cog },
        { name: "Optics", icon: Glasses },
        { name: "Quantum Physics", icon: Atom },
        { name: "Relativity", icon: Rocket },
        { name: "Astrophysics", icon: Satellite },
        { name: "Particle Physics", icon: Atom },
        { name: "Fluid Dynamics", icon: Droplet },
        { name: "Acoustics", icon: Waves },
        { name: "Nuclear Physics", icon: Radiation },
        { name: "Cosmology", icon: Satellite }
      ]
    },
    { 
      name: "Chemistry", 
      description: "Explore the world of chemical reactions and properties", 
      icon: Beaker,
      topics: [
        { name: "Organic Chemistry", icon: Molecule },
        { name: "Inorganic Chemistry", icon: Crystal },
        { name: "Physical Chemistry", icon: Thermometer },
        { name: "Biochemistry", icon: Dna },
        { name: "Analytical Chemistry", icon: Flask },
        { name: "Electrochemistry", icon: Lightning },
        { name: "Thermochemistry", icon: Fire },
        { name: "Nuclear Chemistry", icon: Radiation },
        { name: "Polymer Chemistry", icon: Molecule },
        { name: "Environmental Chemistry", icon: Leaf },
        { name: "Medicinal Chemistry", icon: TestTube },
        { name: "Spectroscopy", icon: Waves },
        { name: "Quantum Chemistry", icon: Atom },
        { name: "Geochemistry", icon: Crystal },
        { name: "Photochemistry", icon: Sun },
        { name: "Nanotechnology", icon: Molecule }
      ]
    },
  ]

  const phrases = [
    "Explore interactive AR-based learning content",
    "Dive into immersive 3D models",
    "Challenge yourself with interactive 3D quizzes",
    "Transform the way you study complex topics",
    "Discover a new way to assess your understanding using chatbot",
  ]

  return (
    <div className={`space-y-12 ${inter.className}`}>
      <section 
        className="relative text-center py-16 rounded-lg shadow-lg overflow-hidden min-h-[500px] bg-cover bg-center" 
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-1/3 h-96 z-0">
          <Globe />
        </div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-1/3 h-96 z-0">
          <HeartModel />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6 text-white glow">Welcome to AR Learning</h1>
          <p className="text-2xl text-white mb-8 h-20">
            <Typewriter
              words={phrases}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>
          <Link href="/chatbot" passHref>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 hover:rotate-3"
            >
              <Cog className="mr-2 h-5 w-5" /> Launch AR View
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-4xl font-bold mb-8 text-center">About Our Website</h2>
        <Card className="overflow-hidden">
          <CardHeader className="gradient-bg text-white">
            <CardTitle className="text-2xl">Welcome to AR Learning Hub</CardTitle>
            <CardDescription className="text-white/80">The next generation of interactive learning!</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  Our platform combines cutting-edge Augmented Reality (AR) technology with engaging educational tools to provide an immersive and transformative learning experience.
                </p>
                <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Cube className="mr-2 h-5 w-5 text-primary" /> Interactive 3D Quizzes</li>
                  <li className="flex items-center"><BookOpen className="mr-2 h-5 w-5 text-primary" /> Comprehensive Topics</li>
                  <li className="flex items-center"><Glasses className="mr-2 h-5 w-5 text-primary" /> Engaging Visuals</li>
                </ul>
                <h3 className="text-xl font-semibold mt-4 mb-2">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><Zap className="mr-2 h-5 w-5 text-primary" /> Enhanced Learning</li>
                  <li className="flex items-center"><Cog className="mr-2 h-5 w-5 text-primary" /> User-Friendly Interface</li>
                  <li className="flex items-center"><Atom className="mr-2 h-5 w-5 text-primary" /> Innovative Approach</li>
                </ul>
              </div>
              <div className="space-y-4">
                <ImageSlider
                  images={[
                    { src: "/image.png", alt: "AR Learning Experience" },
                    { src: "/ai.png", alt: "Interactive 3D Models" },
                    { src: "/ar-quiz.png", alt: "AR Quiz" },
                    { src: "/chatbot.png", alt: "Interation using bots" }
                  ]}
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold">Start your journey today and discover a revolutionary way to learn with AR!</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-8 text-center">Quiz Topics</h2>
        <Tabs defaultValue="biology" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category.name} value={category.name.toLowerCase()} className="text-lg py-3">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category.name} value={category.name.toLowerCase()}>
              <Card className="overflow-hidden card-hover transform-gpu">
                <CardHeader className="gradient-bg text-white">
                  <CardTitle className="text-2xl">{category.name}</CardTitle>
                  <CardDescription className="text-white/80">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {category.topics.map((topic) => (
                      <Button key={topic.name} asChild className="h-32 text-lg py-6 transform transition-transform hover:scale-105 hover:rotate-1 flex flex-col items-center justify-center">
                        <Link href={`/quiz/${category.name.toLowerCase()}/${topic.name.toLowerCase().replace(' ', '-')}`}>
                          <topic.icon className="h-12 w-12 mb-2" />
                          {topic.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </div>
  )
}
