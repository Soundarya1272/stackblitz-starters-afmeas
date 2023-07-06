function compareStudents(student1, student2) {
  //  Sort by total marks
  if (student1.totalMarks > student2.totalMarks) {
    return -1;
  } else if (student1.totalMarks < student2.totalMarks) {
    return 1;
  }

  // Sort by biology marks
  if (student1.biologyMarks > student2.biologyMarks) {
    return -1;
  } else if (student1.biologyMarks < student2.biologyMarks) {
    return 1;
  }

  // Sort by date of birth
  const dateOfBirth1 = new Date(student1.dateOfBirth);
  const dateOfBirth2 = new Date(student2.dateOfBirth);
  if (dateOfBirth1 > dateOfBirth2) {
    return 1;
  } else if (dateOfBirth1 < dateOfBirth2) {
    return -1;
  }

  // Students have the same total marks, biology marks, and date of birth
  return 0;
}

// Test data
const students = [
  {
    name: 'John',
    chemistryMarks: 85,
    biologyMarks: 95,
    dateOfBirth: '02-05-2000',
  },
  {
    name: 'Alice',
    chemistryMarks: 85,
    biologyMarks: 95,
    dateOfBirth: '05-10-2001',
  },
  // Add more student objects here
];

// Sort the array of student objects
students.sort(compareStudents);

// Print the sorted array
students.forEach((student) => console.log(student));
