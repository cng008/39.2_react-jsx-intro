const App = props => (
  <div>
    <FirstComponent />
    <NamedComponent name="Christien" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
