// Characters and their full descriptions (from your texts)
const characters = {
  renzo: {
    name: "Renzo",
    desc: `Sei una persona franca e impulsiva, guidata da un profondo senso di giustizia. Puoi essere pacifico e di buon carattere, ma di fronte all'ingiustizia o agli abusi, le tue emozioni prendono il sopravvento, a volte spingendoti verso reazioni audaci o addirittura avventate. Ti fidi del tuo istinto e preferisci l'azione diretta a schemi o manipolazioni. Le difficoltà della vita ti hanno insegnato cautela e astuzia, rendendoti più concreto e autonomo, ma il tuo cuore batte ancora con onestà e passione.`
},
lucia: {
    name: "Lucia",
    desc: `Sei dolce ma ferma nelle tue convinzioni. Timidezza o riservatezza non significano debolezza, in realtà, la tua forza interiore deriva dalla fede, dall’empatia e da un profondo senso di chiarezza morale. Credi che la gentilezza possa vincere la crudeltà e la tua presenza calma spesso conforta chi ti sta intorno. Rimani fedele ai tuoi valori anche quando è difficile, dimostrando che il vero coraggio può derivare dalla serenità e dalla convinzione, piuttosto che dalla forza o dalla rabbia.`
},
abbondio: {
    name: "Don Abbondio",
    desc: `Sei cauto e prudente, spesso preferendo la sicurezza al rischio. Rifletti prima di agire ed eviti conflitti inutili. Anche se a volte lottare con la paura o l’esitazione ti è difficile, la tua prudenza ti permette di affrontare saggiamente situazioni complicate. Valuti la pace e la stabilità, e utilizzi l’umorismo o la ragione per gestire la tensione. Nel profondo, desideri un mondo in cui le persone possano vivere tranquille senza bisogno di coraggio o pericoli.`
},
innominato: {
    name: "L’Innominato",
    desc: `Sei un’anima di contrasti, un tempo inquieta e tormentata, ora in cerca di scopo e pace. Hai conosciuto cosa significa affrontare il tuo lato oscuro e mettere tutto in discussione. La tua forza risiede nella trasformazione: sei capace di cambiamenti profondi e redenzione. Dietro il tuo aspetto serio o distante, c’è un nucleo morale forte e il desiderio di usare il tuo potere o influenza per qualcosa di significativo.`
},
cristoforo: {
    name: "Fra Cristoforo",
    desc: `Sei guidato dalla coscienza, dalla fede e da un forte senso del dovere. Appassionato e deciso, combatti per ciò che è giusto, anche a costo personale. Tuttavia, in te vive una profonda umiltà — conosci il peso dei tuoi errori passati e li trasformi in compassione e servizio. Parli con sincerità, agisci con coraggio, e la tua presenza spesso ispira gli altri a trovare forza e perdono.`
},
donrodrigo: {
    name: "Don Rodrigo",
    desc: `Sei ambizioso, orgoglioso e abituato a controllare tutto. Hai carisma e sicurezza, ma a volte il tuo orgoglio o desiderio di riconoscimento possono fuorviarti. Non ti piace essere messo in discussione e puoi diventare difensivo quando la tua autorità o immagine viene minacciata. Tuttavia, sotto l’arroganza esteriore, potrebbe nascondersi un senso di insicurezza, la paura di perdere potere o rispetto — che guida gran parte delle tue azioni.`
},
gertrude: {
    name: "Gertrude",
    desc: `Sei sensibile e complessa, spesso divisa tra ciò che desideri e ciò che gli altri si aspettano da te. Hai un ricco mondo interiore, ma puoi lottare con il senso di colpa, la pressione o la sensazione di essere intrappolata dalle circostanze. Desideri libertà e comprensione, e la tua storia è quella di imparare a perdonare te stessa e a trovare forza nella vulnerabilità. Vivi profondamente, a volte troppo, ma quella stessa profondità ti rende empatica e umana.`
},
agnese: {
    name: "Agnese",
    desc: `Sei pratica, intelligente e piena di buon senso. Affronti i problemi con rapidità e umorismo, trovando spesso soluzioni semplici quando gli altri esitano. Dietro il tuo spirito vivace si cela un forte istinto protettivo, specialmente verso chi ami. Non hai paura di dire la tua opinione, e il tuo calore e la tua arguzia fanno sì che gli altri si rivolgano naturalmente a te per consigli e supporto.`
}

};

