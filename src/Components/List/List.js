import React from 'react';
import {API_URL}from '../../config';
import './List.css'; 
import Loading from '../common/Loading'
class List extends React.Component {
constructor(){
    super();
    this.state={
        londig:false,
        currencies:[],
        error:null,
    }
}
componentDidMount(){
    this.setState({
        londig: true
    })
    fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
    .then((response)=>{
        return response.json();  
    })
    .then((data)=>{
        this.setState({
            londig: false,
            currencies: data.currencies
        })
    })
    .catch(()=>{
        this.setState({
            londig: false
        })
    })
}
hadleChangPercnt= percent =>{
    if(percent > 0){
        return <span className='percent-raised'>&uarr; {percent}</span>

    }else if(percent < 0){
        return <span className='percent-fallen'>&darr; {percent}</span>

    }else{
        return<span>{percent}</span>    
    }
}
render (){
    console.log(this.state)
    const{londig,currencies,error}=this.state
    if(londig){
        return(
            <div className='loading-container'>
                <Loading/>
            </div>
        )
    }
    return(
        <div className='Table-container'>
            <table className='Table'>
                <thead className='Table-head'>
                  <tr>
                     <th>Cryptocurrency</th>
                     <th>Price</th>
                     <th>Market Cap</th>
                     <th>24H Change</th>
                  </tr>  
                </thead>
                <tbody className='Table-body'>
                    {
                        currencies.map((currency)=>{
                            console.log(currency);
                            return(
                                <tr>
                                    <td>
                                        <span className='Table-rank'>{currency.rank}</span>
                                        <span>{currency.name}</span>
                                    </td>

                                    <td>
                                        <span className='Table-dollar'>$</span>
                                        <span>{currency.price}</span>
                                    </td>
                                    
                                    <td>
                                        <span className='Table-dollar'>$</span>
                                        <span>{currency.marketCap}</span>
                                    </td>

                                    <td>
                                        {this.hadleChangPercnt(currency.percentChange24h)}  
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody> 
            </table>
        </div>
    )
}
}
export default List;




















































// import React from "react";
// import {API_URL} from '../../config';
// import './List.css';
// import Loading from '../common/Loading'

// class List extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             loading:false,
//             currencies:[],
//             error:null
//         }
//     }

//     componentDidMount(){
//         this.setState({
//             loading:true
//         })
//         fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
//         .then((response)=>{
//             return response.json()
//         })
//         .then((data)=>{
//             this.setState({
//                 loading:false,
//                 currencies:data.currencies
//             })
//         })
//         .catch(()=>{
//             this.setState({
//                 loading:false
//             })
//         })
//     }
//     hadleChangPercnt = percent =>{
//         if(percent < 0){
//             return(<span  className='percent-raised'>&narr</span>)
//         }
//         else if (percent > 0){
//             return(<span className='percent-fallen'>&darr</span>)
//         }
//         else{
//             return(<span>{percent}</span>)
//         }
//     }
//     render(){
//         console.log(this.state);
//         const{loading,currencies,error}=this.state
//         if(loading){
//             return(
//                 <div className='loading-container'>
//                     <Loading/>
//                 </div>
//             )
//         }
//         return(
//            <div className='Table-container'>
//                <table className='Table'>
//                    <thead className='Table-head'>
//                        <tr>
//                          <th>Cryptocurrency</th>
//                          <th>Price</th>
//                          <th>Market Cap</th>
//                          <th>24H Change</th>
//                        </tr>
//                    </thead>
//                    <tbody className='Table-body'>
//                        {currencies.map((currency)=>{
//                            console.log(currency);
//                            return(
//                                <tr>
//                                    <td>
//                                        <span className='Table-rank'>{currency.rank}</span>
//                                        <span>{currency.name}</span>
//                                    </td>
//                                    <td>
//                                        <span className='Table-dollar'>$</span>
//                                        <span>{currency.price}</span>
//                                    </td>
//                                    <td>
//                                         <span className='Table-dollar'>$</span>
//                                         <span>{currency.marketCap}</span>
//                                    </td>
//                                    <td>
//                                         {this.hadleChangPercnt(currency.percentChange24h)}
//                                    </td>
//                                </tr>
//                            )
//                        })}
//                    </tbody>
//                </table>
//            </div>
//         )
//     }
// }
// export default List;










// import React from 'react';
// import {API_URL} from '../../config';
// import './List.css';
// import Loading from '../common/Loading';

// class List extends React.Component {
//     constructor(){
//         super()
//         this.state={
//             loading:false,
//             currencies:[],
//             error:null
//         }
//     }
//     componentDidMount(){
//         this.setState({
//             loading:true
//         })
//         fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
//         .then((response)=>{
//             return response.json()
//         })
//         .then((data)=>{
//             this.setState({
//                 loading:false,
//                 currencies: data.currencies
//             })
//         })
//         .catch(()=>{
//             this.setState({
//                 loading:false
//             })
//         })
//     }
//     hadleChangPercnt = percent =>{
//         if(percent < 0){
//             return(
//                 <span  className='percent-raised'>&uarr; {percent}</span>
//             )
//         }else if(percent < 0){
//             return(
//                 <span span className='percent-fallen'>&darr; {percent}</span>
//             )
//         }
//         else{
//             return(<span>{percent}</span>)
//         }
//     }
//     render(){
//         console.log(this.setState);
//         const {loading,currencies,error} = this.state
//         if(loading){
//             return(
//                 <div className='loading-container'>
//                     <Loading/>
//                 </div>
//             )
//         }
//         return(
//             <div className='Table-container'>
//                 <table className='Table'>
//                     <thead  className='Table-head'>
//                       <tr>
//                         <th>Cryptocurrency</th>
//                         <th>Price</th>
//                         <th>Market Cap</th>
//                         <th>24H Change</th>
//                       </tr>  
//                     </thead>
//                     <tbody className='Table-body'>
//                         {currencies.map((currency)=>{
//                             console.log(currency)
//                                 return(
//                                     <tr>
//                                         <td>
//                                             <span className='Table-rank'>{currency.rank}</span>
//                                             <span>{currency.name}</span>
//                                         </td>

//                                         <td>
//                                             <span className='Table-dollar'>$</span>
//                                             <span>{currency.price}</span>
//                                         </td>

//                                         <td>
//                                             <span className='Table-dollar'>$</span>
//                                             <span>{currency.marketCap}</span>
//                                         </td>

//                                         <td>
//                                             {this.hadleChangPercnt(currency.percentChange24h)}
//                                         </td>
//                                     </tr>
//                                 )
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }



// export default List;




// import React from 'react';
// import {API_URL} from '../../config';
// import './List.css';
// import Loading from '../common/Loading';

// class List extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             loading:false,
//             currencies:[],
//             error:null,
//         }
//     }
//     componentDidMount(){
//         this.setState({
//             loading:true
//         })
//         fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
//         .then((response)=>{
//             return response.json()
//         })
//         .then((data)=>{
//             this.setState({
//                 loading:false,
//                 currencies:data.currencies
//             })
//         })
//         .catch(()=>{
//             this.setState({
//                 loading:false
//             })
//         })
//     }
//     hadleChangPercnt = percent =>{
//         if(percent<0){
//             return(
//                 <span className='percent-raised'>&uarr; {percent}</span>
//             )
//         }
//         else if(percent>0){
//             return(
//                 <span className='percent-fallen'>&darr; {percent}</span>
//             )
//         }
//         else{
//             return(
//                 <span>{percent}</span>
//             )
//         }
//     }
//     render(){
//         console.log(this.state);
//         const{loading,currencies,error}=this.state
//         if(loading){
//             return(
//                 <div className='loading-container'>
//                     <Loading />
//                 </div>
//             )
//         }
        
//         return(
//             <div className='Table-container'>
//                  <table className='Table'>
//                      <thead  className='Table-head'>
//                        <tr>
//                          <th>Cryptocurrency</th>
//                          <th>Price</th>
//                          <th>Market Cap</th>
//                          <th>24H Change</th>
//                        </tr>  
//                     </thead>
//                     <tbody className='Table-body'>
//                         {currencies.map((currency)=>{
//                           console.log(currency);
                            
//                         return(
//                             <tr>
//                                 <th>
//                                     <span className='Table-rank'>{currency.rank}</span>
//                                     <span>{currency.name}</span>
//                                 </th>
//                                 <th>
//                                     <span className='Table-dollar'>$</span>
//                                     <span>{currency.price}</span>
//                                 </th>
//                                 <th>
//                                     <span className='Table-dollar'>$</span>
//                                     <span>{currency.marketCap}</span>
//                                 </th>
//                                 <th>
//                                    {this.hadleChangPercnt(currency.percentChange24h)} 
//                                 </th>
//                             </tr>
//                         )
//                         })
                        
//                         }
                        
//                     </tbody>

//                 </table>
             
//             </div>
//         )
//     }
// } 


// export default List; 
















// import React from 'react';
// import {API_URL}from '../../config';
// import './List.css';
// class List extends React.Component {
//     constructor(){
//         super()
//         this.state={
//             londig:false,
//             currencies:[],
//             error:null
//         }   
//      }
//      componentDidMount(){
//          this.setState({
//              londig: true
//          })
//         fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
//         .then((response)=>{
//             return response.json()
//         })
//         .then((data)=>{
//             this.setState({
//                 londig: false,
//                 currencies: data.currencies
//             })
//         })
//         .catch(()=>{
//             this.setState({
//                 londig: false
//             })
//         })
//      }
//      render(){
//          console.log(this.state);
//          const{londig,currencies,error}=this.state
//          if(londig){
//              return(
//                  <div>
//                      Loding....
//                  </div>
//              )
//          }
//          return(
//              <div>
                 
//              </div>
//          )
//      }
// }

// export default List;

// import React from 'react';
// import {API_URL} from '../../config';
// import './List.css';

// class List extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             loading:false,
//             currencies:[],
//             error:null
//         }
//     }
//     componentDidMount(){
//         this.setState({
//             loading:true
//         })
//         fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
//         .then((response)=>{
//             return response.json()
//         })
//         .then((data)=>{
//         this.setState({
//             loading:false,
//             currencies: data.currencies
//         })
//     })
//         .catch(()=>{
//             this.setState({
//                 loading:false
//             })
        
//         })

//     }
//     render(){
//         console.log(this.state);
//         const {loading,currencies,error}=this.state
//         if(loading){
//             return (
//                 <div>
//                     Loading......
//                 </div>
//             )
//         }
//         return(
//             <div>

//             </div>
//         )



//     }
// }




// export default List;





























