import { ContentPageLayout } from "@/components/content-page-layout"

export default function ReflectionPage() {
  return (
    <ContentPageLayout
      title="Personal Reflection"
      subtitle="Reflection"
      backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
    >
      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-foreground/80 text-lg leading-relaxed mb-8 italic font-serif">
          Through this research, I was able to become more acquainted with the intricate interactions that compose our modern society, as well as the tendency for many corporations to exploit vulnerabilities within human cognition to for their own economic benefit. 
        </p>

        <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Skillsets</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          While performing this research, I was able to learn essential skills, such as learning how to read published, academic research articles, annotating and citing them using NoodleTools, and compiling different articles into a single, cohesive argument. The biggest concept I learned throughout the research journey was the importance of addressing alternative perspectives. Finding and explaining opposing perspectives on a single topic can enhance the quality of a research paper significantly.
        </p>

        <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Key Insights</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Me most significant insight from this research was understanding the inherent conflict between dating app business models and user wellbeing. Companies profit from prolonged engagement, not from successful matches that lead users to delete the app. This misalignment of incentives helps explain why these platforms often leave users feeling more isolated despite their promise of connection.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          I was also struck by the importance of authenticity in online dating. The pressure to present a curated, idealized version of oneself fosters an attitude of inauthenticity that undermines the very connections these platforms claim to facilitate.
        </p>

        <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Moving Forward</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          To continue on this paper, I would like to further research dating apps by observing its existence within our community, Palo Alto. This is my planned project for AP Research next year: to observe the role of dating apps within Palo Alto and the greater Bay Area communities. 
        </p>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            Inhoo Chang<br />
            AP Seminar<br />
            February 2026
          </p>
        </div>
      </div>
    </ContentPageLayout>
  )
}
