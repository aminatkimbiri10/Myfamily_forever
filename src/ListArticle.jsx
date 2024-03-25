import { useState } from "react"

function Article() {
    const [id,setId] = useState()
    const [desi,setDesi] = useState()
    const [prix,setPrix] = useState()
    const [articles,setArticles] = useState([])

    function AddArticle() {
        setArticles([...articles,{id:id,desi:desi,prix:prix}])
        console.log(articles)
    }
    function ResetArticle(e) {
        e.target.parentElement.remove()
        articles.splice(articles.indexOf(e.target.value),1)

    }
    function Empty() {
        setArticles([])
    }

    function HandleInput(e) {
        switch (e.target.name) {
            case 'id':
                setId(e.target.value)
                break;
            case 'desi':
                setDesi(e.target.value)
                break;
            case 'prix':
                setPrix(e.target.value)
                break;
        
        }
    }
    return(
        <>
        <form action="">
        <label htmlFor="id">ID :<input type="number" name="id" id="id" onChange={HandleInput}  /></label><br />
        <label htmlFor="desi">Désignation :<input type="text" name="desi" id="desi" onChange={HandleInput}  /></label><br />
        <label htmlFor="prix"> Prix :<input type="number" name="prix" id="prix" onChange={HandleInput}  /></label><br />
        <input type="button" value="Ajouter" onClick={AddArticle} />
        <input type="button" value="Vider" onClick={Empty} />
        </form>
        <h1>Liste Articles</h1>
        <ul>
            {articles.map((item,index)=>{
                return(
                    
                <li key={index}>
                   Id: {item.id} | Désignation: {item.desi} | Prix :{item.prix}
                   <button type="reset" onClick={ResetArticle}>Annuler</button><hr />
                </li> )
            })}
        </ul>
        </>
    )
}
export default Article