import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
//     //bulunduğumuz konumu alır.
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=>console.log(position),
//         (err)=>console.log(err)
//     );
//     return <div>Latitude: </div>;
// }

// class yapılarında React.Component extende edilmelidir.
// Ayrıca bu yapılarda props kullanabilmek için classın constructor ında props set edilmelir.
// Yine bu class ta kullnacağımız state lerde tanımlanmalıdır.
// State bu class içinde kullanacağımız tüm değişkenler olarak tanımlanabilir. ve bir değişken değiştiğimde yeniden oluşur.
// Proplar ise bu clssa dışardan gelen veriler bi Arrar olar temsil edilir. props bu arrayin ismidir.
// Class içinde tanımlayacağımız değişkenleri state tanımladık bu değişkenleri setstate kullanarak sen ediyoruz.
class App extends React.Component{
    constructor(props){
        super(props);

        this.state = { lat: null, errorMessage:'' };
     
    }

    componentDidMount(){
        console.log("Component ekrenda ilk defa render edlirken çalışır");
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{
                this.setState({ lat: position.coords.latitude })
            },
            (err)=>{
                this.setState({errorMessage:err.message});
            }
        );  
    }

    componentDidUpdate(){
        console.log("Component herhangibir sebeble tekrar render edilirse çalışır");
    }
    // React says we have to define render!!
    render(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="Please accept location request" />;

    }
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)