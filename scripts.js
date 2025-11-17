/* scripts.js - small demo JS for UI interaction (no backend) */

function demoBook(){
  const dept = document.getElementById('dept');
  const date = document.getElementById('apptDate');
  if(!dept || !date) { alert('Demo: please use Appointment page.'); return; }
  if(dept.value === '' || date.value === '') { alert('Select department and date.'); return; }
  alert(`Demo: Appointment requested for ${dept.value} on ${date.value}. (Frontend only)`);
}

function loginDemo(){
  const e = document.getElementById('loginEmail').value;
  const p = document.getElementById('loginPass').value;
  // Very basic demo validation & lockout simulation
  let attempts = Number(localStorage.getItem('loginAttempts') || 0);
  if(attempts >= 5){
    alert('Your account is locked due to multiple invalid attempts (demo).');
    return;
  }
  if(e === 'demo@demo.com' && p === 'demo123'){
    localStorage.setItem('loginAttempts', '0');
    alert('Login successful (demo). You are logged in as demo user.');
    // redirect to index
    window.location.href = 'index.html';
  } else {
    attempts++;
    localStorage.setItem('loginAttempts', attempts.toString());
    alert(`Invalid credentials (demo). Attempts: ${attempts}/5`);
  }
}

// very simple search demo (home)
document.addEventListener('DOMContentLoaded', ()=>{
  const s = document.getElementById('searchInput');
  if(s){
    s.addEventListener('input', ()=>{
      const val = s.value.trim();
      const r = document.getElementById('searchResult');
      if(!val) { r.innerText = 'No results — demo only.'; return; }
      r.innerText = `Demo results for "${val}":\n• Patient: ${val} (ID: P-${Math.floor(Math.random()*9000)+1000})`;
    });
  }
});
