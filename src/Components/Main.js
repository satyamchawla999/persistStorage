import Posts from './Posts';
// import {persistor} from "../store"
import Users from './Users';
import "../Assets/Styles/main.css"

const Main = ()=>{

  // console.log(persistor.persist().then((res)=>(console.log(res))))

  return (
    <div className='main'>
      <div>
        <Posts/>
      </div>

      <div>
        <Users/>
      </div>
      
      
    </div>
  );
}

export default Main;






// const Main = ()=>{
//   const dispatch = useDispatch()
//   // const { entities, loading } = useSelector((state) => state.post)
//   const loading = useSelector((state)=>state.post.loading);
//   const entities = useSelector((state)=>state.post.entities)


//   useEffect(() => {
//     dispatch(getPosts({ category: 'politics', sortBy: 'name' }))
//   }, [])

//   if(loading) {
//     <p>Loading...</p>
//   }

//   return (
//     <div>
//       <h2>Blog Posts</h2>
      
//       {entities?.map((post) => (
//         <p key={post.id}>{post.title}</p>
//       ))}
      
      
//     </div>
//   );
// }

// export default Main;
