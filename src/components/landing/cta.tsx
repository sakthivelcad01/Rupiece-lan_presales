import { PreRegisterDialog } from "@/components/landing/pre-register-dialog";

export function Cta() {
  return (
    <section className="w-full bg-muted py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          Your trading future is just a click away. Get funded and start earning.
        </p>
        <PreRegisterDialog>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
                Pre-Register for Early Access
            </button>
        </PreRegisterDialog>
      </div>
    </section>
  );
}
