import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import _ from 'underscore'
import 'react-datepicker/dist/react-datepicker.css';

const Report = ({portrait, signData, birth, name, other}) => {
  if (!name) {
    name = 'Hunky Dory'
  };
  console.log(other, "<<<<<<other");
  return (
    <article>
      <header style={{'padding-top': '20px','padding-bottom':'10px'}}>
        <h2>{name}'s Personal Portrait</h2>
      </header>
      <section >
        <h4>You were born  {birth.toNow().slice(3)} ago!</h4><br/>
        <h4>Your Sun sign is: <em>{signData[0].sign}</em></h4>
        <h4>Your Moon sign is: <em>{signData[1].sign}</em></h4>
        <h4>Your Ascendant is: <em>{signData[10].sign}</em></h4>
      </section>
      <section style={{'padding-top': '20px','padding-bottom':'10px'}}>
        <h3>Zodiac report:</h3>
        <article >
        {portrait.report.map((line, i) => <p key={i}>{line}</p>)}
        </article>
      </section>
      <footer>
        <p>
          <strong>Date of your astrology report:&nbsp;</strong>
          <time type="datetime-local">{moment().format('dddd, MMMM Do YYYY')}</time>
        </p>
        <h4>{portrait.spiritual_lesson}</h4>
      </footer>
    </article>
  );
};

// Report.propTypes = {
//   // ???: React.PropTypes.array.isRequired
// };


export default Report;
