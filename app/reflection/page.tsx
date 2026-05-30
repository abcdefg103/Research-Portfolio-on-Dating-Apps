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
          This research journey revealed the profound tension between technological convenience and human connection. Understanding how dating apps exploit psychological vulnerabilities while simultaneously providing perceived benefits has deepened my awareness of the need for ethical design in technology that shapes our most intimate relationships.
        </p>

        <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">The Research Process</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          When I began this investigation, I approached the topic of dating apps with a mixture of curiosity and personal experience. Like many of my peers, I had witnessed the ubiquity of these platforms and their integration into modern social life. What I discovered through my research, however, was far more complex than I had anticipated.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          The statistics were startling: 60.5 million American users, 60% of adults experiencing ghosting, and the Surgeon General comparing the health impacts of loneliness to smoking 15 cigarettes daily. These numbers transformed an abstract topic into a public health crisis demanding attention.
        </p>

        <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Key Insights</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Perhaps the most significant insight from this research was understanding the inherent conflict between dating app business models and user wellbeing. Companies profit from prolonged engagement, not from successful matches that lead users to delete the app. This misalignment of incentives helps explain why these platforms often leave users feeling more isolated despite their promise of connection.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          I was also struck by the role of authenticity — or its absence — in online dating. The pressure to present a curated, idealized version of oneself creates a foundation of inauthenticity that undermines the very connections these platforms claim to facilitate.
        </p>

        <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Moving Forward</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          This research has convinced me that technology is not neutral — it shapes behavior in ways that can either enhance or diminish human flourishing. As we continue to integrate digital tools into our most personal spheres, we must demand designs that prioritize human wellbeing over engagement metrics.
        </p>
        <p className="text-foreground/80 leading-relaxed mb-6">
          The solutions proposed in this paper — daily limits, delayed photo reveals, and regulatory frameworks — represent a starting point. But ultimately, addressing the loneliness epidemic will require a broader cultural shift toward valuing authentic connection over convenient but hollow interactions.
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
