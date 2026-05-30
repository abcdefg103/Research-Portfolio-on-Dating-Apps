import { ContentPageLayout } from "@/components/content-page-layout"

export default function StakeholdersPage() {
  return (
    <ContentPageLayout
      title="Key Stakeholders"
      subtitle="Stakeholders"
      backgroundImage="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
    >
      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-foreground/80 text-lg leading-relaxed mb-8">
          The primary stakeholders affected by dating app loneliness include the 60.5 million American users, mental health professionals treating increased anxiety and depression, and dating app corporations whose business models depend on user retention. Secondary stakeholders include families and communities impacted by declining relationship formation rates, as well as legislators considering regulatory frameworks for digital platforms.
        </p>

        <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Primary Stakeholders</h2>
        
        <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Dating App Users</h3>
        <p className="text-foreground/80 leading-relaxed mb-6">
          With 60.5 million users in the United States alone, dating app users represent the largest and most directly affected stakeholder group. These individuals experience the psychological impacts of online dating firsthand, including the dopamine-driven reward cycles, the pressure to present curated versions of themselves, and the emotional toll of ghosting and rejection.
        </p>

        <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Mental Health Professionals</h3>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Therapists, counselors, and psychiatrists increasingly encounter patients whose mental health challenges are exacerbated by dating app usage. These professionals must develop new therapeutic approaches to address the unique psychological impacts of digital dating, including anxiety, depression, and feelings of inadequacy stemming from constant comparison and rejection.
        </p>

        <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Dating App Corporations</h3>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Companies like Match Group (Tinder, Hinge, OkCupid) and Bumble Inc. have built multi-billion dollar businesses on user engagement. Their business models often incentivize prolonged app usage rather than successful relationship formation, creating a fundamental tension between corporate profits and user wellbeing.
        </p>

        <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">Secondary Stakeholders</h2>
        
        <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Families and Communities</h3>
        <p className="text-foreground/80 leading-relaxed mb-6">
          The broader social fabric is affected as declining relationship formation rates impact family structures and community bonds. Parents witness their adult children struggling with loneliness, while communities experience reduced social cohesion as meaningful interpersonal connections become harder to form.
        </p>

        <h3 className="font-serif text-xl text-foreground mt-8 mb-4">Legislators and Regulators</h3>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Policymakers face the challenge of regulating digital platforms that impact mental health without stifling innovation. The US Surgeon General&apos;s recognition of loneliness as a public health crisis has brought increased attention to the role of social media and dating apps in contributing to this epidemic.
        </p>
      </div>
    </ContentPageLayout>
  )
}
