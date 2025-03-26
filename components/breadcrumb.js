import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

export default function Breadcrumb({ items = [] }) {
  return (
    <div className="container mx-auto px-4 py-4">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-gray-700 hover:text-[#FFD700] flex items-center">
              <Home className="w-4 h-4 mr-1" />
              <span>Home</span>
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={index} aria-current={index === items.length - 1 ? "page" : undefined}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {item.href ? (
                  <Link href={item.href} className="ml-1 text-gray-700 hover:text-[#FFD700] md:ml-2 capitalize">
                    {item.label}
                  </Link>
                ) : (
                  <span className="ml-1 text-[#FFD700] md:ml-2 capitalize">{item.label}</span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}

