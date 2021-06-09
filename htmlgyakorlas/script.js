

        function Welcome(props) {
            return <h1>Hello, {props.name} {props.petname}</h1>;
          }
          
          const element = <Welcome name="Sara" petname="Sari" />;
          ReactDOM.render(element, document.getElementById('root'));
    
