import { ContentPageLayout } from "@/components/content-page-layout"

export default function VideoPage() {
  return (
    <ContentPageLayout
      title="Video Presentation"
      subtitle="Video"
      backgroundImage="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1920&q=80"
    >
      <div className="prose prose-invert prose-lg max-w-none">
        <div className="aspect-video bg-card/50 rounded-lg border border-border flex items-center justify-center mb-8">
          <iframe src="https://drive.google.com/file/d/1zIDnqswSP3v75w9hzaup8cn5NMXDprFs/preview" width="100%" height="480"></iframe>
        </div>

        <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Video Overview</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          This video presentation accompanies the written research, providing a visual and auditory exploration of the themes discussed in the paper.
        </p>

      </div>
    </ContentPageLayout>
  )
}
