import React ,{Component} from 'react'; 

class App extends Component {
 
 constructor(props){
  console.log("constructor");
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
 }
  
    render(){
      console.log("render");
      var { isLoaded, items } = this.state;

        if (!isLoaded){
          console.log(isLoaded)
            return(
            <div>... Loading ...</div>            
            )
        }
        else{
          console.log(isLoaded)
            return (
              <div className="App">
                <ul>
                    {items.map(item => (
                      <li key={item.id}>
                            id: {item.id},
                            title: {item.title}
                      </li>
                    ))}
                </ul>
              </div>
            )
        }

    }

}
 
export default App;
