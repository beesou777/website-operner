import Button from './Button';


const  App = ()=>{
    return <div>
        <h1 className="one">website opener</h1>
        <p>which website do you want to open ?</p>
        <Button name='google' link="https://www.google.com"/>
        <Button name='youtube'link="https://www.youtube.com"/>
        <Button name='facebook'link="https://www.facebook.com"/>
        <Button name='github' link="https://www.github.com"/>
    </div>
}
export default App;