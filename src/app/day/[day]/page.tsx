import Image from 'next/image'
import Link from 'next/link'

interface DayPageProps {
  params: {
    day: string
  }
}

export default function DayPage({ params }: DayPageProps) {
  const day = parseInt(params.day)

  return (
    <article className="max-w-4xl mx-auto space-y-8">
      {/* Navigation */}
      <nav className="flex justify-between items-center">
        <Link
          href="/"
          className="text-sm hover:underline"
        >
          ← Back to Overview
        </Link>
        <div className="flex gap-4">
          {day > 1 && (
            <Link
              href={`/day/${day - 1}`}
              className="text-sm hover:underline"
            >
              ← Previous Day
            </Link>
          )}
          {day < 7 && (
            <Link
              href={`/day/${day + 1}`}
              className="text-sm hover:underline"
            >
              Next Day →
            </Link>
          )}
        </div>
      </nav>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1>Day {day}: {getDayTitle(day)}</h1>
        {getDayContent(day)}
      </div>
    </article>
  )
}

function getDayTitle(day: number): string {
  switch (day) {
    case 1:
      return "Arrival in Kathmandu"
    case 2:
      return "First Steps in Nepal"
    case 3:
      return "Journey to the Village"
    case 4:
      return "Breaking Ground"
    case 5:
      return "Building Together"
    case 6:
      return "Community and Progress"
    case 7:
      return "Farewell and Reflection"
    default:
      return ""
  }
}

function getDayContent(day: number) {
  // This will be replaced with actual content from your markdown
  return (
    <div>
      <p>Content for Day {day} will be added here.</p>
    </div>
  )
}
