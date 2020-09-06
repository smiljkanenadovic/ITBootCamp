import React from 'react'; 
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Card from './components/Card';

const App = () => {
    let description = 'Emoji festive'
    let string = 'Click'
    let url = 'https://images.emojiterra.com/google/android-10/512px/1f973.png'

    return (
        <div>
            <h1>Form</h1>
            <Form string = {string}/>
            <h1>Card</h1>
            <Card url = {url} description = {description}/>
        </div>
    )
}
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);