import {useHistory,useRouteMatch,NavLink,withRouter,useLocation} from "react-router-dom"



const BreadCrumbs = (props) => {

    const location=useLocation()

    const splittedURL=location.pathname.split("/").slice(1)

    let addedURL=""
  const finalLinks=  splittedURL.map((item,index)=>{
        addedURL+=("/"+item)
return (<>/<NavLink exact activeStyle={{backgroundColor:"pink"}} to={addedURL}>{item}</NavLink></>)
    })
    return (<div>
        <NavLink to="/">Home</NavLink>{finalLinks}
    </div>  );
}
 
export default withRouter(BreadCrumbs);