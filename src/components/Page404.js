const Page404 = ({ location }) => {
  return (
    <div className='container'>
      <h2 className='alert-danger my-5 p-3 rounded-2'>
        No match found for <code>{location.pathname}</code>
      </h2>
    </div>
  )
}

export default Page404
