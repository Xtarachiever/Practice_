import React,{ Component } from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo'

interface BookListsProps{
    // data:{
    //     books: string[]
    //     loading: boolean
    // }
}
const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`
// const BookList: React.FC<BookListsProps> = () => {
//     const {data,error, loading} = useQuery(getBooksQuery)
//     console.log(error)
//     const displayBooks = () =>{
//         if(loading){
//             return(
//                 <h3>Loading...</h3>
//             )
//         }
//         else{
//             return(
//                 data.books.map((book:any)=>(
//                     <h2>{book.name}</h2>
//                 ))
//             )
//         }
//     }
//     return(
//         <div>
//             {
//                 displayBooks()
//             }
//         </div>
//     )
// }
// export default BookList

class BookList extends Component<BookListsProps>{
    displayBooks(){
        
        // if(data.loading){
        //     return(<div>Loading Books</div>)
        // }
        // else{
        //     return(data.books.map(book=>{
        //         return(
        //             <li>{book.name}</li>
        //         )
        //     }))
        // }
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <ul>
                   <li>Book Name</li>
                </ul>
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);