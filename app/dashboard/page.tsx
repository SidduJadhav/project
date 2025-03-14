'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useUserProgress } from '@/lib/user-progress'

export default function Dashboard() {
  const { completedQuizzes, topics, addCompletedQuiz, updateTopicProgress } = useUserProgress()

  // This effect simulates updating the dashboard when the component mounts
  // In a real app, you'd update this when a quiz is actually completed
  useEffect(() => {
    if (completedQuizzes.length === 0) {
      addCompletedQuiz('Brain Quiz')
      updateTopicProgress('Brain', 100)
    }
  }, [addCompletedQuiz, updateTopicProgress, completedQuizzes.length])

  const categories = [
    { name: "Biology", topics: ["Brain", "Heart", "Lungs", "Skeletal System", "Digestive System", "Excretory System", "Reproductive System"] },
    { name: "Physics", topics: ["Atoms", "Solar System"] },
    { name: "Engineering", topics: ["Machines", "Structures"] },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Your Learning Dashboard</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Progress</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.name}>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
                <CardDescription>Overall progress</CardDescription>
              </CardHeader>
              <CardContent>
                <Progress 
                  value={
                    (category.topics.reduce((acc, topic) => 
                      acc + (topics.find(t => t.name === topic)?.progress || 0), 0
                    ) / category.topics.length)
                  } 
                  className="w-full" 
                />
                <p className="text-sm text-gray-500 mt-2">
                  {Math.round((category.topics.reduce((acc, topic) => 
                    acc + (topics.find(t => t.name === topic)?.progress || 0), 0
                  ) / category.topics.length))}% Complete
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Completed Quizzes</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {completedQuizzes.map((quiz, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{quiz}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Completed</p>
                <Button className="mt-2" asChild>
                  <Link href={`/quiz/${quiz.toLowerCase().replace(' ', '-')}`}>Retake Quiz</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Available Quizzes</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topics.filter(topic => !completedQuizzes.includes(`${topic.name} Quiz`)).map((topic, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{topic.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href={`/quiz/${topic.name.toLowerCase().replace(' ', '-')}`}>Start Quiz</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Recent Interactions</h2>
        <div className="space-y-4">
          {[...completedQuizzes.map(quiz => `Completed ${quiz}`), 'Explored DNA Structure in AR', 'Viewed Engineering Diagram'].slice(0, 3).map((interaction, index) => (
            <Card key={index}>
              <CardContent className="flex justify-between items-center py-4">
                <span>{interaction}</span>
                <span className="text-sm text-gray-500">Recently</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

