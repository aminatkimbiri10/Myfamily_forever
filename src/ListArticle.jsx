import { useRef,useReducer } from "react"

function Article() {
    const id=useRef()
    const desi=useRef()
    const prix=useRef()
    function Reducer(state,action) {
        switch (action.type) {
            case "ADD":
                return [... state,{
                    id: action.id,
                    desi: action.desi,
                    prix: action.prix
                  }];
                break;
            case "Reset":
                return state.filter((item)=>item.id!==action.id);
                break;
            case "Empty":
                return [];
                break;
        
            default:
                break;
        }
    }

    const [state,dispatch]=useReducer(Reducer,[])
    function AddArticle() {
        dispatch({
            type:'ADD',
            id:id.current.value,
            desi:desi.current.value,
            prix:prix.current.value
        })
    }
    function ResetArticle(id_article) {
        dispatch({type:'Reset',id:id_article})
    }
    function Empty() {
        dispatch({type:'Empty'})
    }
    return(
        <>
        <form action="">
        <label htmlFor="id">ID :<input type="number" name="id" id="id" ref={id}  /></label><br />
        <label htmlFor="desi">Désignation :<input type="text" name="desi" id="desi" ref={desi} /></label><br />
        <label htmlFor="prix"> Prix :<input type="number" name="prix" id="prix" ref={prix}  /></label><br />
        <input type="button" value="Ajouter" onClick={AddArticle} />
        <input type="button" value="Vider" onClick={Empty}  />
        </form>
        <h1>Liste Articles</h1>
        <ul>
            {state.map((item,index)=>{
                return(
                    
                <li key={index}>
                   Id: {item.id} | Désignation: {item.desi} | Prix :{item.prix}
                   <button type="button" onClick={()=>ResetArticle(item.id)} className="reset">Annuler</button><hr />
                </li> )
            })}
        </ul>
        </>
    )
}
export default Article