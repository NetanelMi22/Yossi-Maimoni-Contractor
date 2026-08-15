import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import heroImage from "./assets/hero-renovation.jpg";
import bathroomImage from "./assets/project-bathroom.jpg";
import homeImage from "./assets/project-home.jpg";
import kitchenImage from "./assets/project-kitchen.jpg";

const projects = [
  { image: kitchenImage, title: "מטבח מודרני", text: "שיפוץ ותכנון מחדש של מטבח בסגנון נקי ומדויק." },
  { image: bathroomImage, title: "חדר רחצה", text: "שדרוג מלא עם חומרים איכותיים וגימור מוקפד." },
  { image: homeImage, title: "שיפוץ הבית", text: "חידוש חלל המגורים והתאמה מדויקת לצרכי המשפחה." },
];

function App() {
  return (
    <div dir="rtl">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="יוסי מימוני">
          <span className="logo-mark">ימ</span>
          <span><strong>יוסי מימוני</strong><small>קבלן ושירותי שיפוצים</small></span>
        </a>
        <nav>
          <a href="#about">אודות</a>
          <a href="#services">שירותים</a>
          <a href="#projects">פרויקטים</a>
          <a href="#contact">צור קשר</a>
        </nav>
        <a className="header-cta" href="#contact">בואו נדבר <span>←</span></a>
      </header>

      <main id="top">
        <section className="hero">
          <img src={heroImage} alt="שיפוץ ועיצוב פנים" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="kicker">יוסי מימוני · קבלן ושיפוצים</p>
            <h1>בונים נכון.<br /><em>משפצים בדיוק.</em></h1>
            <p className="hero-copy">ביצוע מקצועי, גימור מוקפד ויחס אישי — מהרעיון הראשון ועד הפרט האחרון.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#contact">בואו נדבר על הפרויקט <span>←</span></a>
              <a className="button button-outline" href="#projects">לצפייה בפרויקטים</a>
            </div>
          </div>
          <div className="hero-number">01 <span>/</span> 04</div>
        </section>

        <section className="trust-strip">
          <div><span>01</span><strong>תכנון וביצוע מדויק</strong></div>
          <div><span>02</span><strong>חומרים וגימור איכותיים</strong></div>
          <div><span>03</span><strong>ליווי אישי לאורך הדרך</strong></div>
        </section>

        <section className="intro section" id="about">
          <div className="section-label">01 — מי אנחנו</div>
          <div>
            <h2>בית טוב מתחיל<br /><span>בעבודה טובה.</span></h2>
            <p>כל פרויקט מתחיל בהקשבה. אנחנו לוקחים את הרעיון שלכם והופכים אותו לחלל מדויק, איכותי ונעים לחיות בו.</p>
            <p>משיפוץ ממוקד ועד פרויקט בנייה שלם — עם עבודה נקייה, תקשורת ברורה ותשומת לב לכל פרט.</p>
            <a className="text-link" href="#contact">בואו להכיר <span>←</span></a>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <div><div className="section-label">02 — השירותים שלנו</div><h2>כל מה שהפרויקט<br />שלכם צריך.</h2></div>
            <p>שירות מקצועי מקצה לקצה, עם פתרונות שמתאימים באמת לבית ולתקציב שלכם.</p>
          </div>
          <div className="service-grid">
            {["שיפוצים כלליים", "מטבחים", "חדרי רחצה", "בנייה ושינויים", "עבודות גמר", "ליווי וניהול"].map((name, i) => (
              <article className="service-card" key={name}><span>0{i + 1}</span><h3>{name}</h3><p>תכנון, ביצוע וגימור ברמה גבוהה, עם דגש על הפרטים הקטנים.</p><b>↙</b></article>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading">
            <div><div className="section-label">03 — פרויקטים נבחרים</div><h2>עבודה שמדברת<br />בעד עצמה.</h2></div>
            <p>כמה מהעבודות האחרונות שלנו. כל אחת מהן נבנתה סביב הצרכים, הסגנון והחזון של הלקוח.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, i) => <article className={`project-card project-${i + 1}`} key={project.title}><div className="project-image"><img src={project.image} alt={project.title} /></div><div className="project-info"><span>0{i + 1} / פרויקט</span><h3>{project.title}</h3><p>{project.text}</p><a href="#contact">לפרטי הפרויקט ←</a></div></article>)}
          </div>
        </section>

        <section className="statement">
          <div className="statement-inner"><span className="section-label">04 — למה יוסי מימוני</span><h2>מקצועיות, שקיפות<br /><em>ויחס אישי.</em></h2><p>בלי קיצורי דרך. בלי הפתעות. פשוט עבודה טובה ותוצאה שאנחנו גאים בה.</p><a className="button button-light" href="#contact">בואו נתחיל <span>←</span></a></div>
        </section>

        <section className="contact section" id="contact">
          <div className="section-label">05 — צור קשר</div>
          <div className="contact-grid"><div><h2>יש לכם פרויקט<br /><span>בראש?</span></h2><p>ספרו לנו קצת עליו ונחזור אליכם לשיחה קצרה.</p></div><div className="contact-card"><p>רוצים להתחיל?</p><a href="tel:">התקשרו אלינו <span>←</span></a><a href="mailto:">שלחו הודעה במייל <span>←</span></a></div></div>
        </section>
      </main>

      <footer><div className="logo"><span className="logo-mark">ימ</span><span><strong>יוסי מימוני</strong><small>קבלן ושירותי שיפוצים</small></span></div><p>בונים נכון. משפצים בדיוק.</p><span>© {new Date().getFullYear()} כל הזכויות שמורות</span></footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
