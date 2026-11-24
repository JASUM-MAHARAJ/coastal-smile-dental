document.addEventListener('DOMContentLoaded', () => {
  // Set minimum selectable date to today on Contact page
  const dateInput = document.getElementById('preferredDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    dateInput.value = today;
  }

  // Handle Appointment Callback Request
  const appointmentForm = document.getElementById('appointmentForm');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('patientName').value;
      const treatment = document.getElementById('treatmentType').value;
      const date = document.getElementById('preferredDate').value;

      alert(`Thank you, ${name}! Your request for "${treatment}" on ${date} has been logged. Reception will call you shortly to confirm.`);
      appointmentForm.reset();
    });
  }
});