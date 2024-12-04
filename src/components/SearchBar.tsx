export default function SearchBar() {

  // REVIEW - Uncontrolled Form Submission

  function findMovies() {
    event?.preventDefault()
    const form = event?.target as HTMLFormElement
    console.log(form.query.value)


  }


  return (
    <form className="SearchBar" onSubmit={findMovies}>

      <div className="input-group">
        <input className='form-control' type="text" required placeholder='Find a movie' name="query" />
        <button className='btn' type='submit'>
          <i className="mdi mdi-magnify"></i>
        </button>
      </div>

    </form>
  )

}