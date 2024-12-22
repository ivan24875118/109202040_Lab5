let grades = [];

document.getElementById('submitBtn').addEventListener('click', () => {
  const mathGrade = parseFloat(document.getElementById('mathGrade').value);
  const englishGrade = parseFloat(document.getElementById('englishGrade').value);

  if (isNaN(mathGrade) || isNaN(englishGrade)) {
    alert('Please enter valid numbers for both grades.');
    return;
  }

  // Add new row to grades array
  grades.push({ math: mathGrade, english: englishGrade });

  // Update table
  updateTable();
  updateAverages();

  // Clear input fields
  document.getElementById('mathGrade').value = '';
  document.getElementById('englishGrade').value = '';
});

function updateTable() {
  const tbody = document.querySelector('#gradesTable tbody');
  tbody.innerHTML = ''; // Clear previous rows

  grades.forEach((grade, index) => {
    const row = document.createElement('tr');
    const average = ((grade.math + grade.english) / 2).toFixed(2);

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${grade.math}</td>
      <td>${grade.english}</td>
      <td>${average}</td>
    `;
    tbody.appendChild(row);
  });
}

function updateAverages() {
  const totalMath = grades.reduce((sum, grade) => sum + grade.math, 0);
  const totalEnglish = grades.reduce((sum, grade) => sum + grade.english, 0);
  const overallSum = grades.reduce((sum, grade) => sum + (grade.math + grade.english) / 2, 0);

  const mathAvg = (totalMath / grades.length).toFixed(2);
  const englishAvg = (totalEnglish / grades.length).toFixed(2);
  const overallAvg = (overallSum / grades.length).toFixed(2);

  document.getElementById('mathAvg').textContent = mathAvg;
  document.getElementById('englishAvg').textContent = englishAvg;
  document.getElementById('overallAvg').textContent = overallAvg;
}
