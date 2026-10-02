// ====== Config ======
const WEBHOOK_URL =
  "https://mohamed-hatem-22.app.n8n.cloud/webhook/exam-generator";
const SAVE_EXAM_URL =
  "https://mohamed-hatem-22.app.n8n.cloud/webhook/save-exam";
const GET_EXAM_URL = "https://mohamed-hatem-22.app.n8n.cloud/webhook/get-exam";
const SUBMIT_URL =
  "https://mohamed-hatem-22.app.n8n.cloud/webhook/submit-result";
const TIMEOUT_MS = 180000;

const T = {
  ar: {
    brand: "صانع الامتحانات",
    s1t: "أهلاً بيك",
    s1s: "اكتب اسمك وإيميلك وهنبعتلك الأسئلة كاملة بعد ما تخلص.",
    name: "الاسم",
    email: "البريد الإلكتروني",
    next: "التالي",
    s2t: "جهّز الامتحان",
    s2s: "ارفع المحتوى أو الصقه، واختار المادة ومستوى الصعوبة.",
    subject: "نوع المحتوى",
    count: "عدد الأسئلة",
    level: "صعوبة الامتحان",
    easy: "سهل",
    medium: "متوسط",
    hard: "صعب",
    content: "نص المحتوى",
    hint: "أو ارفع ملف TXT / PDF / Word بالأسفل.",
    file: "اختيار ملف",
    uploadTitle: "اسحب الملف هنا",
    uploadSub: "أو اضغط لاختيار ملف (TXT / PDF / DOCX)",
    generate: "أنشئ الأسئلة",
    sent: "الأسئلة جاهزة، وتم إرسالها لإيميلك",
    toggle: "إظهار/إخفاء الإجابات",
    again: "امتحان جديد",
    pick: "اختار نوع المحتوى",
    eName: "اكتب اسمك (حرفين على الأقل).",
    eEmail: "اكتب بريد إلكتروني صحيح.",
    eSub: "اختار نوع المحتوى.",
    eLvl: "اختار مستوى صعوبة.",
    eCont: "المحتوى قصير، اكتب أو ارفع 200 حرف على الأقل.",
    eFile: "الملف غير مدعوم أو لا يمكن قراءته. ارفع TXT أو PDF أو DOCX.",
    eBig: "الملف أكبر من 10MB.",
    ok: "تمام",
    errT: "حصلت مشكلة",
    errNet: "تعذر الوصول للخادم أو انتهى الوقت. جرّب تاني بعد شوية.",
    errBad: "الرد من الذكاء الاصطناعي مش مفهوم. جرّب تاني.",
    g1: "ابدأ باسمك وإيميلك. هنستخدمهم لإرسال الأسئلة.",
    g2: "الصق المحتوى أو ارفع ملف، واختار المادة والصعوبة، وبعدها اضغط «أنشئ الأسئلة». الأمر ممكن ياخد دقيقة.",
    g3: "راجع الأسئلة، انسخ لينك المشاركة للطلاب، أو نزّل الامتحان.",
    guide: "إرشاد",
    l1: "جاري التحميل...",
    l2: "الذكاء الاصطناعي بيكتب الأسئلة... استنى شوية",
    l3: "جاري تجهيز الامتحان...",
    lSave: "جاري إنشاء لينك المشاركة...",
    lLoad: "جاري تحميل الامتحان...",
    lSubmit: "جاري تصحيح الإجابات وإرسال النتيجة...",
    weak: "ضعيف",
    average: "متوسط",
    top: "متفوق",
    ans: "الإجابة",
    why: "التوضيح",
    examT: "امتحان",
    phName: "مثال: أحمد محمد",
    phEmail: "name@example.com",
    phContent: "الصق هنا نص الدرس أو المحتوى اللي عايز تعمل منه أسئلة...",
    dlPdf: "تحميل PDF",
    dlDoc: "تحميل Word",
    dlTxt: "تحميل TXT",
    shareTitle: "لينك مشاركة الطلاب",
    shareHint:
      "ابعت اللينك ده لأي طالب. هيفتح الامتحان، يكتب اسمه وإيميله، يحل، ويوصله النتيجة على الميل.",
    copyLink: "نسخ",
    createLink: "إنشاء لينك المشاركة",
    copied: "تم النسخ!",
    eShare: "تعذر إنشاء اللينك. تأكد من إعدادات الـ Webhook.",
    studentBadge: "امتحان",
    stWelcome: "مرحباً بك في الامتحان",
    stIntro: "اكتب اسمك وبريدك الإلكتروني للبدء. كل الحقول مطلوبة.",
    startExam: "ابدأ الامتحان",
    submitExam: "تسليم الإجابات",
    resultBadge: "النتيجة",
    resultTitle: "انتهى الامتحان",
    resultMailNote:
      "تم إرسال تقرير مفصّل بنتيجتك والأخطاء إلى بريدك الإلكتروني.",
    eAllRequired: "لازم تجاوب على كل الأسئلة قبل التسليم.",
    yourAns: "إجابتك",
    correctAns: "الإجابة الصحيحة",
    correct: "صحيح",
    wrong: "خطأ",
    scoreOf: "من",
    pctLabel: "النسبة",
    subs: [
      "علوم",
      "رياضيات",
      "فيزياء",
      "كيمياء",
      "أحياء",
      "لغة عربية",
      "لغة إنجليزية",
      "تاريخ",
      "جغرافيا",
      "برمجة وتكنولوجيا",
      "إدارة أعمال",
      "طب وصحة",
      "دراسات دينية",
      "فلسفة وعلم نفس",
      "أخرى",
    ],
  },
  en: {
    brand: "Exam Maker",
    s1t: "Welcome",
    s1s: "Enter your name and email. We'll send you the full question set when it's ready.",
    name: "Name",
    email: "Email",
    next: "Next",
    s2t: "Set up your exam",
    s2s: "Paste or upload your content, then pick the subject and difficulty.",
    subject: "Content type",
    count: "Number of questions",
    level: "Exam difficulty",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    content: "Content text",
    hint: "Or upload a TXT / PDF / Word file below.",
    file: "Choose file",
    uploadTitle: "Drag & drop your file here",
    uploadSub: "or click to browse (TXT / PDF / DOCX)",
    generate: "Generate questions",
    sent: "Your questions are ready and sent to your email",
    toggle: "Show/hide answers",
    again: "New exam",
    pick: "Choose a content type",
    eName: "Enter your name (2+ characters).",
    eEmail: "Enter a valid email address.",
    eSub: "Choose a content type.",
    eLvl: "Select a difficulty level.",
    eCont: "Content is too short. Enter or upload at least 200 characters.",
    eFile: "Unsupported or unreadable file. Upload TXT, PDF or DOCX.",
    eBig: "File is larger than 10MB.",
    ok: "Got it",
    errT: "Something went wrong",
    errNet: "Couldn't reach the server or it timed out. Try again shortly.",
    errBad: "The AI response was unreadable. Try again.",
    g1: "Start with your name and email. We use them to send you the questions.",
    g2: "Paste content or upload a file, pick subject and difficulty, then generate.",
    g3: "Review questions, copy the student share link, or download the exam.",
    guide: "Guide",
    l1: "Loading...",
    l2: "The AI is writing your questions... hang tight",
    l3: "Preparing your exam...",
    lSave: "Creating share link...",
    lLoad: "Loading exam...",
    lSubmit: "Grading and sending your result...",
    weak: "Weak",
    average: "Average",
    top: "Advanced",
    ans: "Answer",
    why: "Explanation",
    examT: "Exam",
    phName: "e.g. Ahmed Mohamed",
    phEmail: "name@example.com",
    phContent: "Paste the lesson text or content you want questions from...",
    dlPdf: "Download PDF",
    dlDoc: "Download Word",
    dlTxt: "Download TXT",
    shareTitle: "Student share link",
    shareHint:
      "Send this link to any student. They enter name & email, take the exam, and receive results by email.",
    copyLink: "Copy",
    createLink: "Create share link",
    copied: "Copied!",
    eShare: "Couldn't create the link. Check your webhook setup.",
    studentBadge: "Exam",
    stWelcome: "Welcome to the exam",
    stIntro: "Enter your name and email to start. All fields are required.",
    startExam: "Start exam",
    submitExam: "Submit answers",
    resultBadge: "Result",
    resultTitle: "Exam completed",
    resultMailNote:
      "A detailed report with your score and mistakes was sent to your email.",
    eAllRequired: "Please answer all questions before submitting.",
    yourAns: "Your answer",
    correctAns: "Correct answer",
    correct: "Correct",
    wrong: "Wrong",
    scoreOf: "of",
    pctLabel: "Score",
    subs: [
      "Science",
      "Math",
      "Physics",
      "Chemistry",
      "Biology",
      "Arabic",
      "English",
      "History",
      "Geography",
      "Programming & Tech",
      "Business",
      "Medicine & Health",
      "Religious Studies",
      "Philosophy & Psychology",
      "Other",
    ],
  },
};
const SUB_KEYS = [
  "science",
  "math",
  "physics",
  "chemistry",
  "biology",
  "arabic",
  "english",
  "history",
  "geography",
  "programming",
  "business",
  "medicine",
  "religion",
  "philosophy",
  "other",
];

