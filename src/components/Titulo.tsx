export default function Titulo(props) {
  return (
    <div className='flex flex-col justify-center'>
      <h1 className='px-7 py-4 text-3xl'>{props.children}</h1>
      <hr className='border-2 border-blue-500' />
    </div>
  );
}
