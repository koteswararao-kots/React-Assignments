import logo from './logo.svg';
import './App.css';

const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
};


function App() {
  return (
    <div className='userData'>
      <img src={employee.profileImg} alt="userImage" />
      <h1>{employee.name}</h1>
      <p>Location</p>
      <h3>{employee.location}</h3>
      <p>Bloodgroup</p>
      <h3>{employee.bloodGroup}</h3>
      <p>Age</p>
      <h3>{employee.age}</h3>
    </div>


  );
}

export default App;
