import { ContentPageLayout } from "@/components/content-page-layout"

export default function StakeholdersPage() {
  return (
    <ContentPageLayout
      title="Key Stakeholders"
      subtitle="Stakeholders"
      backgroundImage="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?q=80&w=2070"
    >
      <div className="prose prose-invert prose-lg max-w-none">
        <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Primary Stakeholders</h2>
        
        <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Dating App Users</h3>
        <p className="text-foreground/80 leading-relaxed mb-6">
          With 60.5 million users in the United States alone, dating app users are the largest and most directly affected stakeholders. 
          These individuals experience the psychological impacts of online dating firsthand, including the dopamine-driven reward cycles,
          the pressure to present curated versions of themselves, and the emotional toll of ghosting and rejection, overall contributing 
          to their increased feelings of loneliness.
        </p>

        <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Mental Health Professionals</h3>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Therapists, counselors, and psychiatrists may increasingly encounter patients whose mental health challenges are exacerbated by dating 
          app usage. This may require them to discover new therapeutic methods to tackle this novel issue. 
        </p>

        <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Dating App Corporations</h3>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Companies like Match Group (Tinder, Hinge, OkCupid) and Bumble Inc. have built multi-billion dollar businesses on user engagement. Their 
          business models often incentivize prolonged app usage rather than successful relationship formation. As they often prioritize profits over 
          user well-being, they benefit through the perpetuation of this issue and have no incentives to resolve it, even if they are the only individuals
          capable to doing so.
        </p>

        <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Secondary Stakeholders</h2>
        
        <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Broader Communities</h3>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Damaged feelings of authenticity and weaker social connections may cause the destruction of broader communities, where social engagement within communal activities decreases.
        </p>

        <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Legislators and Regulators</h3>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Policymakers face the challenge of regulating digital platforms that impact mental health without stifling innovation. While legislation appears 
          to be the main method to resolve the issue of increased loneliness, legislators must resolve these issues without alienating their voter bases 
          or innovative companies.
        </p>
      </div>
    </ContentPageLayout>
  )
}
