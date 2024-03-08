'use client'
import '../components/Showdata.css'
const ShowData=({results})=>{
    return(
        <div className='showresultmain'>
          {
            Array.isArray(results) && results.length > 0 ? (
              <table className="custom-table">
                <thead>
                  <tr>
                    <th className="custom-table-cell">Person Name</th>
                    <th className="custom-table-cell">State</th>
                    <th className="custom-table-cell">District</th>
                    <th className="custom-table-cell">Police Station</th>
                    {/* <th className="custom-table-cell">More Details</th> */}
                  </tr>
                </thead>
                <tbody>
                  {
                    results.map((recordItem) => {
                      return (
                        <tr key={recordItem.id}>
                          <td className="custom-table-cell capitalize">{recordItem.person_name}</td>
                          <td className="custom-table-cell capitalize">{recordItem.state}</td>
                          <td className="custom-table-cell capitalize">{recordItem.district}</td>
                          <td className="custom-table-cell capitalize">{recordItem.police_station}</td>
                          {/* <td className="custom-table-cell capitalize"><a href=''>More Details</a></td> */}
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            ) : <h1 className='datanotfound'>{results}</h1>}
        </div>
    )
}
export default ShowData