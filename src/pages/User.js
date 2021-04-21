import React from 'react';

const User = (props) => {

  const [birthYear, setBirthYear] = React.useState();
  const [birthMonth, setBirthMonth] = React.useState();
  const [age, setAge] = React.useState();
 
  const { userName } = props;

  React.useEffect(() => {
    const newAge = 2021 - birthYear;
    setAge(newAge);
  }, [birthYear, birthMonth])

  const handleChange = (e) => {
    const { value } = e.target;
    setBirthYear(value);
  }

  return (
    <div>
      <p>Welcome user: {userName}</p>
      <input value={birthYear} onChange={handleChange} />
      <p>Age: {age}</p>
    </div>
  )
}

export default User;