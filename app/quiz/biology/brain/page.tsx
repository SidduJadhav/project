'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useUserProgress } from '@/lib/user-progress'
import quizData from '@/data/biology-brain-quiz.json'

export default function BrainQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const router = useRouter()
  const { addCompletedQuiz, updateTopicProgress } = useUserProgress()

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData.questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion + 1 < quizData.questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResults(true)
      const percentageScore = (score / quizData.questions.length) * 100
      addCompletedQuiz('Brain Quiz')
      updateTopicProgress('Brain', percentageScore)
    }
  }

  const handleRetry = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResults(false)
  }

  const handleBackToTopics = () => {
    router.push('/dashboard')
  }

  if (showResults) {
    return (
      <Card className="w-full max-w-2xl mx-auto mt-8">
        <CardHeader>
          <CardTitle>Quiz Results</CardTitle>
          <CardDescription>You've completed the {quizData.topic} quiz!</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold mb-4">Your score: {score} out of {quizData.questions.length}</p>
          <p className="text-lg">
            Percentage: {((score / quizData.questions.length) * 100).toFixed(2)}%
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleRetry}>Retry Quiz</Button>
          <Button onClick={handleBackToTopics}>Back to Dashboard</Button>
        </CardFooter>
      </Card>
    )
  }

  const question = quizData.questions[currentQuestion]

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>{quizData.topic} Quiz</CardTitle>
        <CardDescription>Question {currentQuestion + 1} of {quizData.questions.length}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-semibold mb-4">{question.question}</p>
        <RadioGroup onValueChange={(value) => handleAnswerSelect(parseInt(value))}>
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={index.toString()} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleNextQuestion} 
          disabled={selectedAnswer === null}
        >
          {currentQuestion + 1 === quizData.questions.length ? 'Finish' : 'Next'}
        </Button>
      </CardFooter>
    </Card>
  )
}