const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
let lang = localStorage.getItem("lang") || "ar",
  exam = null,
  user = {},
  seen = {},
  fileText = "",
  examId = null,
  studentExam = null,
  studentUser = {};

const t = (k) => T[lang][k];
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );

const params = new URLSearchParams(location.search);
const isStudent = !!params.get("e");

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i]").forEach((e) => (e.textContent = t(e.dataset.i)));
  $("#lang").textContent = lang === "ar" ? "EN" : "عربي";
  if ($("#subject")) {
    const cur = $("#subject").value;
    $("#subject").innerHTML =
      `<option value="">${t("pick")}</option>` +
      SUB_KEYS.map(
        (k, i) => `<option value="${k}">${t("subs")[i]}</option>`,
      ).join("");
    $("#subject").value = cur;
  }
  document.title = t("brand");
  if ($("#name")) $("#name").placeholder = t("phName");
  if ($("#email")) $("#email").placeholder = t("phEmail");
  if ($("#content")) $("#content").placeholder = t("phContent");
  if ($("#st-name")) $("#st-name").placeholder = t("phName");
  if ($("#st-email")) $("#st-email").placeholder = t("phEmail");
  if (exam && !isStudent) renderExam();
}
function setTheme(m) {
  if (m) document.documentElement.dataset.theme = m;
  else document.documentElement.removeAttribute("data-theme");
}
$("#lang").onclick = () => {
  lang = lang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", lang);
  applyLang();
};
$("#theme").onclick = () => {
  const cur = document.documentElement.dataset.theme;
  const prefersDark = matchMedia("(prefers-color-scheme:dark)").matches;
  const isDark = cur === "dark" || (!cur && prefersDark);
  setTheme(isDark ? "light" : "dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
};
setTheme(localStorage.getItem("theme"));

function pop(title, msg) {
  return new Promise((r) => {
    $("#popT").textContent = title;
    $("#popM").textContent = msg;
    $("#popOk").textContent = t("ok");
    $("#pop").showModal();
    $("#popOk").onclick = () => {
      $("#pop").close();
      r();
    };
  });
}

function showStep(id) {
  $$(".step").forEach((s) => {
    s.hidden = s.id !== id;
    if (s.id === id) {
      s.style.animation = "none";
      s.offsetHeight;
      s.style.animation = "";
    }
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function go(id, msgKey = "l1", ms = 600) {
  $("#loadMsg").textContent = t(msgKey);
  $("#loader").hidden = false;
  return new Promise((r) =>
    setTimeout(async () => {
      showStep(id);
      $("#loader").hidden = true;
      if (!isStudent && !seen[id]) {
        seen[id] = 1;
        await pop(t("guide"), t({ s1: "g1", s2: "g2", s3: "g3" }[id]));
      }
      r();
    }, ms),
  );
}

function fail(id, msg) {
  const el = $("#e-" + id);
  if (el) el.textContent = msg;
  const input = $("#" + id);
  if (input) input.setAttribute("aria-invalid", "true");
  return false;
}
function clear() {
  $$(".error-msg").forEach((e) => (e.textContent = ""));
  $$("[aria-invalid]").forEach((e) => e.removeAttribute("aria-invalid"));
}
$$("input,select,textarea").forEach((i) =>
  i.addEventListener("input", () => {
    i.removeAttribute("aria-invalid");
    const e = $("#e-" + i.id);
    if (e) e.textContent = "";
  }),
);

// ===== Teacher flow =====
if (!isStudent) {
  $("#go1").onclick = () => {
    clear();
    let ok = true;
    const n = $("#name").value.trim(),
      m = $("#email").value.trim();
    if (n.length < 2) ok = fail("name", t("eName"));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m))
      ok = fail("email", t("eEmail")) && ok;
    if (ok) {
      user = { name: n, email: m };
      go("s2");
    }
  };

  const loadLib = (u, chk) =>
    new Promise((ok, no) => {
      if (chk()) return ok();
      const s = document.createElement("script");
      s.src = u;
      s.onload = ok;
      s.onerror = no;
      document.head.appendChild(s);
    });

  async function processFile(f) {
    clear();
    fileText = "";
    $("#fileName").textContent = "";
    if (!f) return;
    if (f.size > 10 * 1024 * 1024) {
      fail("file", t("eBig"));
      $("#file").value = "";
      return;
    }
    try {
      const ext = f.name.split(".").pop().toLowerCase();
      if (ext === "txt") fileText = await f.text();
      else if (ext === "docx") {
        await loadLib(
          "https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js",
          () => window.mammoth,
        );
        fileText = (
          await mammoth.extractRawText({ arrayBuffer: await f.arrayBuffer() })
        ).value;
      } else if (ext === "pdf") {
        await loadLib(
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",
          () => window.pdfjsLib,
        );
        pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        const pdf = await pdfjsLib.getDocument({ data: await f.arrayBuffer() })
          .promise;
        for (let p = 1; p <= pdf.numPages; p++) {
          const c = await (await pdf.getPage(p)).getTextContent();
          fileText += c.items.map((i) => i.str).join(" ") + "\n";
        }
      } else throw 0;
      if (fileText.trim().length < 20) throw 0;
      $("#content").value = fileText.trim();
      $("#fileName").textContent = f.name;
    } catch {
      fail("file", t("eFile"));
      $("#file").value = "";
      $("#fileName").textContent = "";
    }
  }
  $("#file").onchange = (e) => processFile(e.target.files[0]);
  const dropzone = $("#dropzone");
  ["dragenter", "dragover"].forEach((ev) =>
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add("dragover");
    }),
  );
  ["dragleave", "drop"].forEach((ev) =>
    dropzone.addEventListener(ev, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("dragover");
    }),
  );
  dropzone.addEventListener("drop", (e) => {
    const f = e.dataTransfer.files[0];
    if (f) processFile(f);
  });
  dropzone.addEventListener("click", (e) => {
    if (e.target.closest("#pickFile")) return;
    $("#file").click();
  });
  $("#pickFile").onclick = (e) => {
    e.stopPropagation();
    $("#file").click();
  };

  $("#go2").onclick = async () => {
    clear();
    let ok = true;
    const subject = $("#subject").value,
      levelInput = document.querySelector("#levels input:checked"),
      levels = levelInput ? [levelInput.value] : [],
      content = $("#content").value.trim();
    if (!subject) ok = fail("subject", t("eSub"));
    if (!levels.length) ok = fail("level", t("eLvl")) && ok;
    if (content.length < 200) ok = fail("content", t("eCont")) && ok;
    if (!ok) return;
    const body = {
      name: user.name,
      email: user.email,
      lang,
      subject,
      subjectLabel: t("subs")[SUB_KEYS.indexOf(subject)],
      levels,
      count: +$("#count").value,
      content: content.slice(0, 30000),
    };
    $("#loadMsg").textContent = t("l2");
    $("#loader").hidden = false;
    const ctl = new AbortController(),
      to = setTimeout(() => ctl.abort(), TIMEOUT_MS);
    try {
      const r = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: ctl.signal,
      });
      if (!r.ok) throw new Error("net");
      const d = await r.json();
      if (!d || !Array.isArray(d.questions) || !d.questions.length)
        throw new Error("bad");
      exam = d;
      examId = null;
      $("#shareUrl").value = "";
      $("#createLink").hidden = false;
      $("#loader").hidden = true;
      renderExam();
      await go("s3", "l3", 500);
      // auto-create share link
      await createShareLink();
    } catch (e) {
      $("#loader").hidden = true;
      await pop(
        t("errT"),
        e.message === "bad" || e instanceof SyntaxError
          ? t("errBad")
          : t("errNet"),
      );
    } finally {
      clearTimeout(to);
    }
  };

  async function createShareLink() {
    if (!exam) return;
    clear();
    $("#loadMsg").textContent = t("lSave");
    $("#loader").hidden = false;
    try {
      const r = await fetch(SAVE_EXAM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: exam.title || t("examT"),
          questions: exam.questions,
          lang,
          teacherName: user.name,
          teacherEmail: user.email,
        }),
      });
      if (!r.ok) throw new Error("net");
      const d = await r.json();
      if (!d || !d.id) throw new Error("bad");
      examId = d.id;
      const url = `${location.origin}${location.pathname}?e=${encodeURIComponent(examId)}`;
      $("#shareUrl").value = url;
      $("#createLink").hidden = true;
    } catch {
      $("#e-share").textContent = t("eShare");
      $("#createLink").hidden = false;
    } finally {
      $("#loader").hidden = true;
    }
  }
  $("#createLink").onclick = () => createShareLink();
  $("#copyLink").onclick = async () => {
    const v = $("#shareUrl").value;
    if (!v) return;
    try {
      await navigator.clipboard.writeText(v);
      const btn = $("#copyLink");
      const old = btn.textContent;
      btn.textContent = t("copied");
      setTimeout(() => (btn.textContent = old), 1500);
    } catch {
      $("#shareUrl").select();
      document.execCommand("copy");
    }
  };

  function renderExam() {
    const q = exam.questions;
    $("#exam").innerHTML =
      `<h1 style="font-size:1.4rem;margin-bottom:6px;font-weight:700">${esc(exam.title || t("examT"))}</h1>
       <p class="exam-meta">${esc(user.name || "")} · ${q.length}</p>` +
      q
        .map(
          (x, i) =>
            `<div class="q" style="animation-delay:${i * 0.04}s">
          <h3><span class="badge ${esc(x.level)}">${t(x.level) || ""}</span>${i + 1}. ${esc(x.q)}</h3>` +
            (x.options?.length
              ? x.options
                  .map(
                    (o, j) =>
                      `<div class="opt">${"ABCD"[j] || j + 1}. ${esc(o)}</div>`,
                  )
                  .join("")
              : "") +
            `<div class="key"><b>${t("ans")}:</b> ${esc(x.answer)}${x.explanation ? `<br><b>${t("why")}:</b> ${esc(x.explanation)}` : ""}</div></div>`,
        )
        .join("");
  }
  $("#toggleKey").onclick = () => $("#exam").classList.toggle("hide-key");
  $("#again").onclick = () => {
    exam = null;
    examId = null;
    $("#content").value = "";
    $("#file").value = "";
    $("#fileName").textContent = "";
    go("s2");
  };

  function buildExamDocumentHTML(forPrint) {
    const ar = lang === "ar";
    const dir = ar ? "rtl" : "ltr";
    const font = "'IBM Plex Sans Arabic', Tahoma, Arial, sans-serif";
    const title = esc(exam.title || t("examT"));
    const meta = esc(user.name || "") + " · " + exam.questions.length;
    const qs = exam.questions
      .map((x, i) => {
        const opts = (x.options || [])
          .map(
            (o, j) =>
              `<div style="color:#4a6280;padding:4px 0 4px 12px;font-size:14px;font-family:${font}">${"ABCD"[j] || j + 1}. ${esc(o)}</div>`,
          )
          .join("");
        const key = `<div style="margin-top:10px;padding:10px 14px;border-radius:10px;background:#ecfdf5;color:#0f766e;font-size:13.5px;border:1px solid #a7f3d0;font-family:${font}"><b>${esc(t("ans"))}:</b> ${esc(x.answer)}${x.explanation ? `<br><b>${esc(t("why"))}:</b> ${esc(x.explanation)}` : ""}</div>`;
        const levelColor =
          x.level === "weak"
            ? "#d97706"
            : x.level === "top"
              ? "#0284c7"
              : "#0d9488";
        return `<div style="padding:18px 0;border-top:1px solid #e2e8f0;font-family:${font}">
        <div style="font-weight:700;font-size:15px;color:#0f1c2e;margin-bottom:10px;line-height:1.55;font-family:${font}">
          <span style="display:inline-block;font-size:11px;font-weight:700;padding:2px 10px;border-radius:99px;background:${levelColor};color:#fff;margin-${ar ? "left" : "right"}:8px">${esc(t(x.level) || "")}</span>
          ${i + 1}. ${esc(x.q)}
        </div>
        ${opts}
        ${key}
      </div>`;
      })
      .join("");

    return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
<meta charset="utf-8"/>
<title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: ${font};
    background: #f0f6fb;
    color: #0f1c2e;
    line-height: 1.7;
    padding: 32px 16px;
  }
  .wrap {
    max-width: 720px;
    margin: 0 auto;
    background: #fff;
    border: 1px solid #d0dbe8;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(15,40,80,0.08);
  }
  .header {
    background: linear-gradient(140deg, #14b8a6, #0d9488);
    color: #042f2e;
    padding: 20px 28px;
    font-size: 18px;
    font-weight: 700;
    font-family: ${font};
  }
  .body { padding: 28px; font-family: ${font}; }
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 6px;
    color: #0f1c2e;
    font-family: ${font};
  }
  .meta { color: #4a6280; margin-bottom: 20px; font-size: 14px; }
  @media print {
    body { background: #fff; padding: 0; }
    .wrap { box-shadow: none; border: none; border-radius: 0; max-width: none; }
    .header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    span[style*="background"] { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }
</style>
</head>
<body>
  <div class="wrap">
    <div class="header">${ar ? "صانع الامتحانات" : "Exam Maker"}</div>
    <div class="body">
      <h1>${title}</h1>
      <p class="meta">${meta}</p>
      ${qs}
    </div>
  </div>
</body>
</html>`;
  }

  function save(blob, name) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  $$("[data-dl]").forEach(
    (b) =>
      (b.onclick = () => {
        if (!exam) return;
        const k = b.dataset.dl;
        const base =
          (exam.title || "exam")
            .replace(/[^\w\u0600-\u06FF\- ]+/g, "")
            .trim()
            .slice(0, 40) || "exam";
        const html = buildExamDocumentHTML();
        if (k === "doc") {
          save(
            new Blob(["\ufeff" + html], {
              type: "application/msword;charset=utf-8",
            }),
            base + ".doc",
          );
        } else if (k === "pdf") {
          // Open branded print window for Save as PDF
          const w = window.open("", "_blank");
          if (!w) {
            window.print();
            return;
          }
          w.document.open();
          w.document.write(buildExamDocumentHTML(true));
          w.document.close();
          w.focus();
          setTimeout(() => {
            w.print();
          }, 400);
        }
      }),
  );

  applyLang();
  go("s1", "l1", 400);
}

// ===== Student flow =====
if (isStudent) {
  const eid = params.get("e");

  async function loadStudentExam() {
    $("#loadMsg").textContent = t("lLoad");
    $("#loader").hidden = false;
    try {
      const r = await fetch(GET_EXAM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: eid }),
      });
      if (!r.ok) throw new Error("net");
      const d = await r.json();
      if (!d || !Array.isArray(d.questions) || !d.questions.length)
        throw new Error("bad");
      studentExam = d;
      if (d.lang) {
        lang = d.lang;
        localStorage.setItem("lang", lang);
      }
      applyLang();
      if (d.title) $("#stExamTitle").textContent = d.title;
      $("#loader").hidden = true;
      showStep("st-login");
    } catch {
      $("#loader").hidden = true;
      await pop(t("errT"), t("errNet"));
    }
  }

  $("#st-start").onclick = () => {
    clear();
    let ok = true;
    const n = $("#st-name").value.trim(),
      m = $("#st-email").value.trim();
    if (n.length < 2) ok = fail("st-name", t("eName"));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m))
      ok = fail("st-email", t("eEmail")) && ok;
    if (!ok) return;
    studentUser = { name: n, email: m };
    renderQuiz();
    showStep("st-quiz");
  };

  function renderQuiz() {
    const qs = studentExam.questions;
    $("#stProgressText").textContent = `0 / ${qs.length}`;
    $("#stProgress").style.width = "0%";
    $("#stQuestions").innerHTML = qs
      .map((x, i) => {
        const hasOpts = x.options && x.options.length;
        return `<div class="st-q" data-idx="${i}">
        <h3>${i + 1}. ${esc(x.q)}</h3>
        ${
          hasOpts
            ? `<div class="st-opts">${x.options
                .map(
                  (o, j) =>
                    `<label class="st-opt"><input type="radio" name="q${i}" value="${esc(o)}" required /><span>${"ABCD"[j] || j + 1}. ${esc(o)}</span></label>`,
                )
                .join("")}</div>`
            : `<input class="st-text-ans" type="text" name="q${i}" data-idx="${i}" required placeholder="..." />`
        }
      </div>`;
      })
      .join("");

    // progress on answer
    const updateProgress = () => {
      const total = qs.length;
      let answered = 0;
      qs.forEach((_, i) => {
        const radio = document.querySelector(`input[name="q${i}"]:checked`);
        const text = document.querySelector(`input.st-text-ans[name="q${i}"]`);
        if (radio || (text && text.value.trim())) answered++;
      });
      $("#stProgress").style.width = `${(answered / total) * 100}%`;
      $("#stProgressText").textContent = `${answered} / ${total}`;
    };
    $("#stQuestions").addEventListener("change", updateProgress);
    $("#stQuestions").addEventListener("input", updateProgress);
  }

  function normalize(s) {
    return String(s ?? "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function grade() {
    const qs = studentExam.questions;
    const results = [];
    let score = 0;
    qs.forEach((x, i) => {
      const radio = document.querySelector(`input[name="q${i}"]:checked`);
      const text = document.querySelector(`input.st-text-ans[name="q${i}"]`);
      const userAns = radio ? radio.value : text ? text.value.trim() : "";
      const correct = normalize(userAns) === normalize(x.answer);
      if (correct) score++;
      results.push({
        index: i,
        q: x.q,
        userAnswer: userAns,
        correctAnswer: x.answer,
        explanation: x.explanation || "",
        correct,
        level: x.level,
        options: x.options || [],
      });
    });
    return {
      score,
      total: qs.length,
      results,
      percent: Math.round((score / qs.length) * 100),
    };
  }

  $("#st-submit").onclick = async () => {
    clear();
    const qs = studentExam.questions;
    let all = true;
    qs.forEach((_, i) => {
      const radio = document.querySelector(`input[name="q${i}"]:checked`);
      const text = document.querySelector(`input.st-text-ans[name="q${i}"]`);
      const el = document.querySelector(`.st-q[data-idx="${i}"]`);
      const answered = radio || (text && text.value.trim());
      if (!answered) {
        all = false;
        el?.classList.add("unanswered");
      } else el?.classList.remove("unanswered");
    });
    if (!all) {
      $("#e-st-quiz").textContent = t("eAllRequired");
      const first = document.querySelector(".st-q.unanswered");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const graded = grade();
    $("#loadMsg").textContent = t("lSubmit");
    $("#loader").hidden = false;
    try {
      await fetch(SUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          examId: eid,
          examTitle: studentExam.title || t("examT"),
          name: studentUser.name,
          email: studentUser.email,
          lang,
          score: graded.score,
          total: graded.total,
          percent: graded.percent,
          results: graded.results,
        }),
      });
    } catch {
      /* still show result even if email fails */
    }
    $("#loader").hidden = true;
    showResult(graded);
  };

  function showResult(graded) {
    $("#scoreNum").textContent = graded.score;
    $("#scoreTotal").textContent = `/ ${graded.total}`;
    $("#scorePct").textContent = `${t("pctLabel")}: ${graded.percent}%`;
    $("#stResultSub").textContent =
      `${studentUser.name} · ${graded.score} ${t("scoreOf")} ${graded.total}`;
    $("#stReview").innerHTML = graded.results
      .map(
        (r) =>
          `<div class="q ${r.correct ? "review-ok" : "review-wrong"}">
        <span class="review-tag ${r.correct ? "ok" : "bad"}">${r.correct ? t("correct") : t("wrong")}</span>
        <h3>${r.index + 1}. ${esc(r.q)}</h3>
        <div class="opt"><b>${t("yourAns")}:</b> ${esc(r.userAnswer) || "—"}</div>
        ${!r.correct ? `<div class="opt"><b>${t("correctAns")}:</b> ${esc(r.correctAnswer)}</div>` : ""}
        ${r.explanation ? `<div class="key"><b>${t("why")}:</b> ${esc(r.explanation)}</div>` : ""}
      </div>`,
      )
      .join("");
    showStep("st-result");
  }

  applyLang();
  loadStudentExam();
}
