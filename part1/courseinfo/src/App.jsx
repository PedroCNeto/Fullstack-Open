const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  const Header = (props) => {
    return(
      <div>
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Part = (props) => {
    return(
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }

  const Content = (props) => {
    return(
      <div>
        <Part part={props.part} exercises={props.exercises}/>
      </div>
    )
  }

  const Total = (props) => {
    return(
      <div>
        <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} /> 
      <Content part={part2} exercises={exercises2} /> 
      <Content part={part3} exercises={exercises3} /> 
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App