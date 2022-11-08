import React, { useContext } from 'react'
import Page from '../../components/layout/Page'
import Title from '../../components/ui/Title'
import ListItem from '../../components/ui/ListItem'
import AchievmentItem from '../../components/ui/AchievmentItem'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { FaMedal, FaSmileBeam } from 'react-icons/fa'
import LangContext from '../../utils/store'

export default function About() {
  const { en } = useContext(LangContext)

  return (
    <Page title="About Us">
      <div className={`${en ? '' : 'rtl'} mt-24 bg-zinc-100`}>
        <main className="mt-16  ">
          <div className="section-height   px-4 py-2 sm:px-6 md:py-8 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <Title>{en ? 'About Us' : 'من نحن'}</Title>
              <div className="flex flex-col items-start justify-center ">
                <div>
                  <p className="mx-4  mb-6 w-5/6 leading-6 tracking-wider">
                    <span className="gradientText text-lg font-bold  lg:text-xl">
                      {en ? 'Kayan Developments' : 'كيان للتطوير العقاري'}
                    </span>{' '}
                    {en
                      ? 'is a construction company based in 5th Settlement that focuses heavily on building properties and concrete structures beside finishing works , supply of construction materials and Building Permits'
                      : 'هي شركة إنشاءات مقرها التجمع الخامس تركز بشكل كبير على بناء العقارات والمنشات الخرسانية في التجمع الخامس بجانب اعمال التشطيبات وتوريد مواد البناء و تراخيص المباني'}
                  </p>
                  <h3 className="mb-3  ml-4 w-5/6 text-lg tracking-wide underline underline-offset-4">
                    {en ? 'Our Goal' : 'هدفنا'}
                  </h3>
                  <p className="mx-4 mb-6  w-5/6 leading-6 tracking-wider">
                    {en
                      ? 'Our continual aim is to provide the best products and services to our customers as a leading construction company, while staying cost-effective. We continue to use the most efficient, current technology while adhering to the strictest safety initiatives.'
                      : 'هدفنا المستمر هو تقديم أفضل المنتجات والخدمات لعملائنا كشركة رائدة اعمال المقاولات ، مع الحفاظ على التكلفة. نواصل استخدام أحدث التقنيات وأكثرها كفاءة مع الالتزام بمبادرات السلامة الأكثر صرامة'}
                  </p>
                  <h3 className="mb-3  ml-4 w-5/6 text-lg tracking-wide underline underline-offset-4">
                    {en
                      ? 'COMMITTED TO PROVIDING THE BEST'
                      : 'ملتزمون بتقديم الأفضل'}
                  </h3>
                  <p className="mx-4  w-5/6 leading-6 tracking-wider">
                    {en
                      ? 'With years of industry experience as a specialist construction company along with a team of highly skilled and qualified personnel, you can rely on us to provide you with an exceptional array of tools, knowledge and advice to get the job done - no matter the scale of the project. We also understand the individual needs and requirements of our clients and even offer the most competitive prices.'
                      : 'مع سنوات من الخبرة في المجال كشركة متخصصة في اعمال المقاولات جنبًا إلى جنب مع فريق من الموظفين ذوي المهارات العالية والمؤهلين، يمكنك الاعتماد علينا لتزويدك بمجموعة استثنائية من الأدوات والمعرفة والمشورة لإنجاز المهمة - بغض النظر عن حجم المشروع. نتفهم أيضًا الاحتياجات والمتطلبات الفردية لعملائنا ونقوم بتقديم أكثر الأسعار تنافسية .'}
                  </p>
                  <p className="mx-4 mt-4 w-5/6 leading-8 tracking-wider">
                    <span className="text-lg font-bold ">
                      {en
                        ? 'We are committed to the creation of long lasting relationships :'
                        : 'نحن نؤمن بإنشاء علاقات طويلة الامد : '}
                    </span>{' '}
                    {en
                      ? 'With our customers, our staff and our suppliers. We respect all of them in our business and will never disadvantage them to secure short-term gain. We will keep the promises we make to our clients'
                      : 'مع عملائنا وموظفينا وموردينا. نحن نحترمهم جميعًا في أعمالنا ولن نؤذيهم أبدًا لتأمين مكاسب على المدى القصير. سنفي بالوعود التي نقطعها لعملائنا'}
                  </p>
                  <p className="mx-4 mt-4 w-5/6 leading-8 tracking-wider">
                    <span className="text-lg font-bold ">
                      {en
                        ? 'We are passionate about our work:'
                        : 'نحن شغوفون بعملنا:'}
                    </span>{' '}
                    {en
                      ? 'Passion drives our commitment to continuous improvement and excellence in delivery, which generates happy customers and healthy profits'
                      : 'يقود الشغف التزامنا بالتحسين المستمر و التميز في التسليم مما يولد عملاء سعداء وأرباح جيدة'}
                  </p>
                </div>
                <div className=" mx-4 mt-8 grid  items-center gap-y-4 md:grid-cols-2 md:gap-x-20">
                  <ListItem
                    text={
                      en
                        ? 'General construction of residential building'
                        : 'انشاء المباني السكنية'
                    }
                  />
                  <ListItem text={en ? 'Finishing works' : 'اعمال التشطيبات'} />
                  <ListItem
                    text={
                      en
                        ? 'Supply Of Construction Materials'
                        : 'توريد مواد البناء'
                    }
                  />
                  <ListItem
                    text={
                      en
                        ? 'General construction of Concrete buildings'
                        : 'انشاء المباني الخرسانية'
                    }
                  />
                  <ListItem text={en ? 'Building Permits' : 'تراخيص البناء'} />
                </div>
              </div>
              <div className="mx-4 mt-8  grid flex-1 flex-col justify-center gap-4 md:grid-cols-2">
                <AchievmentItem
                  icon={<BsFillBookmarkCheckFill fill="#d71d1d" size={36} />}
                  number="12 +"
                  text={en ? 'Years in Business' : 'سنوات في العمل'}
                />
                <AchievmentItem
                  icon={<FaMedal fill="#d71d1d" size={36} />}
                  number="1600 +"
                  text={en ? 'Project Finished' : 'عدد المشاريع المنجزة'}
                />
                <AchievmentItem
                  icon={<FaSmileBeam fill="#d71d1d" size={36} />}
                  number="210 +"
                  text={en ? 'Satisfied Client' : 'عملاء راضون'}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Page>
  )
}
