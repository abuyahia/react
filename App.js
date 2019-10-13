import React ,{Component} from 'react'; 

class App extends Component {
 
 constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
 }
  
    render(){       
      var { isLoaded, items } = this.state;
        if (!isLoaded){
          console.log(isLoaded)
            return(
            <div>... Loading ...</div>            
            )
        }
        else{
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
