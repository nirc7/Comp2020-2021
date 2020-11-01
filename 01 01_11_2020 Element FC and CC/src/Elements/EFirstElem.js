import React from 'react';
import FCStudent from '../FunctionalElements/FCStudnet';
import Header from '../Header';


const EFirstElem =
  <div>
    {Header}
    <h1>Hello World!3</h1>
    <div className="bigmar">ruppin</div>
    <button style={{ marginLeft: 15, marginTop: 10 }} className="btn btn-success" >push</button>

    <FCStudent name="avi" age={27} />
    <FCStudent name="ben" age={28} />
    <FCStudent name="charlie" age={29} />

    <h3>Ruppin ACADEMIC CENTER</h3>
  </div>;

export default EFirstElem;