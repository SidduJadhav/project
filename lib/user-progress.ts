import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Topic = {
  name: string
  progress: number
}

type UserProgress = {
  completedQuizzes: string[]
  topics: Topic[]
  addCompletedQuiz: (quiz: string) => void
  updateTopicProgress: (topicName: string, progress: number) => void
}

export const useUserProgress = create<UserProgress>()(
  persist(
    (set) => ({
      completedQuizzes: [],
      topics: [
        { name: "Brain", progress: 0 },
        { name: "Heart", progress: 0 },
        { name: "Lungs", progress: 0 },
        { name: "Skeletal System", progress: 0 },
        { name: "Digestive System", progress: 0 },
        { name: "Excretory System", progress: 0 },
        { name: "Reproductive System", progress: 0 },
        { name: "Atoms", progress: 0 },
        { name: "Solar System", progress: 0 },
        { name: "Machines", progress: 0 },
        { name: "Structures", progress: 0 },
      ],
      addCompletedQuiz: (quiz) =>
        set((state) => ({
          completedQuizzes: [...state.completedQuizzes, quiz],
        })),
      updateTopicProgress: (topicName, progress) =>
        set((state) => ({
          topics: state.topics.map((topic) =>
            topic.name === topicName ? { ...topic, progress } : topic
          ),
        })),
    }),
    {
      name: 'user-progress',
    }
  )
)

