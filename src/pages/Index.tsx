import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Linkedin } from "lucide-react";
import "@fontsource/urbanist/400.css";
import "@fontsource/urbanist/500.css";
import "@fontsource/urbanist/600.css";
import "@fontsource/urbanist/700.css";

const Index = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).Tally) {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background paper-texture">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md z-50 border-b border-border/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center">
            <div className="flex gap-6 md:gap-8 bg-primary/5 rounded-full px-6 py-2">
              <a 
                href="#about" 
                className="text-foreground hover:text-primary font-medium transition-colors text-sm md:text-base"
              >
                About
              </a>
              <a 
                href="#focus" 
                className="text-foreground hover:text-primary font-medium transition-colors text-sm md:text-base"
              >
                Focus
              </a>
              <a 
                href="#why" 
                className="text-foreground hover:text-primary font-medium transition-colors text-sm md:text-base"
              >
                Why Me
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary font-medium transition-colors text-sm md:text-base"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-40 pb-24 text-center fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Helping you cut through ambiguity to decide, act and build.
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
            I help leadership teams make confident decisions — whether to scale, pivot, or stop — and build the systems that remove ambiguity about ownership and priorities, so execution stays clear and aligned.
          </p>
          <div className="pt-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3 font-medium"
                asChild
              >
                <a href="mailto:k.a.mitchell588@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Katie
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-3 font-medium transition-all"
                asChild
              >
                <a href="https://www.linkedin.com/in/katie-mitchell-73b65523/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview/About Section */}
      <section id="about" className="container mx-auto px-4 py-16 mb-24 slide-up">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary/8 border-primary/25 rounded-3xl overflow-hidden shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    Mother of two, former small business owner, McKinsey consultant and Chief of Staff. The thread tying all of these together? It's curiosity, an underdog's determination, and a belief that I can fill any shoe if I take the time to deeply understand the problem at hand.
                  </p>
                  <p className="text-muted-foreground italic leading-relaxed">
                    I'm driven by curiosity and the confidence to ask tough questions--it's why my baked goods are excellent and I've garnered deep trust from executives.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <img 
                    src="/lovable-uploads/1991e5d6-84fc-4753-a1aa-1a6d9bfb62ca.png" 
                    alt="Katie Athaide Mitchell" 
                    className="w-48 h-48 rounded-full object-cover shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problems I Help Solve Section */}
      <section id="focus" className="container mx-auto px-4 py-16 mt-24 mb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Problems I Help Solve
          </h2>
          <div className="grid gap-12">
            {/* Problem 1 */}
            <Card className="bg-primary/10 border-primary/30 rounded-3xl slide-up shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="text-2xl">💡</div>
                  <div className="space-y-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      Your new startup needs a trusted resource to get the foundations up and running so you can spend more time in front of potential customers and building the product.
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      I step in as a fractional partner to set up operational systems from people ops, to legal to finance so your team scales efficiently.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problem 2 */}
            <Card className="bg-primary/10 border-primary/30 rounded-3xl slide-up shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="text-2xl">💡</div>
                  <div className="space-y-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      When you're exploring a new market, partnership, or strategic pivot but lack a crisp business case…
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      I build structured, board-ready business cases – combining market sizing, qualitative insights, and financial models to drive decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problem 3 */}
            <Card className="bg-primary/10 border-primary/30 rounded-3xl slide-up shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="text-2xl">💡</div>
                  <div className="space-y-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      When market conditions shift and your forecasts feel outdated or brittle…
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      I enhance your financial models to reflect multiple scenarios, isolate key drivers, and guide leadership conversations on risk and action.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problem 4 */}
            <Card className="bg-primary/10 border-primary/30 rounded-3xl slide-up shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="text-2xl">💡</div>
                  <div className="space-y-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      When your teams are executing in silos and momentum stalls…
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      I facilitate alignment across leadership, designing operating rhythms (OKRs, planning cycles) that unlock collaboration and accountability.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Problem 5 */}
            <Card className="bg-primary/10 border-primary/30 rounded-3xl slide-up shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="text-2xl">💡</div>
                  <div className="space-y-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      When you're fundraising or repositioning a product and need the story sharpened…
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      I structure your narrative, refine your financial storytelling, and support diligence preparation to inspire investor confidence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Leaders Hire Me Section */}
      <section id="why" className="container mx-auto px-4 py-16 mt-24 mb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Why Leaders Hire Me
          </h2>
          <Card className="bg-primary/8 border-primary/25 rounded-3xl slide-up shadow-lg">
            <CardContent className="p-8 md:p-12">
              <ul className="list-disc list-inside space-y-8 text-foreground">
                <li className="leading-relaxed">
                  <span className="font-bold">Ability to synthesize complexity fast.</span> Former McKinsey analyst, small business founder, and chief of staff in a proptech startup, I've exposed myself to fast-moving environments across diverse industries
                </li>
                <li className="leading-relaxed">
                  <span className="font-bold">Building trust by listening closely.</span> Knowing what matters most to leaders helps me distill what actions will most move the needle
                </li>
                <li className="leading-relaxed">
                  <span className="font-bold">Bias for action in ambiguity.</span> Executives trust me to self-direct in messy, high stakes environments
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
            Get In Touch
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-primary/8 border-primary/25 rounded-3xl shadow-lg slide-up">
              <CardContent className="p-8">
                <iframe
                  data-tally-src="https://tally.so/embed/wdM2ez?alignLeft=1&hideTitle=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="320"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Contact form"
                  className="w-full border-none rounded-3xl"
                />
                
                <div className="mt-8 text-center space-y-3">
                  <div className="flex justify-center items-center gap-2 text-primary text-lg">
                    <span className="text-xl">🔗</span>
                    <a href="https://www.linkedin.com/in/katie-mitchell-73b65523/" target="_blank" rel="noopener noreferrer" className="hover:text-primary/80 transition-colors font-medium">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex justify-center items-center gap-2 text-foreground/80">
                    <span className="text-xl">📍</span>
                    <span>Atlanta, GA</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 text-center border-t border-border/20">
        <p className="text-muted-foreground text-sm">
          © 2024 Katie Athaide Mitchell. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;