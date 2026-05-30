import { ContentPageLayout } from "@/components/content-page-layout"

export default function WorksCitedPage() {
  return (
    <ContentPageLayout
      title="Works Cited"
      subtitle="References"
      backgroundImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
    >
      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-foreground/80 text-lg leading-relaxed mb-8">
          A comprehensive list of academic sources, research studies, and expert analyses that informed this investigation into the relationship between online dating platforms and feelings of loneliness among American adults.
        </p>

        <div className="space-y-6 text-foreground/80">
          <div className="pl-8 -indent-8">
            Anderson, Monica, et al. &quot;The Virtues and Downsides of Online Dating.&quot; <em>Pew Research Center</em>, 6 Feb. 2020, www.pewresearch.org/internet/2020/02/06/the-virtues-and-downsides-of-online-dating/.
          </div>

          <div className="pl-8 -indent-8">
            Coduto, Katrina D., et al. &quot;Swiping for trouble: Problematic dating application use among psychosocially distraught individuals and the paths to negative outcomes.&quot; <em>Journal of Social and Personal Relationships</em>, vol. 37, no. 1, 2020, pp. 212-232.
          </div>

          <div className="pl-8 -indent-8">
            Holtzhausen, Natalie, et al. &quot;Swipe-based dating applications use and its association with mental health outcomes: a cross-sectional study.&quot; <em>BMC Psychology</em>, vol. 8, no. 22, 2020.
          </div>

          <div className="pl-8 -indent-8">
            LeFebvre, Leah E. &quot;Swiping me off my feet: Explicating relationship initiation on Tinder.&quot; <em>Journal of Social and Personal Relationships</em>, vol. 35, no. 9, 2018, pp. 1205-1229.
          </div>

          <div className="pl-8 -indent-8">
            Murthy, Vivek H. &quot;Our Epidemic of Loneliness and Isolation: The U.S. Surgeon General&apos;s Advisory on the Healing Effects of Social Connection and Community.&quot; <em>U.S. Department of Health and Human Services</em>, 2023.
          </div>

          <div className="pl-8 -indent-8">
            Orben, Amy, and Andrew K. Przybylski. &quot;The association between adolescent well-being and digital technology use.&quot; <em>Nature Human Behaviour</em>, vol. 3, no. 2, 2019, pp. 173-182.
          </div>

          <div className="pl-8 -indent-8">
            Sales, Nancy Jo. &quot;Tinder and the Dawn of the 'Dating Apocalypse'.&quot; <em>Vanity Fair</em>, Sept. 2015.
          </div>

          <div className="pl-8 -indent-8">
            Strubel, Jessica, and Trent A. Petrie. &quot;Love me Tinder: Body image and psychosocial functioning among men and women.&quot; <em>Body Image</em>, vol. 21, 2017, pp. 34-38.
          </div>

          <div className="pl-8 -indent-8">
            Timmermans, Elisabeth, and Elien De Caluwé. &quot;Development and validation of a Tinder Motives Scale (TMS).&quot; <em>Computers in Human Behavior</em>, vol. 70, 2017, pp. 341-350.
          </div>

          <div className="pl-8 -indent-8">
            Ward, Janelle. &quot;What are you doing on Tinder? Impression management on a matchmaking mobile app.&quot; <em>Information, Communication &amp; Society</em>, vol. 20, no. 11, 2017, pp. 1644-1659.
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            All sources formatted in MLA 9th Edition style.
          </p>
        </div>
      </div>
    </ContentPageLayout>
  )
}
