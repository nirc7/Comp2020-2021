import './App.css';

let apiUrl = "http://localhost:56524/api/students/";

function App() {

  const btnGetStudents = () => {
    console.log('start');

    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(response => {
        console.log('response=', response);
        console.log('response.status', response.status);
        console.log('response.ok', response.ok);
        return response.json();
      })
      .then((result) => {
        console.log("fetch btnGetStudents= ", result);
        result.map(stu => console.log(stu.ID + ", " + stu.Name + ", " + stu.Avg));
        let stu1 = result[0];
        console.log(stu1.ID + ", " + stu1.Name + ", " + stu1.Avg)
      },
        (error) => {
          console.log("err post=", error);
        });

    console.log('end');
  }

  const btnPostAStudent = () => {
    console.log('start');

    let s = {
      "ID": 5,
      "Name": "eli",
      "Avg": 88.8
    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(response => {
        console.log('response=', response);
        console.log('response.status', response.status);
        console.log('response.ok', response.ok);
        return response.json();
      })
      .then((result) => {
        console.log("fetch btnGetStudents= ", result);
        console.log(result.ID + ", " + result.Name + ", " + result.Avg)
      },
        (error) => {
          console.log("err post=", error);
        });

    console.log('end');
  }

  const btnDeleteAStudent = () => {
    console.log('start');

    fetch(apiUrl + '?id=2' , {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(response => {
        console.log('response=', response);
        console.log('response.status', response.status);
        console.log('response.ok', response.ok);
        if (response.ok) {
          console.log('id 2 was deleted!');
        }        
      });

    console.log('end');
  }

  const btnUpdateAStudent = () => {
    console.log('start');

    let s = {
      "ID": 2,
      "Name": "carlie222",
      "Avg": 97.222
    };

    fetch(apiUrl + '2', {
      method: 'PUT',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(response => {
        console.log('response=', response);
        console.log('response.status', response.status);
        console.log('response.ok', response.ok);
        return response.json();
      })
      .then((result) => {
        console.log("fetch btnGetStudents= ", result);
        console.log(result.ID + ", " + result.Name + ", " + result.Avg)
      },
        (error) => {
          console.log("err post=", error);
        });

    console.log('end');
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={btnGetStudents}>get students</button> <br />
        <button onClick={btnPostAStudent}>post a student</button> <br/>
        <button onClick={btnDeleteAStudent}>delete a student</button> <br />
        <button onClick={btnUpdateAStudent}>update a student</button> <br />
      </header>
    </div>
  );
}

export default App;
