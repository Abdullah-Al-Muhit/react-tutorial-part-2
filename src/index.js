import React from 'react';
import ReactDOM from 'react-dom';

// LECTURE 5
// const index = 0;

// setInterval(() => {
//   const element = (
//     <h1 className='heading' tabIndex={index}>
//       <span className='text'>hello {new Date().toLocaleTimeString()}</span>
//       <img src="" alt="" />
//     </h1>
//   )
//   ReactDOM.render(element, document.getElementById('root'));

// }, 1000);

// LECTURE 6

class Clock extends React.Component {
  render() {
    return (
      <h1 className='heading'>
        <span className="text">
          hello - {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}
        </span>
      </h1>
    )
  }
}

ReactDOM.render(<clock locale='bn-BD'>test<clock/>, document.getElementById('root'));