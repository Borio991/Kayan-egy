import { useContext } from 'react'
import Page from '../../components/layout/Page'
import Card from '../../components/ui/Card'
import Title from '../../components/ui/Title'
import LangContext from '../../utils/store'

export default function Services() {
  const { en } = useContext(LangContext)

  return (
    <Page title="Services">
      <main className={`mt-24  text-white`}>
        <div className="section-height   px-4 py-2 sm:px-6 md:py-8 lg:px-8">
          <div className={`mx-auto max-w-7xl ${en ? '' : 'rtl'}`}>
            <Title>{en ? 'Our Services' : 'ما نقدمه من خدمات'}</Title>

            <div className="grid gap-y-6">
              <Card
                src="/images/services-page/construtions.png"
                title={
                  en
                    ? 'General construction of residential building'
                    : 'انشاء المباني السكنية'
                }
                // subTitle={
                //   en
                //     ? 'we offer a wide range of construction and building equipment rental services'
                //     : 'نحن نقدم مجموعة واسعة من خدمات تأجير معدات البناء والتشييد'
                // }
                // subTitle2={
                //   en
                //     ? 'including: Bobcat, flatbed, lowbed, Crane, telehanlder, Pickup trucks, highup truck, jcb backhoe, forklift, towerlight, man lift , scissor lift'
                //     : 'بما في ذلك: بوب كات ، رافعة مسطحة ، رافعة منخفضة  ، رافعه شوكية ، شاحنات صغيرة ، شاحنة عالية الجودة ، حفار  ، ، برج ، رافع ، رافعة مقصية'
                // }
                buttonText={en ? 'show more' : 'عرض المزيد'}
                href="/equipments"
              />
              <Card
                src="/images/services-page/finishing.jpg"
                title={en ? 'Finishing works' : 'اعمال التشطيبات'}
                // subTitle={
                //   en
                //     ? 'We are extremely committed to provide our customers with the suitable cranes for any project, in order to deliver an optimum performance and a superior customer experience'
                //     : 'نحن ملتزمون للغاية بتزويد عملائنا بالرافعات المناسبة لأي مشروع ، من أجل تقديم الأداء الأمثل وتجربة العملاء الفائقة'
                // }
                buttonText={en ? 'show more' : 'عرض المزيد'}
                href="/equipments"
              />
              <Card
                src="/images/services-page/materials.webp"
                title={
                  en ? 'Supply Of Construction Materials' : 'توريد مواد البناء'
                }
                // subTitle={
                //   en
                //     ? 'We are extremely committed to provide our customers with the suitable cranes for any project, in order to deliver an optimum performance and a superior customer experience'
                //     : 'نحن ملتزمون للغاية بتزويد عملائنا بالرافعات المناسبة لأي مشروع ، من أجل تقديم الأداء الأمثل وتجربة العملاء الفائقة'
                // }
                buttonText={en ? 'show more' : 'عرض المزيد'}
                href="/equipments"
              />
              <Card
                src="/images/services-page/renovations.jpg"
                title={
                  en
                    ? 'General construction of Concrete buildings'
                    : 'انشاء المباني الخرسانية'
                }
                // subTitle={
                //   en
                //     ? 'Najm Al-mashriq has been building quality homes in Saudi Arabia for close to 3 years - benefitting both owners and investors.'
                //     : '"نجح نجم المشرق في بناء منازل عالية الجودة في المملكة العربية السعودية لما يقرب من 6 سنوات - مما يعود بالفائدة على المالكين والمستثمرين على حدٍ سواء".'
                // }
                buttonText={en ? 'show more' : 'عرض المزيد'}
              />
              <Card
                src="/images/services-page/papers.webp"
                title={en ? 'Building Permits' : 'تراخيص البناء'}
                // subTitle={
                //   en ? 'Supply Of Construction Materials' : 'توريد مواد البناء'
                // }
                buttonText={en ? 'show more' : 'عرض المزيد'}
              />
            </div>
          </div>
        </div>
      </main>
    </Page>
  )
}
