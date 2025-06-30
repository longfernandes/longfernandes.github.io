import React, { useEffect, useState } from "react";
import { data } from "../data";

function calculateAverage(math, literature, english) {
  return((math + literature + english) / 3).toFixed(2);
}

function getRank(average) {
  const avg = parseFloat(average);
  if (avg >= 8) return 'Giỏi';
  if (avg >= 6.5) return 'Khá';
  if (avg >= 5) return 'Trung Bình';
  return 'Yếu';
}

const StudentsPage = () => {
  const [students, setStudents] =useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const saveStudentsLocalStorage = (studentsData) => {
    localStorage.setItem('students', JSON.stringify(studentsData));
  }
  const getStudentLocalStorage = () => {
    const storedStudents = localStorage.getItem('student');
    return storedStudents ? JSON.parse(storedStudents) : data;
  }
  useEffect(() => {
    const storedStudents = getStudentLocalStorage();
    setStudents(storedStudents);
  }, []);

  useEffect(() => {
    if (students.length > 0) {
      saveStudentsLocalStorage(students);
    }
  }, [students]);
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">Danh sách sinh viên</h2>

      <ul className="space-y-2">
        {data.map((student) => (
          <li
            key={student.id}
            className="p-4 bg-white rounded shadow hover:bg-blue-50 cursor-pointer border border-gray-200 transition"
            onClick={() => setSelectedStudent(student)}
          >
            <p className="font-medium text-gray-800">
              {student.name}
              <span className="text-sm text-gray-500 ml-2">({student.id}@student.com)</span>
            </p>
          </li>
        ))}
      </ul>

      {selectedStudent && (
        <div className="mt-6 bg-gray-100 p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4 text-indigo-700"> Thông tin chi tiết</h3>
          <div className="space-y-2 text-gray-800">
            <p><strong>Họ tên:</strong> {selectedStudent.name}</p>
            <p><strong>Tuổi:</strong> {selectedStudent.age}</p>
            <p><strong>Toán:</strong> {selectedStudent.math}</p>
            <p><strong>Văn:</strong> {selectedStudent.literature}</p>
            <p><strong>Anh:</strong> {selectedStudent.english}</p>
            <p><strong>Điểm trung bình:</strong> {calculateAverage(selectedStudent.math, selectedStudent.literature, selectedStudent.english)}</p>
            <p><strong>Học lực:</strong> <span className="font-semibold text-green-600">{getRank(calculateAverage(selectedStudent.math, selectedStudent.literature, selectedStudent.english))}</span></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;