// 10 casual/psychological questions
// Each option maps to a character key
const questions = [
  {
    q: "Quando qualcuno ti tratta ingiustamente, cosa senti di voler fare di solito?",
    a: [
        {t:"Reagire subito e affrontarlo", c:"renzo"},
        {t:"Pregare, restare calmo e paziente", c:"lucia"},
        {t:"Evitare guai e restare in disparte", c:"abbondio"},
        {t:"Pensare a un piano per dargli una lezione severa", c:"donrodrigo"}
    ]
},
{
    q: "Quando ti viene chiesto di aiutare qualcuno in pericolo morale, cosa fai più probabilmente?",
    a: [
        {t:"Intervenire anche se rischioso", c:"cristoforo"},
        {t:"Sentirti mosso e offrire conforto silenzioso", c:"lucia"},
        {t:"Preoccuparti delle conseguenze ed esitare", c:"abbondio"},
        {t:"Considerare di usare la tua influenza per controllare la situazione", c:"innominato"}
    ]
},
{
    q: "Quale descrizione ti calza meglio socialmente?",
    a: [
        {t:"Un lavoratore umile e diretto", c:"renzo"},
        {t:"Una persona pratica e intelligente in famiglia", c:"agnese"},
        {t:"Una persona timorosa e prudente che evita i conflitti", c:"abbondio"},
        {t:"Una persona potente che spaventa gli altri", c:"donrodrigo"}
    ]
},
{
    q: "In un momento di crisi tendi a:",
    a: [
        {t:"Reagire con passione e agire", c:"renzo"},
        {t:"Affidarti alla fede e alla forza interiore", c:"lucia"},
        {t:"Mediare con calma e senso pratico", c:"agnese"},
        {t:"Trasformarti interiormente e cercare redenzione", c:"innominato"}
    ]
},
{
    q: "La gente dice che sei noto per:",
    a: [
        {t:"Forte carattere morale e sacrifici", c:"cristoforo"},
        {t:"Gentilezza e onestà ingenua", c:"lucia"},
        {t:"Praticità astuta e arguzia", c:"agnese"},
        {t:"Codarda evitazione del pericolo", c:"abbondio"}
    ]
},
{
    q: "Se dovessi descrivere il tuo temperamento, sarebbe:",
    a: [
        {t:"Impulsivo ma fondamentalmente buono", c:"renzo"},
        {t:"Freddo e imponente all’inizio, poi cambiato", c:"innominato"},
        {t:"Crudele o egoista quando guidato dal desiderio", c:"donrodrigo"},
        {t:"Silenziosamente virtuoso e risoluto", c:"lucia"}
    ]
},
{
    q: "Quando devi prendere una decisione difficile di solito:",
    a: [
        {t:"Ti affidi a regole, autorità o tradizione", c:"abbondio"},
        {t:"Agisci con praticità intelligente e adattabilità", c:"agnese"},
        {t:"Segui coscienza e coraggio morale", c:"cristoforo"},
        {t:"Pensi prima a come potere e forza aiutino", c:"donrodrigo"}
    ]
},
{
    q: "Quale ruolo interpreteresti più probabilmente in una comunità?",
    a: [
        {t:"Il protettore coraggioso", c:"renzo"},
        {t:"La guida spirituale o mentore", c:"cristoforo"},
        {t:"La figura silenziosa e sofferente giudicata da tutti", c:"gertrude"},
        {t:"Il genitore saggio e pragmatico", c:"agnese"}
    ]
},
{
    q: "Quando qualcuno ti sorprende con crudeltà, la tua prima reazione è:",
    a: [
        {t:"Rabbia e desiderio di vendetta", c:"renzo"},
        {t:"Cercare giustizia tramite appello morale", c:"cristoforo"},
        {t:"Sentirsi terrorizzato e ritirarsi", c:"abbondio"},
        {t:"Cercare di ingannarlo con un piano astuto", c:"agnese"}
    ]
},
{
    q: "I tuoi amici probabilmente ti loderebbero come:",
    a: [
        {t:"Intrepido e schietto", c:"renzo"},
        {t:"Fedele, leale e spiritualmente forte", c:"lucia"},
        {t:"Pratico, ingegnoso, sempre disponibile", c:"agnese"},
        {t:"Drammatico e tragico ma profondamente umano", c:"gertrude"}
    ]
}

];

const images = {
  renzo: "images/renzogrid.png",
  lucia: "images/luciagrid.png",
  abbondio: "images/donAbbondiogrid.png",
  innominato: "images/unnamedgrid.png",
  cristoforo: "images/fraCristoforogrid.png",
  donrodrigo: "images/donRodrigogrid.png",
  gertrude: "images/gertrudegrid.png",
  agnese: "images/agnesegrid.png"
};

/* ========= State ========= */
let index = 0;
let scores = {}; // counts per character
let timerInterval = null;
let timeLeft = 30;

/* Initialize score keys */
Object.keys(characters).forEach(k => scores[k]=0);

/* ========= Elements ========= */
const startEl = document.getElementById('start');
const startBtn = document.getElementById('startBtn');
const quizEl = document.getElementById('quiz');
const qIndexEl = document.getElementById('qIndex');
const progressBar = document.getElementById('progressBar');
const timerEl = document.getElementById('timer');
const questionText = document.getElementById('questionText');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('nextBtn');
const resultEl = document.getElementById('result');
const resultName = document.getElementById('resultName');
const resultDesc = document.getElementById('resultDesc');
const restartBtn = document.getElementById('restartBtn');

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', onNext);
restartBtn.addEventListener('click', resetQuiz);

