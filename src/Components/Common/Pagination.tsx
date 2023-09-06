
function Pagination({
    totalPost = 20,
    postPerPage = 9,
    currentPage = 1,
    setPage
}: PaginatonProps) {
    let pages:number[] = [];
    var availablePage: number = Math.ceil(totalPost/postPerPage) 
    for(let i=1;i<=availablePage;i++){
      console.log(i)
      pages.push(i)
    }
  return (
    <div className='flex flex-row items-center justify-center w-full'>
        <ul className='flex flex-row items-center justify-center w-full gap-10 '>
            {pages.map(page=>(
              <li className={`px-3 py-1 rounded-lg cursor-pointer ${page==currentPage? 'bg-amber-300  text-white':'text-black'}`}
               key={page} 
               onClick={()=>setPage(page)}>
                {page}
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination