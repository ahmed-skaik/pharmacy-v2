import AhmedSkaik from "../../../assets/images/ahmed-skaik.jpg";
import AhmedYounis from "../../../assets/images/ahmed-younis.jpeg";

export default function FoundersSection() {
  return (
    <div className="about creators pt-5 pb-5" id="founders">
      <div className="container pt-5 pb-5">
        <div className="row align-items-start justify-content-between gap-5 gap-lg-0">
          <div className="col-lg-6">
            <div className="box text-center mt-5">
              <div className="box-wrap code">
                <img src={AhmedSkaik} alt="Ahmed" className="img-fluid" />
                <h3 className="mt-3 mb-2 mb-0">Ahmed J. Skaik</h3>
                <span className="mb-2 d-block">- Idea &#38; Coding -</span>
                <blockquote className="cutoff-text mb-4 text-start english">
                  During the summer holiday of the year 2022, Ahmed Younis and I
                  worked on this project as a team, I was the Developer of the
                  project, and Ahmed was the one who provided me with all the
                  data needed.
                  <br />
                  Our goal from this project is to make it easier for our mates
                  at the faculty to reach the available courses-related data, to
                  know more about the faculty and hopefully participate in
                  making the five years Pharmacy journey somehow more fun for
                  you.
                  <br />
                  We hope you mates, find the website helpful &#38; we hope we
                  have achieved what we were trying to achieve from this
                  project.
                  <br />
                  <br />
                  <span className="important">
                    * I want to mention that this is a non-profit website; we
                    don't earn a single dollar from it.
                  </span>
                </blockquote>
                <input
                  className="expand-btn"
                  type="checkbox"
                  aria-label="read more"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box text-center mt-5">
              <div className="box-wrap data">
                <img src={AhmedYounis} alt="Ahmed" className="img-fluid" />
                <h3 className="mt-3 mb-2 mb-0">Ahmed Y. Shaheen</h3>
                <span className="mb-2 d-block">- Data Provider -</span>
                <blockquote
                  className="cutoff-text mb-4 text-end arabic"
                  dir="rtl"
                >
                  الحمد لله على إحسانه، والشكر له على توفيقه وامتنانه، يا رب لك
                  الحمد حمدًا طيبًا كثيًرا مباركًا.
                  <br />
                  في هذا اليوم وبفضل الله نعلن لكم تدشين الموقع الصيدلاني الأول
                  من نوعه بما يخدم طلبة الكلية - جميع المستويات - بكل ما يحتاجه
                  طالب الكلية خلال فترة الدراسة من محاضرات، ملفات، مراجع،
                  ملخصات، خطط دراسية، نماذج، حول الكلية.
                  <br />
                  جهود حثيثة بُذلت من أجل إنجاح هذا المشروع تحت إشراف وتنفيذ
                  المبرمج الصيدلاني/ أحمد جمال سكيك وبمساعدة مُزود بيانات
                  الموقع/ أحمد يونس شاهين ( طلبة الكلية - المستوى الخامس ).
                  <br />
                  نسأل الله أن يكون هذا العمل خالصًا لوجهه الكريم وأن تعم
                  الفائدة بين جموع الطلبة.
                  <br />
                  نشكر طاقم الكلية لحسن تعاونهم من عميد وهيئة أكاديمية وإدارية،
                  ونشكر لكم جميعًا دعمكم الصادق.
                  <br />
                  احفظوها عنا عسى القلوب بها تبصر.
                  <br />
                  <a
                    href="https://www.youtube.com/watch?v=L46THylwkHk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    فيديو تعريفي بالموقع
                  </a>
                  .
                  <br />
                  <span
                    className="text-start d-block"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-delay="100"
                    title="Website Announcement Date"
                  >
                    Oct 27, 2022
                  </span>
                </blockquote>
                <input
                  className="expand-btn"
                  type="checkbox"
                  aria-label="read more"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