/* ========= Functions ========= */

function startQuiz(){
  // reset
  index = 0;
  Object.keys(scores).forEach(k=>scores[k]=0);
  startEl.style.display = 'none';
  resultEl.classList.remove('active');
  quizEl.classList.add('active');
  quizEl.setAttribute('aria-hidden','false');
  showQuestion();
}

function showQuestion(){
  clearInterval(timerInterval);
  timeLeft = 30;
  updateTimerDisplay();
  startTimer();

  const q = questions[index];
  qIndexEl.textContent = index+1;
  // progress percent
  const pct = ((index)/questions.length)*100;
  progressBar.style.width = pct + '%';

  questionText.textContent = q.q;
  answersEl.innerHTML = '';
  // create options
  const letters = ['A','B','C','D'];
  q.a.forEach((opt,i)=>{
    const div = document.createElement('div');
    div.className = 'option';
    div.tabIndex = 0;
    div.setAttribute('role','button');
    div.dataset.choice = i;
    div.dataset.char = opt.c;
    div.innerHTML = `<div class="letter">${letters[i]}</div><div class="label">${opt.t}</div>`;
    // click handler
    div.addEventListener('click', onSelect);
    div.addEventListener('keydown', (ev)=>{ if(ev.key==='Enter' || ev.key===' ') onSelect.call(div, ev); });
    answersEl.appendChild(div);
  });
  // disable next until selection
  nextBtn.disabled = true;
  nextBtn.style.opacity = 0.9;
}

function onSelect(ev){
  const picked = ev.currentTarget || this;
  // mark selected visually
  const opts = answersEl.querySelectorAll('.option');
  opts.forEach(o=>o.classList.remove('selected'));
  picked.classList.add('selected');
  // enable next
  nextBtn.disabled = false;
  nextBtn.style.opacity = 1;
  // optional: immediately count and proceed? we wait for Next
}

function onNext(){
  // record answer
  const sel = answersEl.querySelector('.option.selected');
  if(!sel){
    // if no selection, ignore (shouldn't happen because next disabled)
    return;
  }
  const charKey = sel.dataset.char;
  if(charKey && scores.hasOwnProperty(charKey)){
    scores[charKey] += 1;
  }
  // move forward
  index++;
  if(index < questions.length){
    showQuestion();
  } else {
    finishQuiz();
  }
}

function startTimer(){
  clearInterval(timerInterval);
  timerInterval = setInterval(()=>{
    timeLeft--;
    updateTimerDisplay();
    if(timeLeft <= 0){
      clearInterval(timerInterval);
      // if user didn't answer in time, move on without adding score
      // but allow a short flash of disabled state
      // auto-advance after 800ms
      nextBtn.disabled = false;
      setTimeout(()=> onNext(), 800);
    }
  }, 1000);
}

function updateTimerDisplay(){
  const mm = Math.floor(timeLeft/60).toString().padStart(2,'0');
  const ss = (timeLeft%60).toString().padStart(2,'0');
  timerEl.textContent = `${mm}:${ss}`;
  // visually show small shake when low (optional)
  if(timeLeft<=10){
    timerEl.style.color = 'var(--accent)';
  } else {
    timerEl.style.color = '';
  }
}

function finishQuiz(){
  clearInterval(timerInterval);
  quizEl.classList.remove('active');
  quizEl.setAttribute('aria-hidden','true');
  // choose highest score
  const entries = Object.entries(scores);
  entries.sort((a,b)=>b[1]-a[1]);
  const topScore = entries[0][1];
  // collect all with top score (tie)
  const topCandidates = entries.filter(e=>e[1]===topScore).map(e=>e[0]);
  // choose random among ties
  const chosenKey = topCandidates[Math.floor(Math.random()*topCandidates.length)];
  // show result
  const char = characters[chosenKey];
resultName.textContent = char.name;
resultDesc.innerHTML = `
  <img src="${images[chosenKey]}" alt="${char.name}" class="character-image">
  <p>${char.desc}</p>
`;
  resultEl.classList.add('active');
  resultEl.setAttribute('aria-hidden','false');
  // progress bar full
  progressBar.style.width = '100%';
}

function resetQuiz(){
  resultEl.classList.remove('active');
  startEl.style.display = 'block';
  quizEl.classList.remove('active');
  // reset scores
  Object.keys(scores).forEach(k=>scores[k]=0);
  progressBar.style.width = '0%';
  qIndexEl.textContent = '1';
  timerEl.textContent = '00:30';
}

/* accessibility: allow start with Enter */
startBtn.addEventListener('keydown', (e)=>{ if(e.key==='Enter') startQuiz(); });
restartBtn.addEventListener('keydown', (e)=>{ if(e.key==='Enter') resetQuiz(); });