const App = () => (
  <div>
    <Person name="Christien" age="25" hobbies={['tennis', 'piano', 'coding']} />
    <Person name="Peanut" age="6" hobbies={['walking', 'eating', 'barking']} />
    <Person
      name="Junji Ito"
      age="58"
      hobbies={['writing manga', 'horror movies', 'reading']}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
