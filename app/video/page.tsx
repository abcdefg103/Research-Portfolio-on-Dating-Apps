import { ContentPageLayout } from "@/components/content-page-layout"

export default function VideoPage() {
  return (
    <ContentPageLayout
      title="Video Presentation"
      subtitle="Video"
      backgroundImage="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1920&q=80"
    >
      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-foreground/80 text-lg leading-relaxed mb-8">
          A multimedia exploration of loneliness in the digital age, examining real stories from dating app users and expert perspectives on building authentic connections in an increasingly virtual world.
        </p>

        {/* Video Placeholder */}
        <div className="aspect-video bg-card/50 rounded-lg border border-border flex items-center justify-center mb-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-muted-foreground text-sm uppercase tracking-widest">Video Coming Soon</p>
          </div>
        </div>

        <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Video Overview</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          This video presentation accompanies the written research, providing a visual and auditory exploration of the themes discussed in the paper. Through interviews, data visualizations, and narrative storytelling, the video aims to make the research accessible to a broader audience.
        </p>

        <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Key Topics Covered</h2>
        <ul className="space-y-4 text-foreground/80">
          <li className="flex gap-3">
            <span className="text-primary font-serif">01.</span>
            <span>The rise of dating apps and their impact on American adults</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-serif">02.</span>
            <span>Personal testimonies from dating app users about their experiences with loneliness</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-serif">03.</span>
            <span>Expert analysis on the psychology of digital dating</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-serif">04.</span>
            <span>Corporate strategies that prioritize engagement over connection</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-serif">05.</span>
            <span>Proposed solutions for creating healthier online dating experiences</span>
          </li>
        </ul>
      </div>
    </ContentPageLayout>
  )
}
