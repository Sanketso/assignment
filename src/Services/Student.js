import {db} from '../Firebase.configure';

import {collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore"
//import students from '../components/student';
//import Student from '../components/AddStudent';

const StudentCollectionRef =collection(db,"Students")
class StudentDataService{
 addnewStudents =(newStudents)=>{
    return addDoc(StudentCollectionRef,newStudents);
 };
 updateStudents=(name,updateStudents)=>{
    const StudentsDoc =doc(db,"Students",name)
    return updateDoc(StudentsDoc,updateStudents);
 };

  deleteStudents=(name)=>{
    const StudentsDoc =doc(db,"Students",name)
    return deleteDoc(StudentsDoc);
  };

  getAllStudents =()=>{
    return getDoc(StudentCollectionRef);
  }

  getStudents=(name)=>{
    const StudentsDoc= doc(db,"Students",name)
    return getDocs(StudentsDoc);
  }
}
export default new  StudentDataService();