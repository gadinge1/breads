const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
    // Confirm we are getting our bread date in the terminal.
    // console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <a href={`/breads/${index}/edit`}><button>Edit</button></a>
        <form action={`/breads/${index}/?_method=DELETE`} method="POST"> {/*Code along 6.5.3 for delete route*/}
            <input type='submit' value="DELETE"/>
        </form>
        <p>
            and it 
            {
                bread.hasGluten 
                ? <span> does </span>
                : <span> does NOT </span>
            }
            have gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <li><a href="/breads">Go home </a></li>
      </Default>
    )
}

module.exports = Show