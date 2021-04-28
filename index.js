class App extends React.Component{
    render(){
        return(
            <div>
            <Hello 
                to="me" 
                from="you" 
                // num={3}
                // data={[1,2,3,4,5]}
                // isFunny
                bangs={4}
                img="http://www.hello.com/img_/hellowithwaves.png"
            />
            {/* <Hello 
                to="you" 
                from="me"
                bangs={1000}
            /> */}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root")); 