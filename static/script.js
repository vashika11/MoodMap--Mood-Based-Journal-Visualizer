document.getElementById('moodForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const date = document.getElementById('date').value;
  const mood = document.getElementById('mood').value;

  const dayDiv = document.createElement('div');
  dayDiv.className = `day ${mood}`;
  dayDiv.textContent = new Date(date).getDate();

  document.getElementById('calendar').appendChild(dayDiv);
});