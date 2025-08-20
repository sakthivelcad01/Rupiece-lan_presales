"use client";

import { useState, useTransition, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { findProgramAction } from "@/app/actions";
import { accountSizes } from "@/lib/data";
import type { FindProgramOutput } from "@/ai/flows/find-program-flow";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, Check, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type FindProgramInput } from "@/ai/flows/find-program-flow";

type QuizAnswers = {
  experience: "beginner" | "intermediate" | "advanced";
  risk: "low" | "medium" | "high";
  style: "day" | "swing" | "scalper";
};

const quizQuestions = [
  {
    id: "experience",
    question: "What is your trading experience?",
    options: {
        "Beginner (Just starting out)": "beginner",
        "Intermediate (Some experience)": "intermediate",
        "Advanced (Years of experience)": "advanced",
    },
  },
  {
    id: "risk",
    question: "What is your risk tolerance?",
    options: {
        "Low (Capital preservation is key)": "low",
        "Medium (Balanced risk/reward)": "medium",
        "High (Seeking maximum growth)": "high",
    },
  },
  {
    id: "style",
    question: "What is your primary trading style?",
    options: {
        "Day Trader (Multiple trades a day)": "day",
        "Swing Trader (Trades last days/weeks)": "swing",
        "Scalper (Very short-term trades)": "scalper",
    },
  },
];

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

export function ProgramQuizDialog({ children, onProgramSelect }: { children: ReactNode, onProgramSelect: (size: number) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [recommendation, setRecommendation] = useState<FindProgramOutput | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleAnswerChange = (questionId: keyof QuizAnswers, value: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };
  
  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    startTransition(async () => {
      const result = await findProgramAction(answers as FindProgramInput);
      if (result && !result.error) {
        setRecommendation(result);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error || "Could not get recommendations. Please try again.",
        });
      }
    });
  };
  
  const resetQuiz = () => {
    setStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  const handleSelectProgram = () => {
    if(recommendation?.recommendation) {
        onProgramSelect(recommendation.recommendation);
        setIsOpen(false);
        resetQuiz();
    }
  }

  const currentQuestion = quizQuestions[step];
  const isLastStep = step === quizQuestions.length - 1;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
        setIsOpen(open);
        if(!open) {
            resetQuiz();
        }
    }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        {!recommendation && !isPending ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">Find Your Perfect Program</DialogTitle>
              <DialogDescription className="text-center">Answer 3 simple questions to get your personalized recommendation.</DialogDescription>
            </DialogHeader>
            <div className="py-4">
                <Progress value={((step + 1) / quizQuestions.length) * 100} className="w-full mb-6" />
                <h3 className="font-semibold text-lg mb-4">{currentQuestion.question}</h3>
                <RadioGroup onValueChange={(value) => handleAnswerChange(currentQuestion.id as keyof QuizAnswers, value)} value={answers[currentQuestion.id as keyof QuizAnswers]}>
                    {Object.entries(currentQuestion.options).map(([label, value]) => (
                        <Label key={value} className="flex items-center space-x-3 p-4 rounded-md border hover:bg-accent cursor-pointer has-[input:checked]:bg-accent has-[input:checked]:border-primary">
                            <RadioGroupItem value={value} id={value} />
                            <span>{label}</span>
                        </Label>
                    ))}
                </RadioGroup>
            </div>
            <div className="flex justify-between">
                <Button variant="outline" onClick={handleBack} disabled={step === 0}>Back</Button>
                <Button onClick={handleNext} disabled={!answers[currentQuestion.id as keyof QuizAnswers]}>
                    {isLastStep ? <><Sparkles className="mr-2 h-4 w-4" /> Get Recommendation</> : 'Next'}
                </Button>
            </div>
          </>
        ) : isPending ? (
            <div className="flex flex-col items-center justify-center p-8 space-y-4">
                <Sparkles className="h-10 w-10 text-primary animate-pulse" />
                <p className="text-lg font-semibold">Analyzing your preferences...</p>
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-32" />
            </div>
        ) : recommendation ? (
          <div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">Your Program Recommendation</DialogTitle>
              <DialogDescription className="text-center">Based on your answers, here is the best account size for you.</DialogDescription>
            </DialogHeader>
            <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto p-1">
                <Card className="bg-accent border-primary">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-primary">
                            <Check className="h-6 w-6" /> {formatCurrency(recommendation.recommendation!)} Program
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{recommendation.reasoning}</p>
                    </CardContent>
                </Card>
            </div>
             <div className="mt-6 flex justify-between">
                <Button onClick={resetQuiz} variant="ghost">Start Over</Button>
                <Button onClick={handleSelectProgram}>Select Program</Button>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
