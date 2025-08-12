
"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { findProgramAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const quizSchema = z.object({
  experience: z.enum(["beginner", "intermediate", "advanced"], { required_error: "Please select your experience level." }),
  risk: z.enum(["low", "medium", "high"], { required_error: "Please select your risk tolerance." }),
  style: z.enum(["day", "swing", "scalper"], { required_error: "Please select your trading style." }),
});

type QuizValues = z.infer<typeof quizSchema>;

const questions = [
  { name: "experience", title: "What is your trading experience?", options: [{ value: "beginner", label: "Beginner (Just starting out)" }, { value: "intermediate", label: "Intermediate (Some experience)" }, { value: "advanced", label: "Advanced (Years of experience)" }] },
  { name: "risk", title: "What is your risk tolerance?", options: [{ value: "low", label: "Low (Prefer smaller, consistent gains)" }, { value: "medium", label: "Medium (Balanced risk and reward)" }, { value: "high", label: "High (Aim for high returns, accept high risk)" }] },
  { name: "style", title: "What is your primary trading style?", options: [{ value: "day", label: "Day Trader (Intraday positions)" }, { value: "swing", label: "Swing Trader (Positions held for days/weeks)" }, { value: "scalper", label: "Scalper (High-frequency, small profits)" }] },
] as const;

interface ProgramQuizDialogProps {
  onProgramSelect: (programSize: number) => void;
}

export function ProgramQuizDialog({ onProgramSelect }: ProgramQuizDialogProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ recommendation: number | null; reasoning: string; } | null>(null);
  const { toast } = useToast();

  const form = useForm<QuizValues>({
    resolver: zodResolver(quizSchema),
  });

  const { control, trigger, getValues, handleSubmit } = form;

  const handleNext = async () => {
    const field = questions[step].name;
    const isValid = await trigger(field);
    if (isValid) {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        await onSubmit(getValues());
      }
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const onSubmit = async (data: QuizValues) => {
    setIsLoading(true);
    const response = await findProgramAction(data);
    setIsLoading(false);

    if (response.error || !response.recommendation) {
        toast({
            variant: "destructive",
            title: "Error",
            description: response.error || "Could not generate a recommendation.",
        });
    } else {
        setResult({
            recommendation: response.recommendation,
            reasoning: response.reasoning,
        });
        setStep(step + 1); // Move to results view
    }
  };
  
  const resetQuiz = () => {
    form.reset();
    setStep(0);
    setResult(null);
    setIsLoading(false);
  }

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setTimeout(() => {
        resetQuiz();
      }, 300);
    }
  };

  const handleGetStarted = () => {
    if (result?.recommendation) {
      onProgramSelect(result.recommendation);
      handleOpenChange(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const progress = (step + 1) / (questions.length + 1) * 100;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button>Find Your Program</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            {result ? "Your Recommendation" : "Find Your Perfect Program"}
          </DialogTitle>
           {!result && (
            <DialogDescription className="text-center">
            Answer {questions.length} simple questions to get your personalized recommendation.
          </DialogDescription>
          )}
        </DialogHeader>

        <Progress value={progress} className="h-2 mb-4" />

        {result ? (
            <div className="flex flex-col items-center text-center p-4">
                <Sparkles className="w-12 h-12 text-primary mb-4" />
                <p className="text-muted-foreground">Based on your answers, we recommend the:</p>
                <p className="text-4xl font-bold text-primary my-2">{formatCurrency(result.recommendation!)}</p>
                <p className="text-muted-foreground mt-4 mb-6">{result.reasoning}</p>
                <DialogFooter className="flex-col gap-2 w-full">
                    <Button size="lg" onClick={handleGetStarted}>
                        Get Started
                    </Button>
                    <Button size="lg" variant="outline" onClick={resetQuiz}>
                        Retake Quiz
                    </Button>
                </DialogFooter>
            </div>
        ) : isLoading ? (
            <div className="flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
                <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
                <p className="text-lg text-muted-foreground">Finding your perfect match...</p>
            </div>
        ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="min-h-[250px] space-y-6">
                <h3 className="font-semibold text-lg">{questions[step].title}</h3>
                <Controller
                  name={questions[step].name}
                  control={control}
                  render={({ field }) => (
                     <RadioGroup onValueChange={field.onChange} value={field.value} className="space-y-3">
                      {questions[step].options.map((option) => (
                          <Label key={option.value} htmlFor={option.value} className={cn("flex items-center space-x-3 rounded-md border p-4 cursor-pointer transition-all", field.value === option.value && "border-primary bg-primary/5")}>
                            <RadioGroupItem value={option.value} id={option.value} />
                            <span>{option.label}</span>
                          </Label>
                      ))}
                    </RadioGroup>
                  )}
                />
                 {form.formState.errors[questions[step].name] && <p className="text-sm font-medium text-destructive">{form.formState.errors[questions[step].name]?.message}</p>}
            </div>
            <DialogFooter className="mt-8">
              {step > 0 && (
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
              )}
              <Button type="button" onClick={handleNext} className="w-full md:w-auto ml-auto">
                {step === questions.length - 1 ? "Get Recommendation" : "Next"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
