// ================= DATA =================
const jobs = [
  {id:1, companyName:'Mobile First Corp', position:'React Native Developer', location:'Remote', type:'Full-time', salary:'$130,000 - $175,000', description:'Build cross-platform mobile applications using React Native.work on products used by millions of users worldwide.', status:'all'},
  {id:2, companyName:'WebFlow Agency', position:'Web Designer & Developer', location:'Los Angeles, CA', type:'Part-time', salary:'$80,000 - $120,000', description:'Create stunning web experiences for high-profile clients.Must have portfolio and experience with modern web design trends.', status:'all'},
  {id:3, companyName:'DataViz Solutions', position:'Data Visualization Specialist', location:'Boston, MA', type:'Full-time', salary:'$125,000 - $165,000', description:'Transform complex data into compelling visualizations.Required skills: D3.js,React, and strong analytical thinking.', status:'all'},
  {id:4, companyName:'CloudFirst Inc', position:'Backend Developer', location:'Seattle, WA', type:'Full-time', salary:'$140,000 - $190,000', description:'Design and maintain scalable backend systems using Python and AWS.Work with modern DevOps practices and cloud infrastructure.', status:'all'},
  {id:5, companyName:'Innovation Labs', position:'UI/UX Engineer', location:'Austin, TX', type:'Full-time', salary:'$110,000 - $150,000', description:'Creat beautiful and functional user interfaces for our suite of products.Strong design skills and frontend development expertise required.', status:'all'},
  {id:6, companyName:'MegaCorp Solutions', position:'JavaScript Developer', location:'New York, NY', type:'Full-time', salary:'$130,000 - $170,000', description:'Build enterprise applications with JavaScript and modern frameworks.We offer competitive ,health insurance, and professional development opportunities.', status:'all'},
  {id:7, companyName:'StartupXYZ', position:'Full Stack Engineer', location:'Remote', type:'Full-time', salary:'$120,000 - $160,000', description:'Join our fast-growing startup and work on our core platform.Experience with Node.js and React required. Great benefits and equity package included.', status:'all'},
  {id:8, companyName:'TechCorp Industries', position:'Senior Frontend Developer', location:'San Francisco, CA', type:'Full-time', salary:'$130,000 - $175,000', description:'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript.You will work with a talented team on cutting-edge projects.', status:'all'}
];

let currentTab = 'all';

// ================= RENDER =================
function renderJobs() {
  const container = document.getElementById('jobsContainer');
  container.innerHTML = '';

  const filtered = jobs.filter(j => currentTab === 'all' ? true : j.status === currentTab);

  document.getElementById('tabCount').textContent = filtered.length + ' jobs';

 if (filtered.length === 0) {
  container.innerHTML = `
    <div class="card bg-base-100 shadow">
      <div class="card-body items-center text-center py-12">
        <img src="jobs.png" alt="No jobs" class="w-16 h-16 object-contain" />
        <h3 class="font-semibold">No jobs available</h3>
        <p class="text-sm text-gray-500">Check back soon for new job opportunities</p>
      </div>
    </div>`;
  updateDashboard();
  return;
}
  filtered.forEach(job => {
    const div = document.createElement('div');
    div.className = 'card bg-base-100 shadow';

    div.innerHTML = `
      <div class="card-body">

        <div class="flex justify-between items-start">
          <div>
            <h3 class="font-semibold text-lg">${job.companyName}</h3>
            <p class="text-sm text-gray-500">${job.position}</p>
            <p class="text-sm text-gray-400">${job.location} • ${job.type} • ${job.salary}</p>
          </div>
          <button class="btn btn-ghost btn-sm btn-delete" data-id="${job.id}">🗑</button>
        </div>

        <div>
          ${job.status === 'all'
            ?'<span class="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-200 text-slate-700 w-fit">NOT APPLIED</span>'
            : job.status === 'interview'
              ? '<span class="badge badge-success">INTERVIEW</span>'
              : '<span class="badge badge-error">REJECTED</span>'}
        </div>

        <p class="text-sm">${job.description}</p>

        <div class="flex gap-2 mt-2 flex-wrap">
          <button class="btn btn-outline btn-success btn-sm btn-interview" data-id="${job.id}">Interview</button>
          <button class="btn btn-outline btn-error btn-sm btn-reject" data-id="${job.id}">Rejected</button>
        </div>

      </div>`;

    container.appendChild(div);
  });

  updateDashboard();
}

// ================= DASHBOARD =================
function updateDashboard() {
  document.getElementById('totalCount').textContent = jobs.length;
  document.getElementById('interviewCount').textContent = jobs.filter(j=>j.status==='interview').length;
  document.getElementById('rejectedCount').textContent = jobs.filter(j=>j.status==='rejected').length;
}

// ================= TABS =================
document.querySelectorAll('.tab-btn').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentTab = tab.dataset.tab;
    renderJobs();
  });
});

// ================= ACTIONS (EVENT DELEGATION) =================
document.getElementById('jobsContainer').addEventListener('click', e => {
  const id = Number(e.target.dataset.id);
  const job = jobs.find(j => j.id === id);
  if (!job) return;

  if (e.target.classList.contains('btn-interview')) {
    job.status = job.status === 'interview' ? 'all' : 'interview';
  }

  if (e.target.classList.contains('btn-reject')) {
    job.status = job.status === 'rejected' ? 'all' : 'rejected';
  }

  if (e.target.classList.contains('btn-delete')) {
    const index = jobs.findIndex(j => j.id === id);
    jobs.splice(index, 1);
  }

  renderJobs();
});

// initial
renderJobs();

