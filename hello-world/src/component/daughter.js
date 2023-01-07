export default function Daughter(props){
    return(
        <>
        <p>I am Daughter</p>
        <p>Daughter's money:{props.money}</p>
        <p>Daughter's toy:{props.toy}</p>
        <button>增加零用錢</button>
        <hr/>
        </>
    )
}