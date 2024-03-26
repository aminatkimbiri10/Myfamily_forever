import { useState } from "react"

function Article() {
    const [id,setId] = useState()
    const [desi,setDesi] = useState('Iphone')
    const [prix,setPrix] = useState(400)
    const [articles,setArticles] = useState([])

    function AddArticle() {
        setArticles([...articles,{id:id,desi:desi,prix:prix}])
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
        <label htmlFor="id">ID :<input type="number" name="id" id="id" onChange={HandleInput}  /></label>
        <label htmlFor="desi">Désignation :<input type="text" name="desi" id="desi" onChange={HandleInput}  /></label>
        <label htmlFor="prix"> Prix :<input type="number" name="prix" id="prix" onChange={HandleInput}  /></label>
        <input type="button" value="Ajouter" onClick={AddArticle} />
        </form>
        <h1>Liste Articles</h1>
        <ul>
            {articles.map((item)=>{
                return(<li key={item.id}>
                    {item.id}
                </li>)
            })}
        </ul>
        </>
    )
}
export default Article