const App = () => (
  <div>
    <Tweet
      username="cng"
      name="christien"
      date="06/01/2022"
      message="I can code React!"
    />
    <Tweet
      username="cdog"
      name="peanut"
      date="06/01/2022"
      message="woof woof"
    />
    <Tweet
      username="doradora"
      name="doraemon"
      date="06/01/2222"
      message="I have a magic pocket"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
