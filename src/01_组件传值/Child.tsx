interface PropsType {
  msg: string
}

export default function Tick(props: PropsType) {
  console.log('p', props);
  
  return (
    <>
      <h2>{props.msg}</h2>
    </>
  );
}
