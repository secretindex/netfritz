import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const books = [
  {
    id: 1,
    title: "Livro 1",
    subtitle: "167 Exercícios",
    level: "Crook",
    description: "Primeira parte do livro 416 Studies for Clarinet do Kroepsch. De C major até F# minor.",
    href: "/method/kroepsch/book-1"
  },
  {
    id: 2,
    title: "Livro 2",
    subtitle: "183 Exercícios",
    level: "Trickster",
    description: "Segunda parte do livro 416 Studies for Clarinet do Kroepsch. De Eb major até ...",
    href: "/method/kroepsch/book-2"
  },
  {
    id: 3,
    title: "Livro 3",
    subtitle: "40 Exercícios",
    level: "Hitman",
    description: "Estudos para todas as escalas. Os estudos seguem a forma I - VI - IV - V - I",
    href: "/method/kroepsch/book-3"
  },
  {
    id: 4,
    title: "Livro 4",
    subtitle: "26 Exercícios",
    level: "Mafia Boss",
    description: "Os estudos mais exigentes projetados para o domínio profissional do clarinete.",
    href: "/method/kroepsch/book-4"
  },
  {
    id: 5,
    title: "Mini Kroepsch",
    subtitle: "138 Exercícios",
    level: "Crook",
    description: "Livro pequeno com etudes divertidos para estudantes de todos os níveis",
    href: "/method/kroepsch/book-5"
  }
];

export default function MethodPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
      <div className="flex flex-col items-center text-center mb-12 space-y-4">
        <Badge variant="outline" className="px-3 py-1 text-sm font-medium tracking-wider uppercase border-zinc-300 dark:border-zinc-700">
          Métodos para Clarinete
        </Badge>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Fritz Kroepsch
        </h1>
        <p className="text-md text-muted-foreground max-w-2xl">
          416 estudos diários progressivos para clarinete. Selecione um livro para começar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Card key={book.id} className="flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-2xl font-bold">{book.title}</CardTitle>
                <Badge variant={"outline"} className="ml-2">
                  {book.level}
                </Badge>
              </div>
              <CardDescription className="text-sm font-medium text-primary">
                {book.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent className="grow">
              <p className="text-muted-foreground text-sm">
                {book.description}
              </p>
            </CardContent>
            <CardFooter>
              <Link href={book.href} className="w-full">
                <Button className="w-full font-semibold group" variant={book.id === 1 ? "default" : "secondary"}>
                  Selecionar {book.title}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}